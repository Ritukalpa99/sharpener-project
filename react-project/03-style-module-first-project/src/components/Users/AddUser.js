import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enterredUserage, setEnteredUserage] = useState("");

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const userageChangeHandler = (e) => {
    setEnteredUserage(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enterredUserage.trim() === 0) {
      return;
    }
    if(+enterredUserage < 1) {
      return;
    }
    console.log(enteredUsername, enterredUserage);
    setEnteredUsername("");
    setEnteredUserage("");
  };
  return (
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
  );
};

export default AddUser;
