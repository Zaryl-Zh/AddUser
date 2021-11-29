import React, {useState} from 'react';
import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UserList';

function App() {

   const [userList, setUserList] = useState([])

   const addUserHandler = (userName, userAge) => {
        //  setUserList([
        //    ...userList,
        //    {name: userName, age:userAge, id: Math.random().toString()}

        //  ]);

        setUserList((prevUserList) => {
          return [
            ...prevUserList,
            {name: userName, age:userAge, id: Math.random().toString()}
          ]
        })
   }

   const deleteUserHandler = (userId) => {
     setUserList(userList => {
       const updatedUsers = userList.filter(user => user.id !== userId);
       return updatedUsers;
     })
  }


  

  return (
    <div>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users= {userList} onDeleteUser={deleteUserHandler}/>
    </div>
  );
}

export default App;
