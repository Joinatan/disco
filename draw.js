
import {createDanceMan} from './createDanceMan.js'

export function drawMan(danceMan, offset, context){
    danceMan.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !==0){
                context.fillStyle = 'pink';
                context.fillRect(x + offset.x, y + offset.y, 1, 1)
            }
        })
    })

}

export function draw(context, canvas, scale){
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width / scale, canvas.height / scale)
    drawMan(createDanceMan(stepInput), offset)
}
