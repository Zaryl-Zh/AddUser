import React from 'react'
import  ReactDOM  from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay2 from './ModalOverlay2';


const ConfirmModal = props => {
    return (
        <>
       {ReactDOM.createPortal(
           <Backdrop onConfirm={props.onConfirm}/>,
           document.getElementById('backdrop-root')
       )}

       {ReactDOM.createPortal(
           <ModalOverlay2 title={props.title} onClick={props.onClick} onConfirm={props.onConfirm}/>,
           document.getElementById('modal-root')
       )}
       
      </>  
    )
}

export default ConfirmModal