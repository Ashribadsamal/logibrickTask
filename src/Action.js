import { COLOR_BLUE, COLOR_RED, COLOR_WATCH, COLOR_WATCH_BLUE, COLOR_WATCH_YELLOW, COLOR_YELLOW } from "./saga/Type/types"




export const getcolorSaga=()=>{
    return{
        type: COLOR_WATCH
    }
} 

export const getcolorSagaBlue=()=>{
    return{
        type: COLOR_WATCH_BLUE
    }
}

export const getcolorSagaYellow=()=>{
    return{
        type: COLOR_WATCH_YELLOW
    }
}

export const getColorRed=()=>{
    return{
        type:COLOR_RED,
        payload: "red"
    }
}

export const getColorBlue=()=>{
    return{
        type:COLOR_BLUE,
        payload: "blue"
    }
}


export const getColorYellow=()=>{
    return{
        type:COLOR_YELLOW,
        payload: "yellow"
    }
}
