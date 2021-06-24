import React,{useState} from 'react'
import Button from "@material-ui/core/Button"
import  Container  from '@material-ui/core/Container'
import  Typography  from '@material-ui/core/Typography'
import {makeStyles} from "@material-ui/core/styles"
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import  Checkbox  from '@material-ui/core/Checkbox'
import { useHistory } from 'react-router'
import Switch from "react-switch"



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
    root:{
        backgroundColor:'#1ABC9C',
        borderRadius: 20,
        color: "black" ,
        padding: "10px 30px",
        border: 0,

    }
})

const usestyled = makeStyles({
    root:{
        backgroundColor:"#808080",
        border: "0",
        borderRadius: "10px",
        color:"white",
        marginTop:"20px"

    }
})





function ContainerStyle(){
    const history = useHistory()
    const [clicks,setClicks] =useState(false)
    const changeRoute=()=>{
        history.push("/switch")
    }

    const classes = usestyled();
    return <Container className={classes.root}>
         <Container maxWidth="md" >
            <div className="App">
                <Typography variant="h4">
                    Material Button Click for Next page-:
                </Typography>
                <Button
                size="large"
                variant="contained"
                onClick={changeRoute}
                color="secondary">
                    Next
                </Button>

                <Typography variant="h4">
                    Customize Button-:
                </Typography>
                <Button
                size="medium"
                variant="contained"
                color="primary"
                style={{backgroundColor: "1ABC9C" ,padding: 20}}>
                    Button
                </Button>


                <Typography variant="h4">
                    Customize Button with makeStyles-:
                </Typography>
                <ButtonStyled/>
                <br/>
                 Switch 
                <Switch
                classes="react-switch"
                onChange={()=>setClicks(!clicks)}
            checked={clicks}
            size="medium"
            checkedIcon={
              <div style={textSwitch}>Yes</div>
            }
            uncheckedIcon={
              <div style={textSwitch}>No</div>
            }/> 


                <Typography variant="h4">
                    Customize icon-:
                </Typography>
                <Grid>
                    <Paper>
                        <AddBoxOutlinedIcon color="primary" fontSize="large"/>
                        <IndeterminateCheckBoxOutlinedIcon style={{color:"red"}} fontSize="large"/>
                    
                    </Paper>
                </Grid>
                <Grid>
                    <Paper>
                        <IndeterminateCheckBoxIcon style={{color:"red"}} fontSize="large"/>
                        <AddBoxIcon  color="primary" fontSize="large"/>
                        
                    </Paper>
                </Grid>
                
           </div>
        </Container>
    </Container>
}

function ButtonStyled(){
    const classes = useStyles();
    return <Button className={classes.root}>Button</Button>
}


function Materialbutoon() {
   
    return (
       
        <ContainerStyle/>
    )
}

export default Materialbutoon
