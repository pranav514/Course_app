{/* <div style={{
  width: '100vm',
  height : '100vh',
  backgroundColor : "#eeeeee"
}}> */}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Login from './components/Login';
// import Landing from "./components/Landing";
// import CreateCourse from './components/CreateCourse';
// import Register from './components/Register';
// import ShowCourses from './components/ShowCourses';
import Signin from './Signin.jsx';
import SignUp from './SignUp.jsx';
import Course from './Course.jsx'
import AppBar from './AppBar.jsx';



// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {

    return (
       <div style={{
  width: '100vm',
  height : '100vh',
  backgroundColor : "#eeeeee"
}}> 
    <AppBar></AppBar>    
          <Router>
            <Routes>
              <Route path='/course' element={<Course/>} />
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<SignUp />} />
               
            </Routes>
        </Router>
      </div>
      
    );
}

export default App;