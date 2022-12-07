import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import signup from '../../api/auth/user/signup'
import Background from '../Background/Background'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import InputTemplate from '../Common/InputTemplate'
import "./Signup.sass"

const Signup = () => {
  return (
    <div className={"signup-main-page"}>
        <MainSignup />
    </div>
  )
}

const MainSignup= (props)=> {
    const navigate= useNavigate()
    const [name, setName]= useState(()=> "")
    const [email, setEmail]= useState(()=> "")
    const [password, setPassword]= useState(()=> "")
    const [cpassword, setCPassword]= useState(()=> "")
    const [isManage, setIsManage]= useState(false)
    const [data, setData]= useState()
    const [role, setRole]= useState(['user'])
    const responseGoogle = (response) => {
        setData(response);
    }
    const isManageFunc= (e)=> {
        setIsManage(prev=> !prev)
        if(isManage=== true) {
            
            setRole(["user"])
        }
        else {
            setRole(["mod"])
        }
    }
    return (
        <div className={"main-signup-main-page"}>
            <div className={"form-main-signup-main-page"}>
                <div className={"title-form-main-signup-main-page"}>
                    Không có tài khoản? Hãy tạo tài khoản
                </div>
                <div className={"wrap-input-auth-page"}>
                    <InputTemplate type={"text"} onChange={(e)=> setName(e.target.value)} value={name} placeholder={"Name"} className={"inp-tml-name"}  />
                </div>
                <div className={"wrap-input-auth-page"}>
                    <InputTemplate type={"email"} onChange={(e)=> setEmail(e.target.value)} value={email} placeholder={"Email"} className={"inp-tml-email"}  />
                </div>
                <div className={"wrap-input-auth-page"}>
                    <InputTemplate type={"password"} onChange={(e)=> setPassword(e.target.value)} value={password} placeholder={"Mật khẩu"} className={"inp-tml-password"}  />
                </div>
                <div className={"wrap-input-auth-page"}>
                    <InputTemplate type={"password"} onChange={(e)=> setCPassword(e.target.value)} value={cpassword} placeholder={"Nhập lại mật khẩu"} className={"inp-tml-cpassword"}  />
                </div>
                <div style={{justifyContent: "flex-start", width: "90%", maxWidth: 708, display: "flex", alignItems: "center", gap: 10}}>
                    <input onChange={isManageFunc} value={isManage} checked={isManage} type="checkbox" className={"fgjklsfjkldjskdas"} style={{width: 18, height: 18}} />
                    <span>Bạn là quản lí khách sạn</span>
                </div>
                <br />
                <div className={"wrap-input-auth-page"}>
                    <ButtonTemplate className={"btn-tml-signup"} disable={false} onClick={()=> signup(name, email,password, setData, role, navigate) }>Đăng ký</ButtonTemplate>
                </div>
                <div className={"toggle-to-login"}>
                    Hoặc tiếp tục với
                </div>
                <div className={"link-to-login-page"}>
                    <div style={{display: "flex", justifyContent:" center", alignItems: "center", margin: 8}}>
                    <GoogleLogin
                        clientId="795778883777-ui60ejuabu59dq1hg7pnk32lplccs1g6.apps.googleusercontent.com"
                        buttonText="Tiếp tục với google"
                        onSuccess={responseGoogle}
                        onFailure={()=> console.log("error")}
                        cookiePolicy={'single_host_origin'}
                    />
                    </div>
                </div>
            </div>
            <Background />
        </div>
    )
}

export default Signup