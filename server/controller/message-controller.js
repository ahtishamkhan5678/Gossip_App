import Messages from "../model/Message.js";
import Conversations from "../model/Conversations.js";

export const newMessage = async(request,response)=>{

    try{

        const newMessage = new Messages(request.body);

        await newMessage.save();
        await Conversations.findByIdAndUpdate(request.body.conversationsId,{message: request.body.text});
        
        return response.status(200).json("Message has been send");
    

    }
    catch(error){
        return response.status(500).json(error.message);
    }
}

export const getMessage = async(request,response)=>{

    try{

        const messages= await Messages.find({conversationsId: request.params.id});
        
        return response.status(200).json(messages);
    

    }
    catch(error){
        return response.status(500).json(error.message);
    }
}