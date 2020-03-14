export class Entity {
    constructor(canvas, context, offset){
        this.canvas = canvas;
        this.context = context;
        this.offset = offset;
    }
    drawEntity(entity){
        entity.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !==0){
                    if(value === 1){this.context.fillStyle = 'pink'
                    } else if(value === 2){this.context.fillStyle = 'blue'
                    } else if(value === 3){this.context.fillStyle = 'brown'
                    } else if(value === 4){this.context.fillStyle = 'white'} 
                    this.context.fillRect(x + this.offset.x, y + this.offset.y, 1, 1)
                }
            })
        })
    }
    moveX(moveAmount){
        this.offset -= moveAmount;
    }

}

export class Light extends Entity{
    constructor(canvas, context, offset, scale){
        super(canvas, context, offset)
        this.scale = scale;
        this.randomPos = [];
        this.lightArr2 = [];
        this.colors = [
            'blue',
            'red',
            'yellow',
        ];
        this.numLights = 10;
        this.lightRandomPosition()
    }
    drawLight(color) {
        for(let i = 0; i < this.numLights; ++i){
            this.context.fillStyle = this.colors[Math.floor(Math.random() * this.colors.length)];
            this.context.fillRect(this.randomPos[i].x + this.offset.x, this.randomPos[i].y + this.offset.y, 1, 1)
        }

    }
    lightRandomPosition(){
        this.randomPos = [];
        for (let i = 0; i < this.numLights; ++i){
            this.randomPos.push({x: 1 + Math.floor(Math.random() * this.lightPos()), y: 1 + Math.floor(Math.random() * this.lightPos())})
        }
    }
    lightPos() {
        let hej = this.canvas.height / this.scale;
        return this.canvas.height / this.scale;
    }
}
