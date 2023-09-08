    const todo = require('../../model/todoSchema')
    const mongodb = require('mongodb')

    module.exports.docfetch = async (req, res) => {
        // find
        try {

            const data = await todo.find();
            res.json(data);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: "an internal server error occured." })
        }


    }



    module.exports.docCreate = async (req, res) => {
        try {
            const { title, taskDes, status } = req.body;
            const list = {
                title: title,
                taskDes: taskDes,
                Status: status
            }
            const todoInsertResponse = await todo.create(list);//create a new document in todo database and insert  requested values
            console.log("response", todoInsertResponse)
            res.json({ message: "data has been succefully created."})
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: "an internal server error occured." })
        }


    }

    module.exports.docDelete = async (req, res) => {
        try{

            const {id} = req.body;
            
            const removeSpace = await todo.deleteOne({ _id: id })
            // it delete the whole space with all the task from todo collection
    
            console.log(`remove`, removeSpace)
    
            res.json({message:"data is successfully deleted."})
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: "an internal server error occured." })
        }




    }

    module.exports.update = async (req, res) => {
        try{
            const {id,status}=req.body;
           
    
            const response = await todo.updateMany(
                { _id: id },
                {
                    $set: {
    
                        "Status": status
    
                    }
    
                }
            )
            console.log(response);
            res.json({ message: "Data has been successfully updated."});

        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: "an internal server error occured." })
        }

    }



