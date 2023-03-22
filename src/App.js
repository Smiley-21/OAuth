import './app.css';
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom';
import Navbar  from './components/Navbar';
import Login from './pages/Login'
import Home from './pages/Home'
import Post from './pages/Post';
import {useState,useEffect} from 'react';




function App() {
  const [user,setUser]=useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success",{
        method:"POST",
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200)
          {
           
            return response.json()
          }
          throw new Error("authentication has been failed!");
        })
        .then((responseObject) => {
          console.log("Object is assigning")
          console.log(responseObject);
          setUser(responseObject.user);
        })
        .catch((err) => {
          console.log(err);
          console.log("Error")
        });
    };
  getUser();
 
  }, []);



  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <Navbar user={user}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={user?<Navigate to="/"/> :<Login/>}/>
          <Route path='/post/:id' element={user? <Post/>:<Navigate to="/login"/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
