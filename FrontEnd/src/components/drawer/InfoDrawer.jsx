
import{Drawer, Typography,Box,styled} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';

const Header=styled(Box)`
    background:#1976d2;
    height:111px;
    color:#FFFFFF;
    display:flex;
    & > svg,&>p{
        margin-top:auto;
        padding:15px;
        font-weight:600;
        
    }

`;

const Component=styled(Box)`
     
    background: #ededed;
    height: 82%;


`;

const Text=styled(Typography)`
  font-size:18px;

`;
const drawerStyle ={
    left :20,
    top:13,
    height:'96%',
    width:'33%',
    boxShadow: 'none'
}

const InfoDrawer =({open,setOpen})=>{

    

    const handleClose=()=>{
        setOpen(false);
    }
    return(
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{sx:drawerStyle}}
            style={{zIndex:1500}}
        
        >
                <Header>
                    <ArrowBack onClick={()=>setOpen(false)}/>
                    <Text>Profile</Text>
                </Header>

                <Component>
                    <Profile/>
                </Component>


        </Drawer>

    )
};

export default InfoDrawer;