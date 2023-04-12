import React from "react";
import { Box,Stack,Card,CardContent, Grid,Button, Avatar, Typography, TextField, CardMedia } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar  from "./Sidebar";
export const Page=()=>{
    return(
        <Box sx={{bgcolor:"#e0e0e0"}}>
          <Stack direction="row">
            <Sidebar/>  
            <Stack direction="column">
            <Stack></Stack>
           
           <Box sx={{height:15+'vh',width:175+'vh',bgcolor:"#e0e0e0",padding:3+'vh'}}>
            
             <Grid container spacing={1}>
             <Grid item xs={3} >
                <Button variant="outlined" sx={{color:"black",borderColor:"black",bgcolor:"white"}} startIcon={< SearchIcon/>} fullWidth>search</Button>
                </Grid>
              <Grid item xs={4}></Grid>
              <Box sx={{marginLeft:45+'vh'}}>
                <Stack direction="row">
                  <NotificationsIcon sx={{marginLeft:1+'vh'}}/>
                  <Avatar sx={{marginLeft:1+'vh'}} src="https://th.bing.com/th/id/R.7bf19f51786550d4e540c2dbd8f6dfb0?rik=Oyz02p%2f6FMFlUA&riu=http%3a%2f%2fwomen-hair-styles.com%2fwp-content%2fuploads%2f2013%2f08%2fnatural-curly-hairstyle-messy-look.jpg&ehk=b8KiyfUxdzkgVzglLPvMks8hb7N06tnYvj%2b6FUuWUUE%3d&risl=&pid=ImgRaw&r=0"/>
                  <Typography sx={{marginLeft:1+'vh'}}>Boniee Green</Typography>
                </Stack>
              </Box></Grid>
                <Box height={3+'vh'}/>
               <Grid container spacing={1} sx={{textAlign:"left"}}>
                <Grid item xs={2}><Button variant="contained" startIcon={<AddIcon />} sx={{bgcolor:"#29b6f6",color:"black"}} > New</Button></Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={2} ><Button variant="contained" startIcon={<ContentPasteIcon />} endIcon={<ExpandMoreIcon />} sx={{bgcolor:"black",color:"white"}}> Reports</Button></Grid>
               </Grid>
          </Box>
          <Stack direction="row">
        <Card sx={{height:90+'vh',width:108+'vh',marginLeft:3+'vh',textAlign:"left"}}>
        <CardContent>
            <Typography variant="h6"></Typography>
            <Grid container spacing={2} >
                <Grid item xs={12} ><Typography variant="subtitle1" >General information</Typography></Grid>
                <Grid item xs={6}><Typography variant="subtitle2">General information</Typography></Grid>
                <Grid item xs={6}><Typography variant="subtitle2">General information</Typography></Grid>
                <Grid item xs={6}><TextField placeholder="Enter your first name" fullWidth  size="small"></TextField></Grid>
                <Grid item xs={6}><TextField placeholder="Also your last name" fullWidth  size="small"></TextField></Grid>

                <Grid item xs={6}><Typography variant="subtitle2">Birthday</Typography></Grid>
                <Grid item xs={6}><Typography variant="subtitle2">Gender</Typography></Grid>
                <Grid item xs={6}><TextField placeholder="date" fullWidth  size="small"></TextField></Grid>
                <Grid item xs={6}><TextField placeholder="Also your last name" fullWidth  size="small"></TextField></Grid>
    
                <Grid item xs={6}><Typography variant="subtitle2">Email</Typography></Grid>
                <Grid item xs={6}><Typography variant="subtitle2">Phone</Typography></Grid>
                <Grid item xs={6}><TextField type="email" fullWidth  size="small"></TextField></Grid>
                <Grid item xs={6}><TextField placeholder="+12-345 678 910" fullWidth  size="small"></TextField></Grid>


                <Grid item xs={12}>
                  <Typography variant="sutitle1">Address</Typography></Grid>
                <Grid item xs={8}><Typography variant="subtitle2" fullWidth>Adress</Typography></Grid>
                <Grid item xs={4}><Typography variant="subtitle2" >Number</Typography></Grid>
                <Grid item xs={8}><TextField type="enter your home address" fullWidth  size="small"></TextField></Grid>
                <Grid item xs={4}><TextField placeholder="No." fullWidth  size="small"></TextField></Grid>
            
                <Grid item xs={4}><Typography variant="subtitle2">City</Typography></Grid>
                <Grid item xs={4}><Typography variant="subtitle2">Select State</Typography></Grid>
                <Grid item xs={4}><Typography variant="subtitle2">Zip</Typography></Grid>
                <Grid item xs={4}><TextField placeholder="city" fullWidth  size="small"></TextField></Grid>
                <Grid item xs={4}><TextField placeholder="state" fullWidth  size="small"></TextField></Grid>
                <Grid item xs={4}><TextField placeholder="Zip" fullWidth  size="small"></TextField></Grid>
                <Grid item xs={2}><Button variant="contained" sx={{bgcolor:"black"}} size="small">Save all</Button></Grid>
            </Grid>
        </CardContent>
        </Card>
         
        <Stack>
        <Card sx={{height:65+'vh',width:65+'vh',marginLeft:3+'vh'}}>
            <CardContent>
           <Card    sx={{  background: `url('https://www.geocore.cz/wp-content/uploads/2017/12/uponor-varicool-carbon-s-1.jpg')`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 200, postion:"static"}}>

           <Card sx={{height:25+'vh',width:25+'vh',borderRadius:50+'%',marginLeft:20+'vh',zIndex:"3",position:'static',position:"absolute",marginTop:12+'vh'}}>
           <CardMedia 
          component="img"
          height="180"
          image="https://demos.creative-tim.com/impact-design-system/front/assets/img/team/profile-picture-1.jpg"
          alt="green iguana"
        />
        </Card></Card>
        <Typography variant="h6" sx={{marginTop:10+'vh'}}>Neil sims</Typography>
          <Typography variant="subtitle1">Senior software engineer <br/>
          New york,USA
          </Typography>
          <Grid container spacing={2} sx={{marginLeft:5+'vh'}}>
          <Grid item xs={4}><Button variant="contained" size="small" startIcon={<GroupAddIcon  />} sx={{bgcolor:"black"}}>Connect</Button></Grid>
          <Grid item xs={5}><Button variant="contained" size="small" sx={{bgcolor:"#29b6f6"}}>send message</Button></Grid>
          </Grid>
           </CardContent>
        </Card> 
        <Card sx={{height:17+'vh',width:65+'vh',marginLeft:3+'vh',marginTop:2+'vh'}}>
            <CardContent>
              <Grid container spacing={1}>
              <Grid item xs={12}><Typography variant="h6">Select profile photo</Typography></Grid>
              <Grid item xs={1}><Avatar variant="square"  sx={{ width: 56, height: 56 }} src="https://th.bing.com/th/id/R.7bf19f51786550d4e540c2dbd8f6dfb0?rik=Oyz02p%2f6FMFlUA&riu=http%3a%2f%2fwomen-hair-styles.com%2fwp-content%2fuploads%2f2013%2f08%2fnatural-curly-hairstyle-messy-look.jpg&ehk=b8KiyfUxdzkgVzglLPvMks8hb7N06tnYvj%2b6FUuWUUE%3d&risl=&pid=ImgRaw&r=0"/></Grid>
              <Grid item xs={2}>< AttachFileIcon fullWidth  sx={{ fontSize: 40,marginLeft:2+'vh' }}  /></Grid>
              <Grid sx={{textAlign:'left'}}><Typography>choose image</Typography>
              <Typography>Jpg,Gif and Png,Max size of 800</Typography>
              </Grid><br/>
              </Grid>
            </CardContent>
        </Card>
        </Stack></Stack> 
        <Box height={6+'vh'}/>
        <Box >
         <Stack direction="row">
            <Typography  sx={{marginLeft:1+'vh'}}>Copyright@ 2019-2023 </Typography>
            <Typography color="blue" fullWidth>Themesberg</Typography>
          <Box sx={{marginLeft:105+'vh'}}>
          <Stack direction="row" >
          <Typography>About</Typography>
          <Typography sx={{marginLeft:2+'vh'}}>Themes</Typography>
          <Typography sx={{marginLeft:2+'vh'}}>Blog</Typography>
          <Typography sx={{marginLeft:2+'vh'}}>Contact</Typography>
          </Stack>
          </Box>
          </Stack>
          <Button variant="contained" sx={{bgcolor:"white",color:"black",marginLeft:160+'vh',marginTop:2+'vh'}} size="small" startIcon={<SettingsIcon />}>settings</Button>
         </Box>
        </Stack>
        
        </Stack>
       
        </Box>
    )
}