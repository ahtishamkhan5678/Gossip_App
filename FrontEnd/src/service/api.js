import axios from 'axios';
const url='http://localhost:8080';
export const addUser= async (data)=>{
    try{

       await axios.post(`${url}/add`,data);
    }
    catch(error){
        console.log("Error while addUser Api",error.message);
    }
}
export const getUser = async()=>{
    try{
       let response = await axios.get(`${url}/users`);
       console.log(response);
       return response.data;
    }
    catch(error){
       console.log("Error  with getUser",error.message);
    }
}

export const setConversations =async(data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);
        
    }
    catch(error){
        console.log("Error  with setConversations",error.message);
     }
}
//
//getConversations
export const getConversations =async(data)=>{
    try{
      let respone =  await axios.post(`${url}/conversation/get`,data);
      return respone.data;
        
    }
    catch(error){
        console.log("Error  with getConversations",error.message);
     }
}

//newMessage

export const newMessage = async(data)=>{
    try{
      let respone =  await axios.post(`${url}/message/add`,data);
      return respone.data;
        
    }
    catch(error){
        console.log("Error  with newMessage",error.message);
     }
}

export const getMessage = async(id)=>{
    try{
      let respone =  await axios.get(`${url}/message/get/${id}`);
      return respone.data;
        
    }
    catch(error){
        console.log("Error  with getMessage",error.message);
     }
}

//uploadFile

export const uploadFile = async(data)=>{
    try{
       
      return await axios.post(`${url}/file/upload`,data);;
        
    }
    catch(error){
        console.log("Error  with uploadFile",error.message);
     }
}