import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";
function Signin() {
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
          <TextField id="standard-basic" label="email" variant="standard" />
          <br />
          <TextField id="standard-basic" label="password" variant="standard" />
          <br />

          <Button href="#text-buttons">Sign in</Button>
        </Card>
      </center>
        </div>

    </div>
  );
}

export default Signin;
