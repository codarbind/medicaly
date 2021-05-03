import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alt:'connect to internet to see image'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  help:{
    borderRadius:'50%',
    backgroundColor:'blue',
    float:'right',
    width:'50px',
    height:'50px',
    fontSize:'30px',
    color:'white',
    marginTop:'300px',
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',

  }
}));

function register(e){
  e.preventDefault();
  let urlencoded = new URLSearchParams();
  for (var i = 6; i > 0; i--) {
    let name = document.getElementById(i).name;
    let value = document.getElementById(i).value;
    urlencoded.append(name,value);
  }
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch(`https://medicaly-internship-api.herokuapp.com/signup`, requestOptions)
  .then(response => response.json())
  .then(result => {
    document.getElementById('status').innerHTML = result.status;

  })

}

export default function SignUpSide() {
  const classes = useStyles();



  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="1"
              label="Last Name"
              name="lastName"

              style={{marginRight:'30%'}}
              
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              id="2"
              label="Other Names"
              name="otherNames"
              
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="3"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="4"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              autoFocus
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="5"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="6"
              autoComplete="current-password"
            />

            <Link href="uppercase" variant="body2">
                  <FormControlLabel
              control={<Checkbox value="terms" color="primary" />}
              label="Contains uppercase"
            /></Link><br/>
            <Link href="lowercase" variant="body2">
                  <FormControlLabel
              control={<Checkbox value="terms" color="primary" />}
              label="Contains lowercase"
            /></Link><br/>
            <Link href="special" variant="body2">
                  <FormControlLabel
              control={<Checkbox value="terms" color="primary" />}
              label="Contains special characters"
            /></Link><br/>
            <Link href="number" variant="body2">
                  <FormControlLabel
              control={<Checkbox value="terms" color="primary" />}
              label="Contains number"
            /></Link><br/>
            <Link href="length" variant="body2">
                  <FormControlLabel
              control={<Checkbox value="terms" color="primary" />}
              label="Has 8 characters and more"
            /></Link>
            
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  <FormControlLabel
              control={<Checkbox value="terms" color="primary" />}
              label="Accept Terms and Conditions"
            />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"| Already Have an Account? Sign IN"}
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e)=>register(e)}
            >
              Register
            </Button>
            <p id='status'></p>
            
            <div mt={5} className={classes.help}>
            <p>?</p>
            </div>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}