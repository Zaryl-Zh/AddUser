import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ConfirmModal from "../UI/ConfirmModal";
import classes from './UserList.module.css'


const UsersList = props => {
   
  const [deleteBtn, setDeleteBtn] = useState(false);
 
  

  const deleteBtnHandler = (e) => {
    setDeleteBtn(true)
    
  }
 
  const showUserlist = () => {
    setDeleteBtn(prev => !prev)
  }


  return (
      <Card className={classes.users}>
   
        <ul>
           {props.users.map(user => 
           <li key={user.id}
           > 
              {user.name} ({user.age} years old)
              
              <Button type='submit' onClick= {deleteBtnHandler}>Delete</Button>
              {deleteBtn && <ConfirmModal title= 'Confirm if you want to delete'  onClick={()=>{props.onDeleteUser(user.id); setDeleteBtn(false)}} onConfirm={showUserlist}/>}
           </li> 
           
             )}
             
        </ul>
      </Card>
  )

}

export default UsersList;