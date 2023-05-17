import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
    const {darkMode} = props
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/login', userInfo, {withCredentials: true})
        .then(res=>{
            // console.log(res);
            if(res.data.user.email === "t@w.com"){
                navigate("/messages")
            }else{
                console.log("you thought")
                navigate("/")
            }
        })
        .catch(err=>{
            console.log(`login errer`, err)
            setErrors({
                msg: err.response.data.msg
            })
            console.log(errors)
        })
    }
    return (
        <div>
            <br/>
            <div>
                <form onSubmit={submitHandler}>
                    <h3 className={darkMode?'lightText':null} style={{marginTop:"100px"}}>Login</h3>
                    {errors.msg ? <p className="text-danger">{errors.msg}</p>: ""}
                    <div className="form-floating col-md-4 mx-auto mb-3">
                        <label>Email</label>
                        <input type="text" className="form-control" name="fName" value={userInfo.fName} onChange={changeHandler} placeholder='First Name'/>
                    </div>
                    <div className="form-floating col-md-4 mx-auto mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={userInfo.password} onChange={changeHandler} placeholder='Password'/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-success'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginForm