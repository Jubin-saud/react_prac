import UserContextprovider from './context/UserContextprovider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextprovider>
      
      <Login />
      <Profile />
    </UserContextprovider>
  )
}

export default App
