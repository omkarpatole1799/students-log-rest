import express from 'express'
import { addStudent, studentsList } from '../controller/studentController.js'

const router = express.Router()

router.post('/add', addStudent)

router.get('/list', studentsList )



export default router