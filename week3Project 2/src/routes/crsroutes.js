import { addNewCourse, getCourse, getCourseWithId, updateCourse, deleteCourse } from "../controllers/crscontrollers.js";

const routes = (app) => {
    // Define routes for different HTTP methods
    app.route('/cours')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getCourse)
        .post(addNewCourse);

    app.route('/cours/:courseId')
        .get(getCourseWithId)
        .put(updateCourse) 
        .delete(deleteCourse);
};

export default routes;
