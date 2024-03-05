import React from 'react'
// import { Link } from 'react-router-dom'

const Tech = (props) => {
    const { darkMode, windowWidth } = props

    return (
        <div className={darkMode ? "section techDark" : "section tech"} id="tech">
            <h2 style={{ marginTop: windowWidth > 1919 ? "69px" : windowWidth < 351 ? "30px" : "25px", marginBottom: "25px" }}>Tyler's Tech Services</h2>
            <div className={darkMode ? "contentDark" : "content"}>
                <h3>Installing & Servicing:</h3>
                <ul style={{ listStyleType: "none", paddingLeft: "0", marginBottom: "0" }}>
                    <li>Wi-Fi Networks</li>
                    <li>Printers</li>
                    <li>Computers/Laptops</li>
                    <li>iPhone/Android Phones</li>
                    <li>Smart Cameras/Doorbells</li>
                    <li>TVs</li>
                    <li>Audio/Video Systems</li>
                    <li>Websites</li>
                </ul>
                {/* <p style={{textAlign:"center", margin:"10px"}}><Link to='https://medium.com/@tylerwertman/auto-re-deploy-ci-cd-your-javscript-mern-stack-apps-mongo-express-react-node-with-github-c00ef211bda8' style={{ textAlign: "center" }}>Book an appointment on Calendly</Link></p> */}
            </div>

            {/* MISC SERVICES COMMENTED OUT */}
            {/* <h2 style={{ marginTop: windowWidth > 1919 ? "69px" : windowWidth === 320 ? "30px" : "12px" }}>Tyler's Misc Services</h2>
            <div className={darkMode ? "contentDark" : "content"}>
                <h3>Services:</h3>
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                    <li>Airport Rides</li>
                    <li>IKEA furniture assembly</li>
                    <li>Furniture moving</li>
                </ul>
            </div> */}
            <br />
            <h2 style={{ padding: "10px 30px", marginBottom: "25px", fontSize: windowWidth < 600 ? "1.25rem" : null }}>
                Please <a href="tel:5166607019" style={{ color: "#009050" }}>call</a> or <a href="sms:5166607019" style={{ color: "#009050" }}>text</a> me at <span style={{ color: "#009050" }}>516 660 7019</span> to book an appointment
            </h2>
            <h2 style={{ padding: "10px 30px", marginBottom: "25px", fontSize: windowWidth < 600 ? "1.25rem" : null }}>
                If you are satisifed with my services, please <a href='https://review.tylerw.xyz' style={{ color: "#009050" }} target="_blank" rel="noreferrer">click here to leave a Google Review</a>
            </h2>
            <br /><br />
        </div>
    )
}

export default Tech