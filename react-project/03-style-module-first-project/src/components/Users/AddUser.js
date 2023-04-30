import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enterredUserage, setEnteredUserage] = useState("");
  const [error,setError] = useState();

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const userageChangeHandler = (e) => {
    setEnteredUserage(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enterredUserage.trim() === 0) {
      setError({
        title : 'Invalid input',
        message : 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if(+enterredUserage < 1) {
      setError({
        title : 'Invalid age',
        message : 'Please enter a valid age (> 0).'
      })
      return;
    }
    props.onAddUser(enteredUsername,enterredUserage)
    setEnteredUsername("");
    setEnteredUserage("");
  };
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enteredUsername}
          type="text"
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          value={enterredUserage}
          type="number"
          onChange={userageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
