// components below here
import { useContext } from "react";
import{ AccountContext } from "../context/AccountProvider";

import {AppBar, Toolbar,styled,Box} from '@mui/material';


import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';

// box component ;
const Component = styled(Box)`
        height : 100vh;
        background:#DCDCDC;

`;

const Header= styled(AppBar)`
    height : 125px;

    box-shadow:none;
`;




// loginheader components;

const LoginHeader= styled(AppBar)`
    height : 220px;

    box-shadow:none;

`

const Messenger = () =>{

    const {account} = useContext(AccountContext);

    return(
        <Component>
                {
                    account ? 
                    <>
                        <Header>

                            <Toolbar>


                            </Toolbar>


                        </Header>
                        <ChatDialog />
                    
                    </>
          
                    :
                    <>
                        <LoginHeader>

                            <Toolbar>


                            </Toolbar>


                        </LoginHeader>



                        <LoginDialog />
                    
                    
                    </>
                }
               
        
        
        
        </Component>
           
    );

};

export default Messenger;