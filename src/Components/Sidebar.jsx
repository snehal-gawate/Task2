import React from "react";
import { Card,CardContent,Button } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import List from '@mui/material/List';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StreamIcon from '@mui/icons-material/Stream';
import DraftsIcon from '@mui/icons-material/Drafts';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PinDropIcon from '@mui/icons-material/PinDrop';
import DatasetIcon from '@mui/icons-material/Dataset';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import BrushIcon from '@mui/icons-material/Brush';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import PublicIcon from '@mui/icons-material/Public';
import {common} from "./Common.css";

const Sidebar = () => {
  return (
    <Card sx={{height:130+'vh',width:200+'vh',bgcolor:"#263238",color:"white"}}>
             <CardContent>
      <List >
        <ListItem button>
        <ListItemIcon>
            <StreamIcon className="icon"  />
            </ListItemIcon>
          <ListItemText primary="Volt React"  />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PublicIcon  className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            < DraftsIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Messages" />
          <Button variant="contained" sx={{bgcolor:"#29b6f6",color:"black",borderRadius:5+'vh',marginLeft:12+'vh',width:1+'vh',height:4+'vh'}} size="small" >pro</Button>
        </ListItem>
      </List>
      <ListItem button>
          <ListItemIcon>
            <FlightClassIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem button>
          <Button variant="outlined" sx={{color:"white",width:35+'vh'}} startIcon={< SettingsIcon/>}>Settings</Button>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CalendarMonthIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Calendar" />
          <Button variant="contained" sx={{bgcolor:"#29b6f6",color:"black",borderRadius:5+'vh',marginLeft:10+'vh',width:1+'vh',height:4+'vh'}} size="small" >pro</Button>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PinDropIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Map" />
          <Button variant="contained" sx={{bgcolor:"#29b6f6",color:"black",borderRadius:5+'vh',marginLeft:8+'vh',width:1+'vh',height:4+'vh'}} size="small" >pro</Button>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DatasetIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Tables" /><ChevronRightIcon/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Page Examples" /><ChevronRightIcon/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsInputSvideoIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Plugins" />
          <Button variant="contained" sx={{bgcolor:"#29b6f6",color:"black",borderRadius:5+'vh',marginLeft:9+'vh',width:1+'vh',height:4+'vh'}} size="small" >pro</Button>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Getting Started" /><ChevronRightIcon/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AllInboxIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Components" /><ChevronRightIcon/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            < BrushIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Themesberg" />
        </ListItem>
        <Button variant="contained" startIcon={<RocketLaunchIcon />} sx={{bgcolor:"#29b6f6",color:"black",marginTop:22+'vh'}}>Upgrade to pro</Button>
    </CardContent>
            </Card>
  );
};

export default Sidebar;
