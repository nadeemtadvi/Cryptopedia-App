import express from 'express'
import { isAdmin, isLogin } from '../middleware/isAdmin.js';
import { Addcomment } from '../controllers/Comment.js';

const CommentRoute = express.Router()

CommentRoute.post('/addcomment',isLogin, Addcomment)

export default CommentRoute;