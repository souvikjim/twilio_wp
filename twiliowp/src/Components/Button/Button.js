import React from "react";
import classes from "./style.module.css"

const ButtonComp=(props)=>{
    const{btnName,btnClicked,isDisabled}=props
    return(<>
    <button onClick={()=>btnClicked()} className={classes.btn} disabled={isDisabled}>
        {btnName}
    </button>
    </>)
}
export default ButtonComp;