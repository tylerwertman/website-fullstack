import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginForm = (props) => {

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
            console.log(res);
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
                    <h3 style={{marginTop:"60px"}}>Login</h3>
                    {errors.msg ? <p className="text-danger">{errors.msg}</p>: ""}
                    <div>
                        <label className='form-label'>Email</label>
                        <input type="email" name="email" value={userInfo.email} onChange={changeHandler}/>
                    </div>
                    <div className="form-group">
                        <label className='form-label'>Password</label>
                        <input type="password" name="password" value={userInfo.password} onChange={changeHandler}/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginForm