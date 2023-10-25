import React from 'react'
// import { Link } from 'react-router-dom'

const Tech = (props) => {
    const { darkMode, windowWidth } = props

    return (
        <div className={darkMode ? "section techDark" : "section tech"} id="tech">
            <h2 style={{ marginTop: windowWidth > 1919 ? "69px" : windowWidth < 351 ? "30px" : "12px" }}>Tyler's Tech Services</h2>
            <div className={darkMode ? "contentDark" : "content"}>
                <h3>Servicing:</h3>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                    <li>Wi-Fi Networks</li>
                    <li>Printers</li>
                    <li>Computers/Laptops</li>
                    <li>iPhone/Android Phones</li>
                </ul>
                <h3>Installing:</h3>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                    <li>Wi-Fi Networks</li>
                    <li>Printers</li>
                    <li>Smart Doorbells</li>
                    <li>Smart Cameras</li>
                    <li>TVs</li>
                    <li>Audio/Video</li>
                </ul>
                {/* <p style={{textAlign:"center", margin:"10px"}}><Link to='https://medium.com/@tylerwertman/auto-re-deploy-ci-cd-your-javscript-mern-stack-apps-mongo-express-react-node-with-github-c00ef211bda8' style={{ textAlign: "center" }}>Book an appointment on Calendly</Link></p> */}
            </div>
            <h2 style={{ marginTop: windowWidth > 1919 ? "69px" : windowWidth === 320 ? "30px" : "12px" }}>Tyler's Misc Services</h2>
            <div className={darkMode ? "contentDark" : "content"}>
                <h3>Services:</h3>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                    <li>Airport Rides</li>
                    <li>IKEA furniture assembly</li>
                    <li>Furniture moving</li>
                </ul>
                {/* <p style={{textAlign:"center", margin:"10px"}}><Link to='https://medium.com/@tylerwertman/auto-re-deploy-ci-cd-your-javscript-mern-stack-apps-mongo-express-react-node-with-github-c00ef211bda8' style={{ textAlign: "center" }}>Book an appointment on Calendly</Link></p> */}
            </div>
            <br />
            <h2 style={{padding: "10px 30px"}}>
                Please call or text <span style={{ color: "#009050" }}>516 660 7019</span> to book an appointment
            </h2>
            <br /><br /><br />
        </div>
    )
}

export default Tech