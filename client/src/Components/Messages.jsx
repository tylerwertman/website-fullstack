import React, {useEffect, useState} from 'react'
import axios from 'axios'
import withAuth from './WithAuth'


const Messages = () => {
    const [msgList, setMsgList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/messages`)
        .then(res => {
            // console.log(res)
            setMsgList(res.data.message)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div style={{marginTop:"100px"}}>
            <h5>Messsages</h5>
            <table className="col-md-6 mx-auto mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {msgList.map((message)=>{
                        return (
                            <tr key={message._id}>
                                {/* <td><Link to={`${author._id}`}>{author.name}</Link></td> */}
                                <td>{message.fname}</td>
                                <td>{message.email}</td>
                                <td>{message.message}</td>
                            </tr>
                        )})}
                </tbody>
            </table>
        </div>
        // <div style={{marginTop:"100px"}}>
        //     {
        //         msgList.map((msg, index) => {
        //             return <div className="mt-4" key={index}>
        //                 {msg.fname}, {msg.email}, {msg.message}
        //                 </div>
        //         })
        //     }
        // </div>
    )
}

export default withAuth(Messages)