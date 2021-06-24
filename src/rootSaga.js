import {all} from "redux-saga/effects";
import { waitForClick, waitForClickBlue, waitForClickYellow } from "./saga/SagaClick";

export default function* rootSaga(){
    yield all([waitForClick(),waitForClickBlue(),waitForClickYellow()])
}