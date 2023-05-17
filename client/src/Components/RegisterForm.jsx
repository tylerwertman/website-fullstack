import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegisterForm = (props) => {
    const {darkMode} = props

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [userInfo, setUserInfo] = useState({
        fName: "",
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
                fName: err.response.data.errors.fName,
                email: err.response.data.errors.email,
                password: err.response.data.errors.password,
                confirmPassword: err.response.data.errors.confirmPassword
            })
            console.log(errors)
        })
    }
    return (
        <div>
            <br/>
            <div style={{marginTop:"100px"}}>
                <form onSubmit={submitHandler}>
                    <h3 className={darkMode?'lightText':null}>Register</h3>

                    <div className="form-floating col-md-4 mx-auto mb-3">
                        <input type="text" className="form-control" name="fName" value={userInfo.fName} onChange={changeHandler} placeholder='First Name'/>
                        <label>First Name</label>
                        {errors.fName ? <p className='text-danger'>{errors.fName.message}</p> : null}
                    </div>

                    <div className="form-floating col-md-4 mx-auto mb-3">
                        <input type="email" className="form-control" name="email" value={userInfo.email} onChange={changeHandler} placeholder='Email'/>
                        <label>Email</label>
                        {errors.email ? <p className='text-danger'>{errors.email.message}</p> : null}
                    </div>

                    <div className="form-floating col-md-4 mx-auto mb-3">
                        <input type="password" className="form-control" name="password" value={userInfo.password} onChange={changeHandler}  placeholder='Password'/>
                        <label>Password</label>
                        {errors.password ? <p className='text-danger'>{errors.password.message}</p> : null}
                    </div>

                    <div className="form-floating col-md-4 mx-auto mb-3">
                        <input type="password" className="form-control" name="confirmPassword" value={userInfo.confirmPassword} onChange={changeHandler}  placeholder='Confirm Password'/>
                        <label>Confirm Password</label>
                        {errors.confirmPassword ? <p className='text-danger'>{errors.confirmPassword.message}</p> : null}
                    </div>

                    <div className="form-group">
                        <button type="submit" className='btn btn-success'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm