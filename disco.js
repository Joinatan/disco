// import {countDown} from './countDown.js'
import {frame} from './frame.js'
import {showBeats} from './beats.js'
import {createDanceMan} from './createDanceMan.js'
import {Entity, Light} from './entity.js'
import Music from './music.js'
import { playSound1} from './music.js'
import {showSteps} from './steps.js'

const score = document.getElementById('score');
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const bpm = 1200 / 4;

const scale = 10;

const difficulty = 500;

context.scale(scale, scale);
const offset = {x: ((canvas.width - 5 * scale) / 2) / scale, y: (canvas.height - (6 * scale))/ scale }
const offset2 = {x: ((canvas.width - 25 * scale) / 2) / scale, y: (canvas.height - (6 * scale))/ scale }
const offset3 = {x: ((canvas.width + 15 * scale) / 2) / scale, y: (canvas.height - (6 * scale))/ scale }
const offsetArrow = {x: ((canvas.width + -25 * scale) / 2) / scale, y: 15}
const offsetArrow2 = {x: ((canvas.width + -5 * scale) / 2) / scale, y: 15}
const offsetArrow3 = {x: ((canvas.width + 15 * scale) / 2) / scale, y: 15}
const offsetFrame = {x: ((canvas.width + -16 * scale) / 2) / scale, y: 14}
const offsetBeat = {x: ((canvas.width + -36 * scale) / 2) / scale, y: 1}

let datorn = 'stand';

let color1 = ''
let color2 = ''
let pos1 = ''
let pos2 = ''
let stepInput = 'stand';
let cpuArrow = 'stand'
let cpu = 'stand'

//----------updatescore
function updateScore(points){
    score.innerHTML = 'SCORE: ' + points
}

//--countdown

function countDown(res){
    drawDisco()
    setTimeout(four, 1000)
    setTimeout(three, 2000)
    setTimeout(two, 3000)
    setTimeout(one, 4000)
    // zero().then((res) => {console.log(res);  return res})
    // zero().then((res) => {})
    setTimeout(zero, 5000)
}

function four(nr){
    drawDisco()
    playError.playSound(350, 5000).releaseSound(0.1)
    beat.drawEntity(showBeats(4))
    console.log(4)

}
function three(nr){
    drawDisco()
    beat.drawEntity(showBeats(3))
    playError.playSound(350, 5000).releaseSound(0.1)
    console.log(3)

}
function two(nr){
    drawDisco()
    beat.drawEntity(showBeats(2))
    playError.playSound(350, 5000).releaseSound(0.1)
}
function one(nr){
    drawDisco()
    beat.drawEntity(showBeats(1))
    playError.playSound(350, 5000).releaseSound(0.1)
}

function zero(){
    playError.playSound(350, 5000).releaseSound(0.1)
    callback(time)
}



//-----------------------enheter :)
const mainDanceMan = new Entity(canvas, context,  offset);
const danceManLeft1 = new Entity(canvas, context,  offset2);
const danceManRight1 = new Entity(canvas, context,  offset3);
const stepArrow = new Entity(canvas, context,  offsetArrow);
const stepArrow2 = new Entity(canvas, context,  offsetArrow2);
const stepArrow3 = new Entity(canvas, context,  offsetArrow3);
const rightStepFrame = new Entity(canvas, context,  offsetFrame);
const discoLight = new Light(canvas, context, {x: 1, y:1}, scale)
const discoLight2 = new Light(canvas, context, {x: 1, y:1}, scale)
const discoLight3 = new Light(canvas, context, {x: 1, y:1}, scale)
const beat = new Entity(canvas, context, offsetBeat)

//------------musik
let sine = 'sine'
let square = 'square'
let noise = 'noise'
let saw = 'sawtooth'

const note = {
    f: 174.61, 
    g: 196,
    a: 220,
    bb: 233.08,
    c: 261.63,
    d: 293.66,
    e: 329.63,
}

const playError = new Music(square, 0.1, 350, 0.02, 0.1);
const playGood = new Music(sine, 0.1, 350, 0.21, 0.1);

const bass = new Music(sine, 0.1, 80, 0.01, 0.01);
const bassGuitar = new Music(saw, 0.1, 80, 0.08, 0.1);
const bassGuitarPattern = [note.f, note.a, note.c, note.a];
const bassGuitarPattern2 = [note.g, note.bb, note.d, note.bb];
const bassGuitarPattern3 = [note.c / 2, note.e / 2, note.g, note.e / 2];
let bassGuitarIndex = 0;
const arp = new Music(square, 0.1, 90, 0.03, 0.1)
const arpHarmony = new Music(square, 0.1, 90, 0.03, 0.1)
const arpPattern = [note.f, note.a, note.c, note.e];
const arpHarmonyPattern = [note.a, note.c, note.e, note.g * 2];
const arpPattern2 = [note.g, note.bb, note.d, note.f * 2];
const arpHarmonyPattern2 = [note.bb, note.d, note.f * 2, note.a * 2];
const arpPattern3 = [note.e / 2, note.g, note.bb, note.d];
const arpHarmonyPattern3 = [note.g, note.bb, note.d, note.f * 2];
let arpIndex = 0;
const bassPattern1 = []
const hihat = new Music(noise, 0.01, 0.01, 0.01);
const hihatPattern1 = [1, 0, 1, 1];
let hihatIndex = 0;

function cpuStep(){
    let steps = ['stand', 'two', 'three', 'down'];
    let newStep = steps[Math.floor(Math.random() * steps.length)];
    return newStep;
}

let stepArray = [];

function createStepArrary(numSteps){
    for(let i = 0; i < numSteps; ++i){
        // let stepsy = stepArrow.drawEntity(showSteps(Math.floor(Math.random() * 3)))
        // let stepsy = stepArrow.drawEntity(cpuStep())
        let stepsy = cpuStep();
        stepArray.push(stepsy);
    }
}

createStepArrary(100);

let pos = 25;
function drawArrows(arr, pos){
    let stepie = []
    arr.forEach( (el, index) => {
        let offsetArrow4 = {x: ((canvas.width + -pos * scale + (index * 200)) / 2) / scale, y: 15}
        index = new Entity(canvas, context, offsetArrow4);
        // console.log(el, index)
        index.drawEntity(showSteps(el))
        // stepArrow.drawEntity(showSteps(stepArray[stepIndex]))
    })
}

function drawDisco(){
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width / scale, canvas.height / scale)
}

//----------tidsgrejer
let lastTime = 0;
let time = 0;
let accumulator = 0;
let accumulator2 = 0;
let accumulator3 = 0;
let accumulator4 = 0;
let accumulator5 = 0;
let testTiming = 0;
let deltaTime = 0;
const step = 1/200;

//------------------------------update loopen
let partsArray = [{a: 16}, {b: 16}, {c: 8}]
let partOne = true;
let part1Lenght = 16;
let partCheck1 = 0;
let part2Lenght = 16;
let partCheck2 = 0;
let part = partsArray[0];
let stepIndex = 0;
let moveArrow = 0;
let currentBeat = 1;


