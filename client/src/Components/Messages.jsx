import React, {useEffect, useState} from 'react'
import axios from 'axios'
import withAuth from './WithAuth'


const Messages = () => {
    const [msgList, setMsgList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/messages`)
        .then(res => {
            console.log(res)
            setMsgList(res.data.message)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div style={{marginTop:"100px"}}>
            {
                msgList.map((msg, index) => {
                    return <div className="mt-4" key={index}>
                        {msg.fname}, {msg.email}, {msg.message}
                        </div>
                })
            }
        </div>
    )
}

export default withAuth(Messages)