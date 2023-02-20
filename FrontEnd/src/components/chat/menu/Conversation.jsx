import { useEffect ,useState,useContext} from "react";
import Conversations from "./Conversations";
import { AccountContext } from "../../../context/AccountProvider";
import { Box,styled,Divider} from "@mui/material";
import { getUser } from "../../../service/api";

const Component =styled(Box)`
    height: 81vh;
    overflow:overlay;

`;
const StyleDivider=styled(Divider)`
 margin: 0 0 0 70px;
 background-color:#e9edef;
 opacity:.6;

`;

const Conversation=({text})=>{

    const [users,setUser]=useState([]);

    const {account,socket,setActiveUsers} = useContext(AccountContext);

    useEffect(()=>{
        const fetchData=async()=>{
            let response= await getUser();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUser(filteredData);
        }
        fetchData();
    },[text]);


    useEffect(()=>{
        socket.current.emit('addUsers',account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    },[account])

    return(
        
        <Component>
            {
                users.map(user=>(

                    user.sub !== account.sub &&
                 <>
                    <Conversations user={user}/>
                    <StyleDivider/>
                 </>   
                    
                ))
            }
        </Component>
    )
}
export default Conversation;