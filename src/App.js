import './App.scss';
import Header from './components/Header';
import {Outlet} from 'react-router-dom'
import useOnlineStatus from './utils/useOnlineStatus';
import UserContext from './utils/UserContext';
import { useContext, useState } from 'react';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';

function App() {
  const onlineStatus = useOnlineStatus()
  const {loggedInUser}=useContext(UserContext)
  const[userName,setUserName]=useState(loggedInUser)
  return onlineStatus=== true ?(
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName:(val)=>setUserName(val)}}>
    <div style={{minWidth:"570px",maxWidth:"1500px",width:"100%"}}>
      <Header/>
      <Outlet/>
    </div>
      </UserContext.Provider>
      </Provider>
  ):(<h1>Looks like you are offline!! Please check your internet connection</h1>);
}

export default App;
