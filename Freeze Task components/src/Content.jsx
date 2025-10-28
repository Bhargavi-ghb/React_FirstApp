import React from "react"

class Content extends React.Component{
    render(){
        return(
            <>
               <div style={{ backgroundImage: 'url("https://sample-website-pi.vercel.app/images/bg-home.jpg")',width:"100%",backgroundSize:"cover",height: "100vh",backgroundPosition: "center",display:"flex",justifyContent:"center",alignItems:"end" }}>
                    <h2 style={{border:"1px solid",padding:"30px",borderRadius:"50%",width:"100px",backgroundColor:"#CB3362"}}>FREEZE DELIGHT</h2>
                
            </div>
            
            </>
        )
    }
}

export default Content;