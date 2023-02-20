import {useContext, useEffect,useState} from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { getConversations } from '../../../service/api';

const ChatBox =()=>{

    const {person,account}=useContext(AccountContext);

    const [conversations,setConversations]=useState({});

    useEffect(()=>{
        const getConversationDetails=async()=>{
           let data= await getConversations({senderId:account.sub, receiverId:person.sub})
           console.log(data);
           setConversations(data);
        }
        getConversationDetails();
    },[person.sub]);

    return (
       <Box>

            <ChatHeader person={person}/>
            <Messages person={person} conversations={conversations}/>
       </Box>
    )
}
export default ChatBox;