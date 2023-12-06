const studentModel = require ('../models/model');

// create a new student
exports.createstudent = async (req, res) => {
    try{
        const student = new studentModel(req.body);
        if(!student) {
        res.status(400).json({
            message: "error creating student",
        });
        }

        await student.save();
        res.status(201).json({
            message: "successfully created a new student",
            data: student
        }); 

    } catch(err) {
        res.status(500).json({
            message: err.message});
    }};

// get all student
exports.getAll = async (req, res) => {
    try{
        const student = await studentModel.find();
        if (student.length ==0) {
            res.status(404).json({
                message:"Student database is empty"
            });
        } else {
            res.status(201).json({
                message: "List of all students in this database",
                data: student,
                totalNumberOfTrainees: student.length,
            });
        }

    } catch (error){
       res.status(500).json({
        message: error.message,

       });
    }
}


// get a Student
exports.getOne = async (req, res) => {
    try{
        const studentId = req.params.studentId;
        const studentModel = await studentModel.findById(studentId);
        if (!student) {
            res.status(404).json({
                message: "Student database is empty",
        });
        }
    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
    }
};


//  Update a Student
exports.updateStudent = async (req, res) => {
    try {
        // track the user id
        const studentId = req.params.studentId;
        // track student with the id gotten
        const student = await studentModel.findById(studentId)
        // check for error
        if (!student){
            res.status(404).json({
                message: `Student with id: $(studentId) is not found.`
            });
        }

// construct the update data
const data = {
    name: req.body.name || student.name,
    stack: req.body.stack || student.stack,
    score:{
        html: req.body.score.html || student.score.html,
        javascript:req.body.score.javascript || student.score.javascript,
        css:req.body.score.css || student.score.css,
        node:req.body.score.node || student.score.node,
    }
}

// update the database
const updateStudent = await studentModel.findByIdAndUpdate(studentId, studentData, {new:true});
res.status(200).json({
    message: `Student with id: ${studentid} has been updated successfully.`,
    data: updateStudent,
});

    } catch (err) {
        res.status(500).json({
            message:err.message,
        });
}}

// Delete a student
exports.deleteStudent = async (req, res) => {
    try{
        // track the user id
        const studentId = req.params.studentId;
        // track student with the id gotten
        const student = await studentModel.findById(studentId);
        // check for error
        if (!student){
            res.status(404).json({
                message: `Student with id: $(studentId) is not found.`
            });
        }
// Delete the student
await studentModel.findByIdAndDelete(studentId)
return res.status(200).json({
    message: `Student with id: ${studentId}was successfully deleted.`,
    data: student,
});

    } catch (err) {
        res.status(500).json({
            message: err.message});
        }
 } 

 exports.makeAdmin = async (req, res) =>{
    try{
        // track the user Id
        const studentId = req.params.studentId;
        // track student with id gotten
        const student = await studentModel.findById(studentId);
        // check for error
        if (!student) {
            res.status(404).json({
                message: `Student with id: $(studentId) is not found.`,
            })
            return;
            }

            const admin = await studentModel.findByIdAndUpdate(studentId, {isAdmin: true}, {new: true})
            res.status(200).json({
                message: `Student with id: ${studentId} has been made admin`,
                data: admin
            });

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
        }
 }


 