import mongoose from "mongoose";

const  MessageSchema=new mongoose.Schema({

    
    conversationsId:{
        type:String
    },
    senderId:{
        type:String
    },
    receiverId:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }

},
{
    timestamps: true
});

const message = mongoose.model('Message',MessageSchema);

export default message;