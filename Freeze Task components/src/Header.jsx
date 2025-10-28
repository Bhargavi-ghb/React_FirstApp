function Header() {
    return (

        <>
            <div style={{display:"flex",alignItems: "center",justifyContent: "space-between",}}>
                <div>
                    <img src="https://sample-website-pi.vercel.app/images/logo.png" alt="" />
                </div>
                <div >
                    <ul style={{display: "flex",listStyle: "none",gap: "25px"}}>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </ul>
                </div>

            </div>
        </>
    )
}


export default Header;