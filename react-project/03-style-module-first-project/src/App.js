import React from 'react';
import AddUser from './components/Users/AddUser';
import UserLists from './components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUser />
      <UserLists users={[]}/>
    </div>
  );
}

export default App;
