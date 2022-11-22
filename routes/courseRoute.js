import {createCourse,getAllCourses,getCourse} from '../controllers/courseController.js'
import express from 'express'

const router = express.Router();

router.route('/').post(createCourse).get(getAllCourses)
router.route('/:slug').get(getCourse)



export default router ;