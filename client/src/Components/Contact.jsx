import React, {useState} from 'react'
import axios from 'axios'

const Contact = () => {

    const [message, setMessage] = useState({fname: "", email: "", message: ""})
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/messages', message)
        .then(res=>{
            setMessage({
                fname: "",
                email: "",
                message: ""
            })
            setErrors({
                fname: "",
                email: "",
                message: ""
            })
        })
        .catch(err=>{
            console.log(`submit errer`, err)
            setErrors({
                name: err.response.data.error.errors.name,
                email: err.response.data.error.errors.email,
                message: err.response.data.error.errors.message
            })
            console.log(errors)
        })
    }
    return (
        <div className="section" id="contact">
            <h2>Contact</h2>
            <div className="content" id="form"> 
                <form onSubmit={submitHandler}>
                    <label htmlFor="fname">Name: </label>
                    <input type="text" id="fname" name="fname" value={message.fname} onChange={changeHandler} size="20" required/>&nbsp;
                    {/* <label for="lname">Last name:</label> */}
                    {/* <input type="text" id="lname" name="lname" size="20"><br/><br/> */}
                    <br className="hidden"/>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" value={message.email} onChange={changeHandler} size="20" required/><br/><br/>

                    <label htmlFor="message">&nbsp;&nbsp;Message:</label><br/><br/>
                    <textarea id="message" name="message" value={message.message} onChange={changeHandler} rows="5" cols="55" required></textarea><br/><br/>

                    <input type="submit" value="Submit"/>
                    {/* <input type="reset"/> */}
                </form>
            </div>
        </div>
    )
}

export default Contact