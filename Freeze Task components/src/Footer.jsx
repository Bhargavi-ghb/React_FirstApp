import React from "react";
class Footer extends React.Component {

    render() {
        return (

            <>
                <div style={{ backgroundColor: "#cb3362", padding: "20px" }}>
                    <div style={{ display: "flex", gap: "70px", justifyContent: "center" }}>
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/facebook-new.png" alt="facebook-new" />
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1" />
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v2.png" alt="twitterx--v2" />
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin" />                </div>
                    <p style={{ textAlign: "center" }}>© 2025 Bhargavi. All Rights Reserved.</p>
                </div>

            </>
        );
    }
}

export default Footer;