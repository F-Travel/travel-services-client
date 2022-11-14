import React from 'react';
import { Link } from 'react-router-dom';
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate';
import InputTemplate from '../Common/InputTemplate';
import "./Profile.sass"

const Profile = (props) => {
  return (
    <div className={"profile-user-site"} style={{width: "100%", display: "flex", justifyContent:" center", alignItems:" center"}}>
        <div className={"c-profile-user-site"} style={{width: "100%", maxWidth: 1200, margin: "50px 0"}}>
            <div className={"c-title-profile-user-site"} style={{fontSize: 32, fontWeight: 500, marginTop: 50, marginBottom: 50}}>
                Thông tin người dùng
            </div>
            <div className={"list-info-user"} style={{maxWidth: 900, width: "100%", display: 'flex', alignItems: "center", flexWrap: "wrap", justifyContent: "space-between"}}>
                <div className={"wrap-list-info-user"} style={{display:" flex", justifyContent: "space-between", gap: 20, width: "40%", marginBottom: 40, alignItems: "center"}}>
                    <Title title={"Tên đầy đủ"} />
                    <div className={"wrap-inp-info-user"} style={{width: 200, height: 45, background: "#d9d9d9"}}>
                        <InputTemplate className={"wrap-inp-info-user-i"} />
                    </div>
                </div>
                <div className={"wrap-list-info-user"} style={{display:" flex", justifyContent: "space-between", gap: 20, width: "40%", marginBottom: 40, alignItems: "center"}}>
                    <Title title={"Giới tính"} />
                    <div className={"wrap-inp-info-user"} style={{width: 200, height: 45, background: "#d9d9d9"}}>
                        <InputTemplate className={"wrap-inp-info-user-i"} />
                    </div>
                </div>
                <div className={"wrap-list-info-user"} style={{display:" flex", justifyContent: "space-between", gap: 20, width: "40%", marginBottom: 40, alignItems: "center"}}>
                    <Title title={"Số điện thoại"} />
                    <div className={"wrap-inp-info-user"} style={{width: 200, height: 45, background: "#d9d9d9"}}>
                        <InputTemplate className={"wrap-inp-info-user-i"} />
                    </div>
                </div>
                <div className={"wrap-list-info-user"} style={{display:" flex", justifyContent: "space-between", gap: 20, width: "40%", marginBottom: 40, alignItems: "center"}}>
                    <Title title={"Ngày sinh"} />
                    <div className={"wrap-inp-info-user"} style={{width: 200, height: 45, background: "#d9d9d9"}}>
                        <InputTemplate className={"wrap-inp-info-user-i"} />
                    </div>
                </div>
                <div className={"wrap-list-info-user"} style={{display:" flex", justifyContent: "space-between", gap: 20, width: "40%", marginBottom: 40, alignItems: "center"}}>
                    <div className={"wrap-inp-info-user"} style={{width: 200, height: 45, background: "#d9d9d9"}}>
                        <ButtonTemplate disable={false} onClick={()=> {}} className={"wrap-btn-info-user-i"}>
                            <Link to={"/change/password"} style={{textDecoration: "none", color: "#000", fontSize: 20}}>
                                Đổi mật khẩu
                            </Link>
                        </ButtonTemplate>
                    </div>
                </div>
            </div>
            <div className={"save-info-user-wrap"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: 'center', maxWidth: 900}}> 
                <div className={"save-info-user"} style={{width: 200, height: 80, marginTop: 50}}>
                    <ButtonTemplate onClick={()=> {}} className={"save-info-user-btn"} disable={false} >Lưu</ButtonTemplate>
                </div>
            </div>
        </div>
    </div>
  )
}

export const Title= (props)=> {
    return (
        <div className={"title-i-user"} style={{fontSize: 20, fontWeight: 400}}>
            {props.title}
        </div>
    )
}
export default Profile