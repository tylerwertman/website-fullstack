import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegisterForm = (props) => {
    const {setLoggedIn, count, setCount} = props

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/register', userInfo)
        .then(res=>{
            // console.log(res);
            navigate("/admin-login")

        })
        .catch(err=>{
            console.log(`submit errer`, err)
            setErrors({
                firstName: err.response.data.msg.firstName,
                email: err.response.data.msg.email,
                password: err.response.data.msg.password,
                confirmPassword: err.response.data.msg.confirmPassword
            })
            console.log(errors)
        })
    }
    return (
        <div>
            <br/>
            <div style={{marginTop:"60px"}}>
                <form onSubmit={submitHandler}>
                    <h3>Register</h3>
                    {errors.firstName ? <p style={{color:"red"}}>{errors.firstName}</p>: ""}
                    <div className="form-group">
                        <label className='form-label'>First Name</label>
                        <input type="text" className="form-control" name="firstName" value={userInfo.firstName} onChange={changeHandler}/>
                    </div>
                    {errors.email ? <p style={{color:"red"}}>{errors.email}</p>: ""}
                    <div className="form-group">
                        <label className='form-label'>Email</label>
                        <input type="email" className="form-control" name="email" value={userInfo.email} onChange={changeHandler}/>
                    </div>
                    {errors.password ? <p style={{color:"red"}}>{errors.password}</p>: ""}
                    <div className="form-group">
                        <label className='form-label'>Password</label>
                        <input type="password" className="form-control" name="password" value={userInfo.password} onChange={changeHandler}/>
                    </div>
                    {errors.confirmPassword ? <p style={{color:"red"}}>{errors.confirmPassword}</p>: ""}
                    <div className="form-group">
                        <label className='form-label'>Confirm Password</label>
                        <input type="password" className="form-control" name="confirmPassword" value={userInfo.confirmPassword} onChange={changeHandler}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-primary mt-3'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm