import React from 'react'

const Contact = () => {
    return (
        <div className="section" id="contact">
            <h2>Contact</h2>
            <div className="content" id="form"> 
                <form action="#">
                    <label for="fname">Name: </label>
                    <input type="text" id="fname" name="fname" size="20" required/>&nbsp;
                    {/* <label for="lname">Last name:</label> */}
                    {/* <input type="text" id="lname" name="lname" size="20"><br/><br/> */}
                    <br className="hidden"/>
                    <label for="email">Email: </label>
                    <input type="text" id="email" name="email" size="20" required/><br/><br/>
                    <label for="message">&nbsp;&nbsp;Message:</label><br/><br/>
                    <textarea id="message" name="message" rows="5" cols="55" required></textarea><br/><br/>
                    <input type="submit" value="Submit"/>
                    <input type="reset"/>
                </form>
            </div>
        </div>
    )
}

export default Contact