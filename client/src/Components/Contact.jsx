import React, { useState } from 'react'
import axios from 'axios'

const Contact = (props) => {
    const { darkMode } = props
    const [message, setMessage] = useState({ fname: "", email: "", message: "" })
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
            .then(res => {
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
            .catch(err => {
                console.log(`submit errer`, err)
                setErrors({
                    fname: err.response.data.error.errors.fname,
                    email: err.response.data.error.errors.email,
                    message: err.response.data.error.errors.message
                })
                console.log(errors)
            })
    }
    return (
        <div className="section" id={darkMode ? "contactDark" : "contact"} style={{ marginBottom: "100px" }}>
            <h2>Contact</h2>
            <div className={darkMode ? "contentDark" : "content"} id="form" style={{padding: "40px"}}>
                <form onSubmit={submitHandler}>
                    {/* <div class="form-floating mb-3">
                        {errors.fname ? <p style={{color:"red"}}>{errors.fname.message}</p>: ""}
                        <input className="form-control" type="text" id="fname" name="fname" value={message.fname} onChange={changeHandler} placeholder="Name" required/>
                        <label htmlFor="fname" className="form-control">Name</label>
                    </div>
                    <br className="hidden"/>
                    <div class="form-floating mb-3">
                        {errors.email ? <p style={{color:"red"}}>{errors.email.message}</p>: ""}
                        <input className="form-control" type="text" id="email" name="email" value={message.email} onChange={changeHandler} placeholder="Email" required/><br/><br/>
                        <label htmlFor="email" className="form-control">Email</label>
                    </div>

                    {errors.message ? <p style={{color:"red"}}>{errors.message.message}</p>: ""}

                    <label htmlFor="message" className="form-control">Message</label><br/><br/>
                    <textarea className="form-control" id="message" name="message" value={message.message} onChange={changeHandler} placeholder="Message" required></textarea><br/><br/>

                <input type="reset"/> */}
                    <div className="row">
                        <div class="form-floating mb-3 col">
                            <input type="text" class="form-control col" name="fname" value={message.fname} onChange={changeHandler} placeholder="Name" />
                            <label htmlFor="fname">Name</label>
                        </div>
                        <div class="form-floating mb-3 col">
                            <input type="email" class="form-control" name="email" value={message.email} onChange={changeHandler} placeholder="Email" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" name="message" value={message.message} onChange={changeHandler} placeholder="Leave a comment here" style={{height: "100px"}}></textarea>
                        <label htmlFor="message">Comments</label>
                    </div>
                    <input type="submit" className="btn btn-success" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Contact