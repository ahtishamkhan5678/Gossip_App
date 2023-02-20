import { Box,styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext ,useState,useEffect,useRef} from "react";
import Footer from "./Footer";
import Message from "./Message";
import { getMessage, newMessage } from "../../../service/api";
import { Socket } from "socket.io-client";



const Wrapper =styled(Box)`
  background-image:url(${'https://i.pinimg.com/736x/f5/b6/37/f5b637c904d0598d07b0ff10c486f5a3--logo-design-logos.jpg'});
  background-size:100%;
  opacity:0.8;
`;

const Component=styled(Box)`
   height:78vh;
   overflow-y: scroll;

`;
const Container=styled(Box)`
   padding:1px 80px;

`;
const Messages =({person,conversations})=>{

  const [value,setValue] = useState('');
  const [messages,setMessages]=useState([]);
  const {account,socket,newMessageFlag,setNewMessageFlag } = useContext(AccountContext);
  
  const[image,setImage]=useState('');
  const[file,setFile]=useState();

  const[incomingMessage,setIncomingMessage]=useState(null);

  const scrollRef = useRef();

  useEffect(()=>{
     socket.current.on('getMessage', data => {
        setIncomingMessage({
          ...data,
          createdAt:Date.now()
        })
     })

  },[])


  useEffect(()=>{

    incomingMessage && conversations?.members?.includes(incomingMessage.senderId) &&
    setMessages(prev => [...prev, incomingMessage])
  },[incomingMessage,conversations])

  useEffect(()=>{
    const getMessageDetails=async()=>{
      let data = await getMessage(conversations._id);
      setMessages(data);
    }
    conversations._id && getMessageDetails();
  },[person._id, conversations._id ,newMessageFlag])

  useEffect(()=>{
    
    scrollRef.current?.scrollIntoView({transition : 'smooth' })

  },[messages])
  

   const sendText =async(e)=>{
    const code =e.keyCode || e.which;
    if(code === 13){
      let message={};
        if(!file){

         message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationsId:conversations._id,
          type:'text',
          text:value
        }
    }else{

         message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationsId:conversations._id,
          type:'file',
          text:image
        }

    }

    socket.current.emit('sendMessage',message);


     console.log(message);
     await newMessage(message);

     setValue('');
     setFile('');
     setImage('');
     setNewMessageFlag(prev => !prev);
    }

   }

    return (
       <Wrapper>
           <Component>
              {
                messages && messages.map(message => (
                  <Container ref={scrollRef}>
                        <Message message={message}/>
                  </Container>   
                  
                ))
              }
           </Component>
           <Footer
            sendText={sendText}
            setValue={setValue}
            value={value}
            file={file}
            setFile={setFile}
            setImage={setImage}
           />
       </Wrapper>
    )
}
export default Messages;