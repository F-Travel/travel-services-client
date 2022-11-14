import React, { useState } from 'react'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import BannerLoginSignup from '../Common/BannerLoginSignup'
import BannerNameSite from '../Common/BannerNameSite'
import InputTemplate from '../Common/InputTemplate'
import "./Login.sass"
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  return (
    <div className={"login-main-page"}>
      <BannerNameSite />
      <BannerLoginSignup type={"Đăng nhập"} />
      <MainLogin />
    </div>
  )
}

const MainLogin= ()=> {
  const [email, setEmail]= useState(()=> "")
  const [password, setPassword]= useState(()=> "")
  const responseGoogle = (response) => {
    console.log(response);
  }
  
  return (
    <div className={"main-login-main-page"}>
      <div className={"form-main-login-main-page"}>
      <div className={"title-form-main-login-main-page"}>
        Đăng nhập
      </div>
      <div className={"wrap-input-auth-page"}>
        <InputTemplate type={"email"} onChange={(e)=> setEmail(e.target.value)} value={email} placeholder={"Email hoặc sdt"} className={"inp-tml-email"}  />
      </div>
      <div className={"wrap-input-auth-page"}>
        <InputTemplate type={"password"} onChange={(e)=> setPassword(e.target.value)} value={password} placeholder={"Mật khẩu"} className={"inp-tml-password"}  />
      </div>
      <div className={"wrap-input-auth-page"}>
        <ButtonTemplate className={"btn-tml-login"} disable={false} onClick={()=> console.log("Hello World") }>Đăng nhập</ButtonTemplate>
      </div>
      <div style={{width: "90%", maxWidth: 708, display: "flex", justifyContent: 'space-between',  alignItems:" center"}}>
        <span>Bạn không có tài khoản? <Link to={"/signup"} style={{fontWeight: 600, color: "#2e89ff",  textDecoration: "none"}}>Đăng ký tại đây</Link></span>
        <span><Link to={"/forgot/password"} style={{fontWeight: 600, color: "#2e89ff",  textDecoration: "none"}}>Quên mật khẩu</Link></span>
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

export default Login