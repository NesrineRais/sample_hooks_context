
import React, { useState } from 'react';
import Profile from './components/Profile';
import { UserContext, ColorContext } from './contexts/myprofile';
function App() {
  const [user] = useState({ name: "Lisa", age: 8 })
  console.log(user)
  return (
    <UserContext.Provider value={user}>
      <ColorContext.Provider value={'red'} >
        <Profile />
      </ColorContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
