import Card from "../UI/Card";
import classes from "./UsersList.module.css"

const UserLists = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserLists;
