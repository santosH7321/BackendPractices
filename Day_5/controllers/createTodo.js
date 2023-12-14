// import the models

const Todo = require("../models/Todo");

//Define route handlar

exports.createTodo = async(req, res) => {

    try{
        //extract tital and description and request ki body
        const {title, description} = req.body;

        //create a new todo and insert in DB

        const response = await Todo.create({title, description});
        //send a json response with a success flag

        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully",
            }
        );

    }
    catch{
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal servar error",
            message:err.message,
        })
    }
}