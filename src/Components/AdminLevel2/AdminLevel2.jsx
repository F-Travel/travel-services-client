import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import "./AdminLevel2.sass"
import RequestBookingRoom from './RequestBookingRoom'

const AdminLevel2 = (props) => {
  return (
    <div className={"sjfkljdkjaskasas"} style={{width: '100%'}}>
        <div className={"sdkljdakldjkas"} style={{width :"100%", display: "flex", justifyContent: 'space-between', gap: 20 }}>
            <Navigation />
            <MainAdminLevel2 />
        </div>
    </div>
  )
}

const Navigation= (props)=> {
    return (
        <div className={"jaksjakdslkdass"} style={{ background: "#d9d9d9", minHeight: "100%", width: 300, padding: 20}}>
            <NavigationHeritage textLv1={"Quản lí khách sạn"} textLv2={"Thông tin chung"}
                linkLv1={"/admin/hotel/manage"}
                linkLv2={"/admin/hotel/manage/general"}
            />
             <NavigationHeritage textLv1={"Đăng ký mới khách sạn"} textLv2={"Thông tin chung"}
                linkLv1={"/admin/hotel/new"}
                linkLv2={"/admin/hotel/new/general"}
            />
             <NavigationHeritage textLv1={"Quản lí khách sạn"} textLv2={"Thông tin chung"}
                linkLv1={"/admin/hotel/manage"}
                linkLv2={"/admin/hotel/new/manage/room"}
            />
             <NavigationHeritage textLv1={"Quản lí khách sạn"} textLv2={"Thông tin chung"}
                linkLv1={"/admin/hotel/manage"}
                linkLv2={"/admin/hotel/manage/general"}
            />

        </div>
    )
}

const MainAdminLevel2= (props)=> {
    return (
        <div className={"alksjklrjwkeawsa"} style={{flex: "1 1 0"}}>
            <Routes>
                {/* <Route path={"/admin/"} /> */}
                <Route path={"/manage/booking/request"} element={<RequestBookingRoom />} />
            </Routes>
        </div>
    )
}

export default AdminLevel2

const NavigationHeritage= (props)=> {
    return (
        <div className={"dlfjskldjksdjesiwawa"} style={{marginBottom: 8}}>
            <div className={"dsjkjkawjsfseaw"}>
                <NavLink to={props.linkLv1} className={({isActive})=> isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"} style={{color: "#000", textDecoration: "none", fontWeight: 600}}>
                    {props.textLv1}
                </NavLink>
            </div>
            <div className={"dkskalkflkeseseaw"} style={{marginTop: 16}}>
                <NavLink to={props.linkLv2} className={({isActive})=> isActive ? "jdahjahwuiheuwawawa" : "dskljakjakjeakwjawa"} style={{color: "#000", textDecoration: "none", marginLeft: 12, marginTop: 8}}>
                    {props.textLv2}
                </NavLink>
            </div>
        </div>
    )
}