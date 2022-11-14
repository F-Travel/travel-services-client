import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { TbReportSearch } from "react-icons/tb"
import {RiDeleteBin5Fill } from "react-icons/ri"
import "./ListBooking.sass"

const ListBooking = (props) => {
  return (
    <div className={"list-booking"} style={{width: "100%"}}>
        <div className={"klsdhjklsjasaas"} style={{display: "flex", alignItems: "center", gap: 50, padding: "0 40px", margin: "20px 0"}}>
            <NavLink to={"/booking/order/pending"} style={{textDecoration: "none", color: "#000", fontSize: 20, fontWeight: 600}} className={({isActive})=> isActive ? "sadkljaskjsassa skjldsjdkrujiwoeras": "akjhskeaiorjwes jsdjaslkdjkldswe" }>
                Chờ duyệt 
            </NavLink>
            <NavLink to={"/booking/order/success"} style={{textDecoration: "none", color: "#000", fontSize: 20, fontWeight: 600}} className={({isActive})=> isActive ? "sadkljaskjsassa skjldsjdkrujiwoeras": "akjhskeaiorjwes jsdjaslkdjkldswe" }>
                Đã đặt
            </NavLink>
        </div>
        <Routes>
            <Route path={"/"} element={<IndexComponent />} />
            <Route path={"/pending"} element={<PendingBooking />} />
            <Route path={"/success"} element={<SuccessBooking />} />
        </Routes>
    </div>
  )
}

const IndexComponent= (props)=> {
    return (
        <div className={"sjkdklasjklaska"} style={{padding: "0 40px"}}>
            <Title title={"Danh sách phòng"} />
            <br />
            <div className={"skljdaklsjklasa"} style={{width: "100%"}}>
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
            </div>
        </div>
    )
}

const PendingBooking= (props)=> {
    return (
        <div className={"sjkdklasjklaska"} style={{padding: "0 40px"}}>
            <Title title={"Danh sách phòng chờ duyệt"} />
            <br />
            <div className={"skljdaklsjklasa"} style={{width: "100%"}}>
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
            </div>
        </div>
    )
}

const SuccessBooking= (props)=> {
    return (
        <div className={"sjkdklasjklaska"} style={{padding: "0 40px"}}>
            <Title title={"Danh sách phòng đã đặt"} />
            <br />
            <div className={"skljdaklsjklasa"} style={{width: "100%"}}>
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
                <ElementDetail />
            </div>
        </div>
    )
}

const Title= (props)=> {
    return (
        <div className={"title-order-booking"} style={{fontSize: 20, fontWeight: 700, marginBottom: 20, marginTop: 40}}>
            {props.title}
        </div>
    )
}

const ElementDetail= (props)=> {
    return (
        <div className={"fjklsajklsjkalskja"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "end", gap: 40, marginBottom: 30}}>
            <div className="skjlajaksjkasaasas" style={{display: "flex", justifyContent: 'center', alignItems: "center"}}> 
                <div className={"aklsjaklsjskldas"} style={{width: 400, height: 250, background: "#d9d9d9"}}>

                </div>
            </div>
            <div className={"djklsjakljsklasja"} style={{width: "calc(100% - 400px)", minHeight: 250}}>
                <div className={"dkokaskadassad"} style={{width: "100%", justifyContent: "space-between", alignItems: "center", display: "flex", padding: 10}}>
                    <div className={"dkslaskladasadsk"} style={{fontSize: 16, fontWeight: 600, marginBottom: 16}}>
                        Miêu tả
                    </div>
                    <div className={"dkslaskladasadsk"} style={{fontSize: 16, fontWeight: 600, marginBottom: 16}}>
                        Trạng thái
                    </div>
                    <div className={"dkslaskladasadsk"} style={{fontSize: 16, fontWeight: 600, marginBottom: 16}}>
                        Hành động
                    </div>
                </div>
                <div className={"sdajslkajsklsjdass"} style={{width: "100%",height: 250, minHeight: 250, background: "#d9d9d9", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: 10}}>
                    <div className={"safdjkdjkldjakssa"} style={{height: "100%"}}>
                        <div className={"djklsjkasasdas"} style={{fontWeight: 600, marginBottom: 8}}>Tên khách sạn</div>
                        <div className={"aklsjkasjkflddsas"} style={{marginBottom: 20}}>Địa chỉ</div>
                        <div className={"djklsjkasasdas"} style={{fontWeight: 600, marginBottom: 8}}>Phòng tiêu chuẩn</div>
                    </div>
                    <div className={'fjlkjsdalksjkslfdas'} style={{fontWeight: 600, fontSize: 18, height: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        Chờ duyệt
                    </div>
                    <div className={"djaklsajlksjdklsjdss"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 20}}>
                        <div className={"dsjlksjaklsjkalsjdsa"} style={{width: 40, height: 40, display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer"}}>
                            <TbReportSearch style={{width: 40, height: 40}} width={40} height={40} />
                        </div>
                        <div className={"dsjlksjaklsjkalsjdsa"} style={{width: 40, height: 40, display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer"}}>
                            <RiDeleteBin5Fill style={{width: 40, height: 40}} width={40} height={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListBooking