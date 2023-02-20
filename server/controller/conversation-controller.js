import { request, response } from "express";
import Conversations from "../model/Conversations.js";
export const newConversations = async(request,response)=>{

    try{

        const senderId =request.body.senderId;
        const receiverId =request.body.receiverId;

        const exist= await Conversations.findOne({members: {$all: [receiverId,senderId]}});
       if (exist){
         return response.status(200).json('conversation already exist');
       }

       const newConversations = new Conversations({
         members:[senderId,receiverId]
       })

       await newConversations.save();
       return response.status(200).json('conversation saved');
    }
    catch(error){
        return response.status(500).json(error.message);
    }
}




//////////////

export const getConversations = async(request,response)=>{

    try{

        const senderId =request.body.senderId;
        const receiverId =request.body.receiverId;

         let conversation= await Conversations.findOne({members: {$all: [receiverId,senderId]}});
   
         return response.status(200).json(conversation);
    

    }
    catch(error){
        return response.status(500).json(error.message);
    }
}
