const message = require("../models/message.model");

module.exports.findAllMessages = (req, res) => {
    message.find()
    .then(allMessages => res.json({message: allMessages}))
    .catch(err => res.status(400).json({message: "Something went worng finding all messages", error: err}))
}
module.exports.findOneMessage = (req, res) => {
    message.findById(req.params.id)
    .then(oneMessage => res.json({message: oneMessage}))
    .catch(err => res.status(400).json({message: "Something went worng finding one message", error: err}))
}
module.exports.createMessage = (req, res) => {
    message.create(req.body)
    .then(newMessage => res.json({message: newMessage}))
    .catch(err => res.status(400).json({message: "Something went worng creating a message", error: err}))
}
module.exports.updateMessage = (req, res) => {
    message.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .then(updatedMessage => res.json({message: updatedMessage}))
    .catch(err => res.status(400).json({message: "Something went worng updating a message", error: err}))
}
module.exports.deleteMessage = (req, res) => {
    message.findByIdAndDelete(req.params.id)
    .then(result => res.json({result: result}))
    .catch(err => res.status(400).json({message: "Something went worng deleting a message", error: err}))
}
module.exports.deleteAllMessages = (req, res) => {
    message.deleteMany()
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json({ message: "Something went worng deleting all messages", error: err }))
}