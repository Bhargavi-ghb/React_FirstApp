import React from "react";

class Content2 extends React.Component {
    render() {
        return (
            <>
                <div style={{display:"flex",justifyContent:"center",backgroundColor:"rgba(211, 211, 211, 0.5)",height:"300px",paddingTop:"60px"}}>
                    <div style={{width:"700px"}}>
                        <h4>NEW PRODUCT</h4>
                        <h1 style={{color:"#cb3362"}}>The Twist of Healthy Yogurt</h1>
                        <p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
                    </div>
                    <div>
                        <img src="https://sample-website-pi.vercel.app/images/yogurt.jpg" alt="" />
                    </div>
                </div>

            </>
        )
    }
}


export default Content2;