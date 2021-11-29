import React from "react"
import  ReactDOM  from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";



const ErrorModal = props => {
     return (
         <>
        {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root')
        )}

        {ReactDOM.createPortal(
            <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
            document.getElementById('modal-root')
        )}
        
       </>  
     )
}

export default ErrorModal;