arp.setup()
arpHarmony.setup()
bassGuitar.setup()
// bass.setup()
hihat.setup()
function update(time){
    deltaTime += 1;
    accumulator += 1;
    accumulator2 += 1;
    accumulator3 += 1;
    accumulator4 += 1;
    accumulator5 += 1;

    if(accumulator4 === 0 || accumulator4 > bpm/8) {
        accumulator4 = 0;
        if(part.hasOwnProperty('a')){
            arp.playSound(arpPattern[arpIndex])
            arpHarmony.playSound(arpHarmonyPattern[arpIndex])
            bassGuitar.playSound(bassGuitarPattern[bassGuitarIndex] / 2, bassGuitarPattern[bassGuitarIndex])
            if(bassGuitarIndex >= bassGuitarPattern.length){bassGuitarIndex = 0};

        } else if(part.hasOwnProperty('b')) {
            arp.playSound(arpPattern2[arpIndex])
            arpHarmony.playSound(arpHarmonyPattern2[arpIndex])
            bassGuitar.playSound(bassGuitarPattern2[bassGuitarIndex] / 2, bassGuitarPattern[bassGuitarIndex])
            if(bassGuitarIndex >= bassGuitarPattern2.length){bassGuitarIndex = 0};

        } else if(part.hasOwnProperty('c')) { 
            arp.playSound(arpPattern3[arpIndex])
            arpHarmony.playSound(arpHarmonyPattern3[arpIndex])
            bassGuitar.playSound(bassGuitarPattern3[bassGuitarIndex] / 2, bassGuitarPattern[bassGuitarIndex])
            if(bassGuitarIndex >= bassGuitarPattern3.length){bassGuitarIndex = 0};
        }
        if(arpIndex >= arpPattern.length){
            arpIndex = 0;
        };
        if(hihatPattern1[hihatIndex] === 1){
            hihat.playNoise()
        }
        arpIndex += 1;
        hihatIndex += 1;
        bassGuitarIndex += 1;
        if(hihatIndex === 4){hihatIndex = 0}
    }
    if(accumulator3 === 0 || accumulator3 > bpm/6) {
        accumulator3 = 0;
        discoLight3.lightRandomPosition();
        cpuArrow = cpuStep()
    }

    if(accumulator2 > bpm/4) {
        accumulator2 = 0;
        partCheck1 += 1;

        //stepindex till arrayen
        if (stepIndex >= stepArray.length - 1){stepIndex = 0}
        // stepArray.shift()
        // pos += 15;
        pos += 10;

        if (partCheck1 > Object.values(part)[0]){
            part = partsArray[Math.floor(Math.random() * partsArray.length)]
            console.log('ny del')
            partCheck1 = 0;
        }
        if(currentBeat === 4){currentBeat = 0}
        currentBeat += 1

        // cpu = cpuArrow;

        moveArrow += 1;

        bass.playSound(70, 200)
        discoLight2.lightRandomPosition();
    }

    if(accumulator5 > bpm/2.3){
        accumulator5 = 0;
        stepIndex += 1;
        millisSeconds = Date.now() - date
        testTiming = millisSeconds
    }
    if(accumulator > bpm/2) {
        accumulator = 0;
        accumulator5 = 0;
        discoLight.lightRandomPosition();
        deltaTime = 0;
        // console.log(stepArray[stepIndex])
    }

    // lastTime = time;
    // deltaTime = 0;

    // timer.update(deltaTime);
    // requestAnimationFrame(update);
}
function drawEveryThing(){
    drawDisco();
    discoLight.drawLight()
    discoLight2.drawLight()
    discoLight3.drawLight()
    danceManLeft1.drawEntity(createDanceMan(stepArray[stepIndex]))
    danceManRight1.drawEntity(createDanceMan(stepArray[stepIndex]))
    // stepArrow.drawEntity(showSteps(stepArray[stepIndex]))
    // stepArrow2.drawEntity(showSteps(stepArray[stepIndex + 1]))
    // stepArrow3.drawEntity(showSteps(stepArray[stepIndex + 2]))
    mainDanceMan.drawEntity(createDanceMan(stepInput))
    rightStepFrame.drawEntity(frame())
    drawArrows(stepArray, pos)
    beat.drawEntity(showBeats(currentBeat))
};

let lastTime2;
let acc = 0;
const callback = (millis) => {
    if (lastTime2) {
        acc += (millis - lastTime2) / 1000;
        // console.log('acc', acc);
        while(acc > step) {
            update(step);
            acc -= step;
        }
        drawEveryThing();
    }
    lastTime2 = millis;
    requestAnimationFrame(callback);
}



countDown()

let date = Date.now()
let millisSeconds = Date.now() - date;
let points = 0;

playError.setup();
// playGood.setup();
document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if(event.keyCode === 38) {
        stepInput = 'stand'
    }
    if(event.keyCode === 39){
        stepInput = 'three'
    }
    if(event.keyCode === 37){
        stepInput = 'two'
    }
    if(event.keyCode === 40){
        stepInput = 'down'
    }
    if(event.timeStamp < testTiming + difficulty  &&
        event.timeStamp > testTiming - (difficulty * 1.2)  &&
        stepInput == stepArray[stepIndex]) {console.log('bra')
        points += 1
        // playGood.playSound().releaseSound();
    } else {
        console.log('dåligt')
        playError.playSound(350, 5000).releaseSound(0.1)
        points -= 1

    }
    console.log('POINTS: ', points)
    updateScore(points)
})
