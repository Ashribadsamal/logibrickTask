import React,{useState, useEffect} from 'react';
import './App.css';
import {useDispatch,useSelector} from "react-redux";
import Button from "@material-ui/core/Button"
import {  getcolorSaga, getcolorSagaBlue, getcolorSagaYellow, getColorYellow } from './Action';
//import Switch from "react-switch"
import Switch from '@material-ui/core/Switch'
import { useHistory } from 'react-router'; 
import { blue,yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
//import Buttonswitch from './buttonswitch';



//styles
const textSwitch={
  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: 15,
    color: "orange",
    paddingRight: 2

}

const useStyles = makeStyles({
  switchBase: {
    color: blue[300],
    "&$checked": {
      color: yellow[500]
    },
    "&$checked + $track": {
      backgroundColor: yellow[500]
    }
  },
  root:{
  },
  checked: {},
  track: {}
});




function App() {
  const history = useHistory()
  const [click,setClick] =useState(false)
  
  const [clickblue,setClickblue] =useState(false)
  const [clickyellow,setClickyellow] =useState(false)

  const dispatch = useDispatch()
  const colors = useSelector(state=>state.colors)




const changeColor=()=>{
  setClick(!click)
  dispatch(getcolorSaga())
}

const changeColorblue=()=>{
  setClickblue(!clickblue)
  dispatch(getcolorSagaBlue())
}

const changeColoryellow=()=>{
  setClickyellow(!clickyellow)
  dispatch(getcolorSagaYellow())
}
    
const changeRoute=()=>{
    history.push("/")
}

const classes = useStyles()

  return (
    <div className="App">
       
         <div className="buttondiv">

           {/* <Buttonswitch clicks={clicks} changeColors={changeColors}/> */}

            <Switch
            onChange={changeColor}
            checked={click}
            color="black"
            size="medium"
            checkedIcon={
              <div style={textSwitch}>Yes</div>
            }
            uncheckedIcon={
              <div style={textSwitch}>No</div>
            }
            />

            {/* <CustomSwitch/> */}


            <Switch 
            classes={{
              switchBase: classes.switchBase,
              root: classes.root
            }}
            onChange={changeColorblue}
            />


            <Switch
              onChange={changeColoryellow}/>

              <Button
                size="large"
                variant="contained"
                onClick={changeRoute}
                color="secondary">
                    Back
                </Button>
        </div>

   
    <div className="boxdiv " >
        <div className="divred " style={{backgroundColor: click? colors:""}}></div>

        <div className="divBlue" style={{backgroundColor:clickblue? colors: ""}}></div>

        <div className="divyellow" style={{backgroundColor:clickyellow? colors: ""}}></div>
    </div>
    </div>
  );
}

export default App;
