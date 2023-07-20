import React from 'react'
import { Link } from 'react-router-dom'
const Blog = (props) => {
    const { darkMode } = props
    return (
        <div className={darkMode ? "section blogDark" : "section blog"} id="blog">
            <h2>Blog</h2>
            <div className={darkMode ? "contentDark" : "content"}>
                    <p style={{textAlign:"left", margin:"10px"}}>• <Link to='https://medium.com/@tylerwertman/auto-re-deploy-ci-cd-your-javscript-mern-stack-apps-mongo-express-react-node-with-github-c00ef211bda8' style={{ textAlign: "center" }}>Auto Re-deploy (CI/CD) a Javscript/MERN stack app with Github Actions on AWS EC2 (or any VPS)</Link></p>

                    <p style={{textAlign:"left", margin:"10px"}}>• <Link to='https://medium.com/@tylerwertman/secure-your-aws-ec2-web-server-with-ssl-and-https-with-lets-encrypt-f0aa52869de8' style={{ textAlign: "center" }}>Secure your AWS EC2 web server with SSL and HTTPS with Let’s Encrypt</Link></p>

            </div>
        </div>
    )
}

export default Blog