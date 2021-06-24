import {put, takeEvery} from "redux-saga/effects"
import { getColorBlue, getColorRed, getColorYellow } from "../Action";
import { COLOR_WATCH, COLOR_WATCH_BLUE, COLOR_WATCH_YELLOW } from "./Type/types";


function* colorsSaga(){
    yield put(getColorRed());
}


export function* waitForClick(){
    yield takeEvery(COLOR_WATCH,colorsSaga);
}


function* colorsSagaBlue(){
    yield put(getColorBlue());
}


export function* waitForClickBlue(){
    yield takeEvery(COLOR_WATCH_BLUE,colorsSagaBlue);
}

function* colorsSagaYellow(){
    yield put(getColorYellow());
}


export function* waitForClickYellow(){
    yield takeEvery(COLOR_WATCH_YELLOW,colorsSagaYellow);
}