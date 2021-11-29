import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

        const [enteredUsername, setEnteredUserName] = useState('');
        const [enteredAge, setEnteredAge] = useState('');
        const [error, setError] = useState();

        const usernameChangeHandler = (event) => {
            setEnteredUserName(event.target.value)
        }

        const ageChangeHandler = (event) => {
            setEnteredAge(event.target.value)
        }

        const addUserHandler = (event) => {
            event.preventDefault();
            if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
                setError({
                    title:'Invalid Input',
                    message: 'Please enter valid name and age'
            })
                return;
            }
            if(+enteredAge < 1){
                setError({
                    title:'Invalid Input',
                    message: 'Please enter valid age (> 0 )'
            })
                return;
            }
             
            props.onAddUser(enteredUsername, enteredAge)
            setEnteredUserName('');
            setEnteredAge('');


        }

        const errorHandler = () => {
             setError(null);
        }

return (
    <>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>username</label>
        <input 
           id='username' 
           type='text'
           onChange={usernameChangeHandler}
           value={enteredUsername}
        />
        <label htmlFor='age'>Age(years)</label>
        <input 
           id='age' 
           type='number'
           onChange={ageChangeHandler}
           value={enteredAge}
        />
        <Button type='submit'>Add User</Button>
        {/* <button type='submit'>add user</button> */}
    </form>
    </Card>
    </>
)
}

export default AddUser;