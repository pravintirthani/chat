import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import { GridList,GridTile, TextField ,RaisedButton} from 'material-ui';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import logo from require('../images/Twitter_chat.png');
class Login extends Component {
  constructor(props) {
    super(props);    
    this.state = {

    };
  }
  
  render() {    
    return (
      <MuiThemeProvider>        
        <GridList cols={1}  cellHeight={70} >
        <GridTile key={1} rows={1} cols={1} style={{"text-align":"center"}} >
            <Subheader style={{"font-size":"24px"}}>Lets Chat</Subheader>
          </GridTile> 
          <GridTile key={2} rows={1} cols={1} style={{"text-align":"center"}} >
            <TextField 
              hintText="User Name"
            />
          </GridTile> 
          <GridTile key={3}  rows={1} cols={1} style={{"text-align":"center"}}>
            <TextField 
              hintText="Password"              
            />
          </GridTile> 
          <GridTile key={4}  rows={1} cols={1} style={{"text-align":"center"}}>
            <RaisedButton label="Login" primary={true} style={{}} />
          </GridTile>  
        </GridList>
      </MuiThemeProvider>
    )
  }
}
export default Login;