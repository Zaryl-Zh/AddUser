import React from "react"
import classes from './ErrorModal.module.css'
import classes2 from './ConfirmModal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} className={classes2.backdrop} onClick={props.onConfirm}/>
}


export default Backdrop;