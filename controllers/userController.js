// This file is for all the changes we need to make to the database

const userController = async(req,res) => {
    res.send('hello from the controller');
}

module.exports.userController = userController;