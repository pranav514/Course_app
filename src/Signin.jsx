import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";
import { useState } from "react";
function Signin() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignIn = async () => {
    try{
       const response = await fetch('http://localhost:3000/admin/login' , {
      method : "POST",
      body  : JSON.stringify({
        username : email,
        password : password,
      }),
      headers : {
        "Content-Type": "application/json",
      }
    })
    if(response.ok){
      const data  = await response.json();
      const jwtToken = data.token;
      localStorage.setItem("jwtToken" , jwtToken)
    }
    else{
      console.log(error);
    }
    }
    catch(error){
      console.log("signin failed " , error);

    }
   

  }
  
  return (
    <div>
        <div>

      <center>
        
        <div
          style={{
            paddingTop: 150,
            marginBottom: 10,
          }}
        >
            <Typography>
          welcome signin here
          </Typography>
        </div>
      </center>

      <center>
        <Card variant="outlined"
          style={{
            // border: "2px solid black",
            width: 250,
            padding : 20
          }}
        >
          <TextField id="standard-basic" label="email" variant="standard" onChange={(e) => {
            setEmail(e.target.value);
          }} />
          <br />
          <TextField id="standard-basic" label="password" variant="standard" onChange={(e) =>{
            setPassword(e.target.value);
          }} />
          <br />

          <Button href="#text-buttons" onClick={handleSignIn}>Sign in</Button>
        </Card>
      </center>
        </div>

    </div>
  );
}

export default Signin;
