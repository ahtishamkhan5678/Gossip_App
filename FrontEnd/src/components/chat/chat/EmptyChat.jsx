import { emptyChatImage } from "../../../constants/data";
import {Box,styled} from '@mui/material';


// const Component =styled(Box)`
//     background : #f8f9fa;
//     padding:30px 0;
//     text-align:center;
//     height: 100%;
    


// `;

// const Container =styled(Box)`
//  padding:0 200px;


// `;

const Image =styled('img')({
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    background:'#43A6C6',
    width: '65vw',
    height: '96vh',
    opacity:'0.8'
    
      
});

const EmptyChat=()=>{

    return(

       <Box>
           <Box>
                <Image src={emptyChatImage} alt="image" />
                {/* <Typography>Gossip Web</Typography>
                <Typography>Now send and receive messages without keeping your phone online.</Typography>
                <Typography>Use Gossip on uo to 4 linked devices and 1 phone at the same time.</Typography> */}
           </Box>
       </Box>
    )
};

export default EmptyChat;