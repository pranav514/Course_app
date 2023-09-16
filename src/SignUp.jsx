// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Card from '@mui/material/Card';
// import { Typography } from "@mui/material";
// import { useState } from "react";
// import localStorage from 'localStorage';
// // import { json } from "react-router-dom";
// function SignUp() {
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   return (
//     <div>
//         <div>

//       <center>
        
//         <div
//           style={{
//             paddingTop: 150,
//             marginBottom: 10,
//           }}
//         >
//             <Typography>
//           welcome signup here
//           </Typography>
//         </div>
//       </center>

//       <center>
//         <Card variant="outlined"
//           style={{
//             // border: "2px solid black",
//             width: 250,
//             padding : 20
//           }}
//         >
//           <TextField onChange={(e) =>{
//             setEmail(e.target.value)
//           }}  label="email" variant="standard" />
//           <br />
//           <TextField onChange={(e) => {
//             setPassword(e.target.value)
//           }} label="password" variant="standard" />
//           <br />

//           <Button href="#text-buttons" onClick={() => {
//             // let username= document.getElementById("username").value
//             // let password = document.getElementById("password").value
//             // console.log(username.value);
//             // console.log(password.value);
//             fetch("http://localhost:3000/admin/signup" , {
//               method : "POST",
//               body:JSON.stringify({
//                 username: email,
//                 password: password,
//               }),
//               headers: {
//                 "Content-Type": "application/json"
//               },
//             })
         
//           }}>Sign up</Button>
//         </Card>
//       </center>
//         </div>

//     </div>
//   );
// }

// export default SignUp;



import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/signup", {
        method: "POST",
        body: JSON.stringify({
          username: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const jwtToken = data.token; // Assuming the server returns the token as "token"

        // Store the JWT token in localStorage
        localStorage.setItem("jwtToken", jwtToken);

        // You can also redirect the user to a different page after successful signup if needed.
        // For example: history.push("/dashboard");
      } else {
        // Handle signup error here
        console.error("Sign up failed");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

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
            <Typography>welcome signup here</Typography>
          </div>
        </center>

        <center>
          <Card
            variant="outlined"
            style={{
              width: 250,
              padding: 20,
            }}
          >
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="email"
              variant="standard"
            />
            <br />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="password"
              variant="standard"
            />
            <br />

            <Button href="#text-buttons" onClick={handleSignUp}>
              Sign up
            </Button>
          </Card>
        </center>
      </div>
    </div>
  );
}

export default SignUp;
