import React, {useEffect, useState} from 'react'
import axios from 'axios'
import withAuth from './WithAuth'


const Messages = (props) => {
    const { darkMode } = props
    const [msgList, setMsgList] = useState([])
    console.log(darkMode)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/messages`)
        .then(res => {
            setMsgList(res.data.message)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div style={{marginTop:"200px"}}>
            <h5 className={darkMode?"lightText":null}>Messsages</h5>
            <table className={darkMode?"col-md-6 mx-auto mt-3 lightText":"col-md-6 mx-auto mt-3"}>
                <thead>
                    <tr>
                        <th className={darkMode?"lightText":null}>Name</th>
                        <th className={darkMode?"lightText":null}>Email</th>
                        <th className={darkMode?"lightText":null}>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {msgList.map((message)=>{
                        return (
                            <tr key={message._id}>
                                <td className={darkMode?"lightText":null}>{message.fname}</td>
                                <td className={darkMode?"lightText":null}>{message.email}</td>
                                <td className={darkMode?"lightText":null}>{message.message}</td>
                            </tr>
                        )})}
                </tbody>
            </table>
        </div>
    )
}

export default withAuth(Messages)