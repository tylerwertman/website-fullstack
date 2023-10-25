const message = require("../models/message.model");
const nodemailer = require("nodemailer")
const password = process.env.NODEMAILER_PASSWORD
const email1 = process.env.EMAIL1
const email2 = process.env.EMAIL2
const email3 = process.env.EMAIL3

module.exports.findAllMessages = (req, res) => {
    message.find()
        .then(allMessages => res.json({ message: allMessages }))
        .catch(err => res.status(400).json({ message: "Something went worng finding all messages", error: err }))
}
module.exports.findOneMessage = (req, res) => {
    message.findById(req.params.id)
        .then(oneMessage => res.json({ message: oneMessage }))
        .catch(err => res.status(400).json({ message: "Something went worng finding one message", error: err }))
}
module.exports.createMessage = (req, res) => {
    message.create(req.body)
        .then(newMessage => res.json({ message: newMessage }))
        .catch(err => res.status(400).json({ message: "Something went worng creating a message", error: err }))
}
module.exports.updateMessage = (req, res) => {
    message.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedMessage => res.json({ message: updatedMessage }))
        .catch(err => res.status(400).json({ message: "Something went worng updating a message", error: err }))
}
module.exports.deleteMessage = (req, res) => {
    message.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json({ message: "Something went worng deleting a message", error: err }))
}
module.exports.deleteAllMessages = (req, res) => {
    message.deleteMany()
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json({ message: "Something went worng deleting all messages", error: err }))
}

module.exports.createEmail = (req, res) => {
    // console.log('controller' + req.body)

    const sendEmail = ({ fName, email, message }) => {
        return new Promise((resolve, reject) => {
            const transporter = nodemailer.createTransport({
                service: "hotmail",
                auth: {
                    user: email3,
                    pass: password
                },
                from: email3
            })
            const options = {
                from: `Tyler Wertman Developments ${email3}`,
                to: email1,
                cc: email2,
                subject: "TWD Contact Form",
                text: `name: ${fName}\nemail: ${email}\nmessage: ${message}`
            }
            transporter.sendMail(options, (err, info) => {
                if (err) {
                    console.log(err)
                    return reject({ error: "An error has occured!" })
                }
                console.log(`sent ${info.response}`)
                return resolve({ Success: "An email was sent!" })
            })
        })
    }
    sendEmail(req.body)
        .then((response) => res.send(response.messsage))
        .catch((error) => res.status(500).send(error.message))
}
