import React, { useState } from 'react'
import axios from 'axios'

const Contact = (props) => {
    const { darkMode } = props
    const [contactForm, setContactForm] = useState({ fName: "", email: "", message: "" })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/messages', contactForm)
            .then(res => {
                setContactForm({
                    fName: "",
                    email: "",
                    message: ""
                })
                setErrors({
                    fName: "",
                    email: "",
                    message: ""
                })
            })
            .catch(err => {
                console.log(`submit errer`, err)
                setErrors({
                    fName: err.response.data.error.errors.fName,
                    email: err.response.data.error.errors.email,
                    message: err.response.data.error.errors.message
                })
                console.log(errors)
            })
    }
    return (
        <div className={darkMode ? "section contactDark" : "section contact"} id="contact" style={{ marginBottom: "100px" }}>
            <h2>Contact</h2>
            <div className={darkMode ? "contentDark" : "content"} id="form" style={{ padding: "40px" }}>
                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="form-floating mb-3 col">
                            <input type="text" className="form-control custom-input col" name="fName" value={contactForm.fName} onChange={changeHandler} placeholder="Name" />
                            <label htmlFor="fName" style={{ color: "darkslategrey" }}>Name</label>
                            {errors.fName ? <p className='text-danger'>{errors.fName.message}</p> : null}
                        </div>
                        <div className="form-floating mb-3 col">
                            <input type="email" className="form-control custom-input" name="email" value={contactForm.email} onChange={changeHandler} placeholder="Email" />
                            <label htmlFor="email" style={{ color: "darkslategrey" }}>Email</label>
                            {errors.email ? <p className='text-danger'>{errors.email.message}</p> : null}
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control custom-input" name="message" value={contactForm.message} onChange={changeHandler} placeholder="Leave a comment here" style={{ height: "100px" }}></textarea>
                        <label htmlFor="message" style={{ color: "darkslategrey" }}>Message</label>
                        {errors.message ? <p className='text-danger'>{errors.message.message}</p> : null}
                    </div>
                    <input type="submit" className="btn btn-success" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact