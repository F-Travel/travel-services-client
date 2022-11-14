import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BsPower}from "react-icons/bs"
import "./Header.sass"

const Header = (prosp) => {
  const [loggedIn, setLoggedIn]= useState(()=> true)
  return (
    <>
        <div className={"fixed-header-main"}>
            <LeftHeader />
            {
                loggedIn=== true && <RightHeaderLoggedIn />
            }
            {
                loggedIn=== false && <RightHeaderNotLoggedIn />
            }
        </div>
        <div className={"header-main"}>
            
        </div>
    </>
  )
}

export default Header

const LeftHeader= (props)=> {
    return (
        <div className={"left-header-fixed"}>
            <NavLink className={({isActive})=> isActive ? "active-link-header link-left-header-fixed" : "link-left-header-fixed"} to={"/"}>Trang chủ</NavLink>
        </div>
    )
}

const RightHeaderLoggedIn= (props)=> {
    const [isAvatar, setIsAvatar]= useState(()=> false)
    return (
        <div className={"right-header-fixed-logged"}>
            <div className={"dljsjaklsjkldfasa"} style={{display :"flex", justifyContent: 'center', alignItems: 'center', gap: 20}}>
                {   
                    <Link to={"/user/profile"} className={"jklasjkalsjadas"} style={{textDecoration: "none", color: "#000", fontSize: 16}}>
                        <div className={"shdkhajksdhjasassa"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
                            <div className={"jklsdjaklsjkalsasf"} style={{display: "flex", justifyContent: 'center', alignItems: "center", width :40, height: 40, borderRadius: "50%", overflow: "hidden"}}>
                                {
                                    isAvatar=== false &&<img src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png" alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                                }
                                {
                                    isAvatar=== true && <>...</>
                                }
                            </div>
                            <div className={"njkshajksjlkasasas"} style={{fontWeight: 600}}>
                                Nhat Huy
                            </div>
                        </div>
                    </Link>
                } 
                {
                    // Logout
                    <div className={"dljksjakjskladjassasas"} style={{display: "flex", justifyContent: 'center',alignItems: "center", gap: 5, cursor: "pointer"}}>
                        <div className={"sjdklasjksjadfsas"} style={{display: "flex", justifyContent: 'center', alignItems: 'center',}}>
                            <BsPower style={{width: 26,height: 26,color :"#333"}} />
                        </div>
                        <div className={"djksdjalksdjkfsads"}>
                            Logout
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const RightHeaderNotLoggedIn= (props)=> {
    return (
        <div className={"right-header-fixed-not-logged"}>
            <div className={"wrap-link-to-auth-user"}>
                <NavLink to={"/signup"} className={({isActive})=> isActive ? "active-link-header to-signup-auth-user navigate-to-auth-user" : "to-signup-auth-user navigate-to-auth-user"}>Đăng ký</NavLink>
            </div>
            <div className={"wrap-link-to-auth-user"}>
                <NavLink to={"/login"} className={({isActive})=> isActive ? "active-link-header to-login-auth-user navigate-to-auth-user" : "to-login-auth-user navigate-to-auth-user"}>Đăng nhập</NavLink>
            </div>
        </div>
    )
}