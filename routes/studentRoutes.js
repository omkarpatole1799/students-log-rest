import express from 'express'
import { addStudent } from '../controller/studentController.js'

const router = express.Router()

router.post('/add', addStudent)



export default router