import express from 'express'
import { addStudent, studentsList } from '../controller/studentController.js'

const router = express.Router()

router.post('/add', addStudent)

router.post('/list', studentsList )



export default router