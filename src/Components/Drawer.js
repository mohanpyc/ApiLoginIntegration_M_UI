import React,{useState} from "react";
import clsx from "clsx";
import { drawerStyles } from "./ComponentStyles";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleIcon from "@material-ui/icons/People";
import DashboardIcon from '@material-ui/icons/Dashboard';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PaletteIcon from '@material-ui/icons/Palette';
import ReceiptIcon from '@material-ui/icons/Receipt';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import LogoAndIcons from "../Images";
import {ChromePicker} from 'react-color'

import { useNavigate, Outlet } from "react-router-dom";

export default function MiniDrawer() {
  const navigation = useNavigate();  

  const [open, setOpen] = React.useState(true);                   //drawer display prop

  const handleDrawer = () => {                                    // function to toggle Drawer
    setOpen(!open);
    setShowColorPicker(false)
  };



  const [title, setTitle] = React.useState("dashboard");          //To Set Title in the APPBAR

  const handleTitle = (item) => {                               //Function to update title and url
    setTitle(item);
    navigation(item);
    setShowColorPicker(false)
  };

  const [showColorPicker,setShowColorPicker]=useState(false)      // to Show Color Picker and toggle

  const [color,setColor]=React.useState("#1D1D7A")                // initial theme color

  const handleColorPicker=()=>{                                   //function to toggle color picker display
    if(!open){  
      setOpen(true)
    }
    setShowColorPicker(!showColorPicker)
  }

  const handleColor = (updatedColor)=>{                           //function to update theme color
        setColor(updatedColor.hex)
  }

  const classes = drawerStyles({backgroundColor:color,color:color});   //dynamic color updation in css

                               //navigation initialisation

  const menuItems=[                                             //List Menu Items
    {
      itemName:"Inventory",
      icon:<LineStyleIcon/>
    },
    {
      itemName:"Transactions",
      icon:<ReceiptIcon/>
    },
    {
      itemName:"Customers",
      icon:<PeopleIcon />
    },
    {
      itemName:"Reports",
      icon:<AssessmentIcon />
    }
  ]

  return (
    <div className={classes.root}>

      <CssBaseline />

      <AppBar                                                             //AppBar
        position="fixed"
        color="inherit"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap className={classes.typoGraphy}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <MuiDrawer                                                            //Drawer 
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div className={classes.logoBackground}>
            <img                                                                //Logo
              alt="i"
              onClick={handleDrawer}
              src={LogoAndIcons.logo2}
              className={classes.logoStyles}
            />
          </div>
        </div>
        <Divider />
                                                                              
        <List className={classes.listStyles}>                                
          <ListItem                                                             //Nav List
            button
            selected={title === "Dashboard"}
            onClick={() => handleTitle("Dashboard")}
          >
            <ListItemIcon className={classes.avatar}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          {menuItems.map(item => {

            const {itemName,icon}=item;

          return  <ListItem
              key={itemName}
              button
              selected={title === itemName}
              onClick={() => handleTitle(itemName)}
              >
              <ListItemIcon className={classes.avatar}>
               {icon}
              </ListItemIcon>
              <ListItemText primary={itemName} />
            </ListItem>
          })}
           <ListItem
              button onClick={handleColorPicker}
              selected={showColorPicker}
            >
            <ListItemIcon className={classes.avatar}>
              <PaletteIcon />
            </ListItemIcon>
            <ListItemText primary="Color Picker" />
          </ListItem>
          {showColorPicker?
          <ListItem
            >
           <ListItemIcon >
              <ChromePicker
                color={color}
                onChange={updatedColor=>handleColor(updatedColor)}
              />
            </ListItemIcon>
            <ListItemText primary="" />
          </ListItem>:null
          }
        </List>
      </MuiDrawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
    </div>
  );
}

