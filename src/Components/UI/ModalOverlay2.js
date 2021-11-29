import React from 'react'
import Card from './Card'
import classes from './ConfirmModal.module.css'
import Button from './Button'

const ModalOverlay2 = (props) => {
    return (
      <Card className={classes.modal}>
         <header className={classes.header}>
              <h2>{props.title}</h2>
         </header>
          <footer className={classes.actions}>
            <Button onClick={props.onClick}>Confirm</Button>
            <Button onClick={props.onConfirm}>Cancel</Button>
          </footer>
     </Card>
            
       
    )
}

export default ModalOverlay2