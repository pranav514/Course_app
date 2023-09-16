import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function AppBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10
      }}
    >
      <div>
        <Typography>U.com</Typography>
      </div>

      {/* <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button> */}
      <div style={{
    
    
      }}>
        <Button style={{
            marginRight: 10
        }} variant="contained" onClick={() => {
            window.location = '/signup'
        }}>Sign up </Button>
        <Button style={{
            marginRight: 10
        }} variant="contained"onClick={() => {
            window.location = '/login'
        }}>Sign in</Button>
      </div>
    </div>
  );
}

export default AppBar;
