import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import BannerLoginSignup from '../Common/BannerLoginSignup'
import BannerNameSite from '../Common/BannerNameSite'
import InputTemplate from '../Common/InputTemplate'
import "./Signup.sass"

const Signup = () => {
  return (
    <div className={"signup-main-page"}>
        <BannerNameSite />
        <BannerLoginSignup type={"Đăng ký"} />
        <MainSignup />
    </div>
  )
}

const MainSignup= (props)=> {
    const [name, setName]= useState(()=> "")
    const [email, setEmail]= useState(()=> "")
    const [password, setPassword]= useState(()=> "")
    const [cpassword, setCPassword]= useState(()=> "")
    const responseGoogle = (response) => {
        console.log(response);
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
                    <InputTemplate type={"email"} onChange={(e)=> setEmail(e.target.value)} value={email} placeholder={"Email hoặc sdt"} className={"inp-tml-email"}  />
                </div>
                <div className={"wrap-input-auth-page"}>
                    <InputTemplate type={"password"} onChange={(e)=> setPassword(e.target.value)} value={password} placeholder={"Mật khẩu"} className={"inp-tml-password"}  />
                </div>
                <div className={"wrap-input-auth-page"}>
                    <InputTemplate type={"password"} onChange={(e)=> setCPassword(e.target.value)} value={cpassword} placeholder={"Nhập lại mật khẩu"} className={"inp-tml-cpassword"}  />
                </div>
                <div className={"wrap-input-auth-page"}>
                    <ButtonTemplate className={"btn-tml-signup"} disable={false} onClick={()=> console.log("Hello World") }>Đăng ký</ButtonTemplate>
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
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup