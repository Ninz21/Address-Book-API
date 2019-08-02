const Record = require('../models/records.js');

//create and save record
exports.create = ( req , res ) => {
        
    
        Record.countDocuments({ name: req.body.name })
        .then((count) => {
        if (count > 0) {
            res.send({
                message: "Name already exists."
               })   
        } else {
            let record = new Record({
                name: req.body.name,
                ContactNumber: req.body.ContactNumber,
                address: req.body.address
            });
            record.save()
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({
                 message: err.message || "Some error occurred while creating the record."
                })
            });
        }
        });

      
    
            
};  

//retrieve and  return all record
exports.findall = ( req , res ) => {
     Record.find()
     .then(records => {
        res
            .status(200)
            .json(records)
    }).catch(err => {
        res.status(500).send({
         message: err.message || "Some error occurred while retrieving the record."
        })
    });
    
};

//Find a single a record
exports.findone = ( req , res ) => {
    Record.findById(req.params.recordId)
    .then(record => {
        if(!record){
            return res.status(404).send({
                message: "Record not found with id " + req.params.recordId
            });
        }
        res.send(record);

    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Record not found with id " + req.params.recordId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving record with id " + req.params.recordId
        });
    });
};

//Update a single a record
exports.update = ( req , res ) => {
 
    Record.findOneAndUpdate({ _id: req.params.recordId }, {
        name: req.body.name,
        ContactNumber: req.body.ContactNumber,
        address: req.body.address

    }, {new : true})
    .then(record => {
        if(!record){
            return res.status(404).send({
                message:"Record not that found with id " +req.params.recordId
            })
        }
        res.send(record);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Record not found with id " + req.params.recordId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving record with id " + req.params.recordId
        });
    });
};

//Delete a record
exports.delete = ( req , res ) => {
    Record.findByIdAndRemove(req.params.recordId)
    .then(record => {
        if(!record){
            return res.status(404).send({
                message: "Record not found with id " + req.params.recordId
            })
        }
        res.send({message: "Record deleted successfully! "});
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Record not found with id " + req.params.recordId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving record with id " + req.params.recordId
        });
    });
};