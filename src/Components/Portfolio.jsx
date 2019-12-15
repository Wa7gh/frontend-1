import React, { Component } from 'react'
import {Link} from "react-router-dom"
import pro from "../Images /pro.png"
import "../App.css"
import Linkedin from "../Images /linkedin.svg"
import youtube from "../Images /youtube.svg"
import twitter from "../Images /twitter.svg"
import facebook from "../Images /facebook.svg"
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Github from "../Images /github.png"
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typical from 'react-typical'
import { Figure} from 'react-bootstrap';
import UserProject from "../Components/userProject"

const drawerWidth = 480;
const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: drawerWidth,
    
  },
}));
 
export default function Portfolio (props) {

  
//  let state = {
//     shown: true,
//   };
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };  
   
    console.log(props.data);
        return (
         <div>  
            <div className="prot">

            
                <img style={{ height: 821 , width: 1441 }} src={pro} alt="Portfolio" /> 
                <Typical className="textStyle" steps={['Hello', 1000, "Hello I'm", 5000]}  loop={Infinity}  wrapper="p" />
                <p className="textStyle1">Ziad Alhumaidan  </p> 
                <p className="textStyle2">Software Engingeer Full-sack </p> 

                <p className="textStyle3">BrandStatment Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deserunt tempore unde debitis, dolor repudiandae harum alias architecto quo quis quibusdam dicta sequi natus.
                 Molestias, aspernatur nemo nulla quasi quod ipsa.</p> 
                 <div className="aStyle">

                
                 <Link to = "/"> <img   src={Github} alt="boy" /> </Link>
                 <Link to = "/"> <img   src={Linkedin} alt="boy" /> </Link>
                 <Link to = "/"> <img   src={youtube} alt="boy" /> </Link>
                 <Link to = "/"> <img   src={twitter} alt="boy" /> </Link>
                 <Link to = "/"> <img   src={facebook} alt="boy" /> </Link>

                 </div>

               
        <div className="profil">
         <Toolbar  className="tStyle" >
         
         <Link   onClick={handleDrawerOpen} className={clsx( "profileLink")} >About Me  | </Link>
           <Link   className ="profileLink" to = {UserProject}>  My Projects </Link>
        </Toolbar>
        </div>
      
      <main
        className={clsx(classes.content, { [classes.contentShift]: open,})} >
        <div  />
      </main>
      <Drawer
     
        variant="persistent"
        anchor="right"
        open={open}
        classes={{ paper: classes.drawerPaper, }} >
        <div >
         <h1 onClick={handleDrawerClose} className="goBack" >  {"<"} </h1>
        </div>

        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItemText primary={text} />
          ))} */}

           <Figure.Image  className="imgProfile" width={171} height={180} alt="171x180" src={pro}   roundedCircle   /> <br/>
          <Divider />
          <p className="tSpacing">Education : </p>
          <Divider />
          <p className="tSpacing" >Experience : </p>

          <Divider />

          <p className="tSpacing" >Licenses & Certifications :</p>
        
          <Divider />
          <p className="tSpacing" > Volunteer Experience  : </p>
          <Divider />
          <p className="tSpacing" > Honor & Award :</p>
          <Divider />
        </List>

      </Drawer>
  
  </div>

  <div className="projectCards"> 
        {props.data.map( e =>{ 
        return <UserProject  ele ={e} />})}  

        
          </div>

      {/* <div>
				<h2>this.state.shown = {this.state.shown ? "true" : "false"}</h2>
				<button onClick={() => this.setState({ shown: !this.state.shown })}>Toggle</button>
			</div> */}

  </div>
        );
    
}




