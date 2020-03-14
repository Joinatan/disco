let t1 = 0.03; // attack time in seconds
let l1 = 0.7; // attack level 0.0 to 1.0
let t2 = 0.3; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0

export default class Music {
    constructor(osc, level, freq, atk, rel) 
    {
        this.osc = osc;
        this.freq = freq;
        this.atk = atk; // attack time in seconds
        this.level = level; // attack level 0.0 to 1.0
        this.decay = 0.1; // decay time in seconds
        this.decayLevel = 0.10; // decay level  0.0 to 1.0
        this.rel = rel; // decay level  0.0 to 1.0
        this.relLevel = 0.0; // decay level  0.0 to 1.0


        this.filter = new p5.LowPass()
        this.env = new p5.Envelope(this.atk, this.level + 0.2, this.decay, this.level, this.rel, this.relLevel);
        if(this.osc != 'noise'){
            this.osc = new p5.Oscillator(this.osc);
            this.osc.disconnect()
            // this.osc.amp(0)
            this.osc.connect(this.filter)
            // this.osc = new p5.Oscillator(this.freq, this.osc);
        } else if(this.osc === 'noise'){
            this.osc = new p5.Noise('white');
            // this.osc.amp(0)
        }
    }
    setup() {
        this.osc.start();
    }

    playSound(freqi, cutoff) {
        // this.osc.amp(0.1)
        // this.osc.start();
        if(!filter){this.filter.freq(4000)}
        this.filter.freq(cutoff)
        this.env.play(this.osc.freq(freqi));
        return this;
    }
    playNoise(){
        // this.osc.amp(0.1)
        this.osc.start();
        this.env.play(this.osc);
        return this
    }
    releaseSound(release) {
        this.osc.amp(0.0, release)
        this.env.triggerRelease();
    }
}

// export function setup() {
//     let t1 = 0.01; // attack time in seconds
//     let l1 = 0.7; // attack level 0.0 to 1.0
//     let t2 = 0.3; // decay time in seconds
//     let l2 = 0.1; // decay level  0.0 to 1.0


//     let env = new p5.Envelope(t1, l1, t2, l2);
//     let osc = new p5.Oscillator('triangle');
// }

export function playSound1() {
    // starting the oscillator ensures that audio is enabled.
    osc = new p5.Oscillator('triangle');
    env = new p5.Envelope(t1, l1, t2, l2);
    osc.start();
    env.play(osc);
}
