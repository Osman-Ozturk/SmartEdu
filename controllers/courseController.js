import Course from '../models/Course.js';
import Category from '../models/Category.js' 

const createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    if (course) {
      res.status(201).json({
        status: 'success',
        course,
      });
    } else {
      const error = new Error('Daten unvollständig');
      error.status = 422;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

const getAllCourses =async (req,res,next)=>{
  try {
    const categorySlug = req.query.categories;
    const category = await Category.findOne({slug:categorySlug})
    let filter ={}
    if (category) {
      filter={category:category._id}
    }
    const courses = await Course.find(filter)
    const categories = await Category.find()

    res.status(200).render('courses', {
      courses,
      categories,
      page_name: 'courses',
    });
  } catch (error) {
    next(error)
  }
}
const getCourse = async (req,res,next)=>{
  try {
    const course=await Course.findOne({slug:req.params.slug})
    res.status(200).render('course',{course,page_name:"courses"})
    
  } catch (error) {
    next(error)
  }
}
export { createCourse ,getAllCourses,getCourse};
