export function showSteps (step){
    if(step === 'stand'){
        return [
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 4, 4, 4, 0, 0],
            [0, 4, 4, 4, 4, 4, 0],
            [4, 4, 4, 4, 4, 4, 4],
            [0, 0, 4, 4, 4, 0, 0],
            [0, 0, 4, 4, 4, 0, 0],
            [0, 0, 4, 4, 4, 0, 0],
        ];
    } else if (step === 'two'){
        return [
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 4, 4, 0, 0, 0],
            [0, 4, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 4, 4],
            [0, 4, 4, 4, 4, 4, 4],
            [0, 0, 4, 4, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
        ];
    } else if (step === 'three'){
        return [
            [0, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 4, 4, 0, 0],
            [4, 4, 4, 4, 4, 4, 0],
            [4, 4, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 4, 0],
            [0, 0, 0, 4, 4, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
        ];
    } else if (step === 'down'){
        return [
            [0, 0, 4, 4, 4, 0, 0],
            [0, 0, 4, 4, 4, 0, 0],
            [0, 0, 4, 4, 4, 0, 0],
            [4, 4, 4, 4, 4, 4, 4],
            [0, 4, 4, 4, 4, 4, 0],
            [0, 0, 4, 4, 4, 0, 0],
            [0, 0, 0, 4, 0, 0, 0],
        ];
    }
}
