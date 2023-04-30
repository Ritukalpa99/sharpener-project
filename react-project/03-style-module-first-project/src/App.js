import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserLists from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])
  const addUserHander = (uName, uAge) => {
    console.log('something',usersList);
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name : uName,age : uAge, id : Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHander}/>
      <UserLists users={usersList}/>
    </div>
  );
}

export default App;
