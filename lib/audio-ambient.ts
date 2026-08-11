class AmbientSynth {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private lfo: OscillatorNode | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (this.isPlaying) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3);

      // Low frequency warmth (108Hz & 162Hz harmonic fifth)
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sine';
      this.osc1.frequency.setValueAtTime(108.0, this.ctx.currentTime);

      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'sine';
      this.osc2.frequency.setValueAtTime(162.0, this.ctx.currentTime);

      // Filter for warm analog feel
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      // LFO for slow ambient pulse
      this.lfo = this.ctx.createOscillator();
      this.lfo.frequency.setValueAtTime(0.1, this.ctx.currentTime); // 10s cycle
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(40, this.ctx.currentTime);

      this.lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      this.osc1.connect(filter);
      this.osc2.connect(filter);
      filter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.osc1.start();
      this.osc2.start();
      this.lfo.start();

      this.isPlaying = true;
    } catch (e) {
      console.warn('Web Audio API not supported or user gesture required', e);
    }
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;
    try {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
      setTimeout(() => {
        this.osc1?.stop();
        this.osc2?.stop();
        this.lfo?.stop();
        this.ctx?.close();
        this.isPlaying = false;
        this.ctx = null;
      }, 1000);
    } catch {
      this.isPlaying = false;
    }
  }

  public active(): boolean {
    return this.isPlaying;
  }
}

export const ambientSynth = new AmbientSynth();
