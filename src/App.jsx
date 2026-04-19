import React from 'react';
import UsersInfo from './Components/UsersInfo';
const fetchUersInfo = fetch('http://localhost:3000/users').then(res=>res.json())
const App = () => {
  return (
    <div>
      {/* UsersInfo components */}
      <UsersInfo fetchUersInfo={fetchUersInfo}></UsersInfo>
    </div>
  );
};

export default App;