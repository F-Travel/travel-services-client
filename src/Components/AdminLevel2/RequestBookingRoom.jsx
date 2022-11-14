import React from 'react'
import { Title } from './ListHotel'
import {AiOutlineClose} from "react-icons/ai"
import {GoVerified } from "react-icons/go"

const RequestBookingRoom = (props) => {
  return (
    <div className={"dkaksjakjekeawa"}>
        <Title title={"Yêu cầu đặt phòng"} />
        <ListRequest />
    </div>
  )
}

const ListRequest= (props)=> {
    return (
        <div className={"dkaajkrjaerwlwa"} style={{width: "100%", marginTop: 20, padding: 20}}>
            <table className={"fjskljkrlejrkleaw"} style={{width: "100%"}} cellSpacing={20}>
                <thead className={"dksjakjdksawkaww"} style={{width: "100%"}}>
                    <tr className={"jakwjkjeaklwwa"}>
                        <th style={{fontWeight: 600}}>Tên khách hàng</th>
                        <th style={{fontWeight: 600}}>Số điện thoại</th>
                        <th style={{fontWeight: 600}}>Loại phòng</th>
                        <th style={{fontWeight: 600}}>Hình thức thanh toán</th>
                        <th style={{fontWeight: 600}}>Trạng thái</th>
                        <th style={{fontWeight: 600}}>Hành động</th>
                    </tr>
                </thead>
                <tbody className={"fkkejkjaiwjwawwawa"} style={{width: "100%"}}>
                    <tr className={"jkajksljeklaresas"}>
                        <td style={{textAlign: "center"}}>Nguyễn Văn A</td>
                        <td style={{textAlign: "center"}}>03948239232</td>
                        <td style={{textAlign: "center"}}>Phòng cao cấp</td>
                        <td style={{textAlign: "center"}}>Tiền mặt</td>
                        <td style={{textAlign: "center"}}>Chờ duyệt</td>
                        <td style={{display: "inline"}}>
                            <div className={"djskjaksjkafaawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: 20}}>
                                <button title={"Chấp nhận"} className={"fjakajkwawawwawa"} style={{display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer", border: "none", outline: "none", background: "unset"}}>
                                    <GoVerified style={{width: 24, height: 24, color: "#01b853"}} /> 
                                </button>
                                <button title={"Từ chối"} className={"fjakajkwawawwawa"} style={{display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer", border: "none", outline: "none", background: "unset"}}>
                                    <AiOutlineClose style={{width: 24, height: 24, color: "red"}} /> 
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className={"jkajksljeklaresas"}>
                        <td style={{textAlign: "center"}}>Nguyễn Văn A</td>
                        <td style={{textAlign: "center"}}>03948239232</td>
                        <td style={{textAlign: "center"}}>Phòng cao cấp</td>
                        <td style={{textAlign: "center"}}>Tiền mặt</td>
                        <td style={{textAlign: "center"}}>Chờ duyệt</td>
                        <td style={{display: "inline"}}>
                            <div className={"djskjaksjkafaawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: 20}}>
                                <button title={"Chấp nhận"} className={"fjakajkwawawwawa"} style={{display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer", border: "none", outline: "none", background: "unset"}}>
                                    <GoVerified style={{width: 24, height: 24, color: "#01b853"}} /> 
                                </button>
                                <button title={"Từ chối"} className={"fjakajkwawawwawa"} style={{display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer", border: "none", outline: "none", background: "unset"}}>
                                    <AiOutlineClose style={{width: 24, height: 24, color: "red"}} /> 
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RequestBookingRoom