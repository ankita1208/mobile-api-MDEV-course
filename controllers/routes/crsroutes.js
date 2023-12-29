import { addNewCourse } from "../controller/crscontrollers.js";

const routes = (app) => {
    // Define routes for different HTTP methods
    app.get('/cours:courseid', (req, res, next) => {
//middleware
console.log(`Request from:${req.originalUrl}`);
console.log(`Request type:${req.method}`);
next();
    },(req,res, next)=>{
     
      res.send("GET request is successful");
    });
  
    app.post(addNewCourse);
  
    app.put('/cours:courseid', (req, res) => {
      res.send("PUT request is successful");
    });
  
    app.delete('/cours:courseid', (req, res) => {
      res.send("DELETE request is successful");
    });
  };
  
  export default routes;
  