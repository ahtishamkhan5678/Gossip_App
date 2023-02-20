import express from 'express';
import { newMessage, getMessage } from '../controller/message-controller.js';
import { newConversations ,getConversations} from '../controller/conversation-controller.js';
import { addUser , getUsers } from '../controller/user-controller.js';
import { uploadFile ,getImage} from '../controller/image-controller.js';

import upload from '../utils/upload.js';


const route = express.Router();

route.post('/add',addUser);
route.get('/users', getUsers);
route.post('/conversation/add',newConversations);
route.post('/conversation/get',getConversations);
route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessage);

route.post('/file/upload',upload.single("file"),uploadFile);
route.get('/file/:filename',getImage);

export default route;