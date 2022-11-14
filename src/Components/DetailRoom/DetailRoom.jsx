import React from 'react'
import { BannerHome } from '../Home/Home'
import "./DetailRoom.sass"

const DetailRoom = (props) => {
  return (
    <div className={"detail-room-booking-hotel"} style={{width: "100%"}}>
      <BannerHome />
      <Tab1 />
      <Tab2 />
    </div>
  )
}

export const Tab1= (props)=> {
  return (
    <div className={"tab-1-detail-room-booking-hotel"} style={{marginTop: 20, width: "100%", display: "flex", gap: 20, padding: "0 40px", marginBottom: 30}}>
      <div className={"sejsioeasaw"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <div className={"jskdjkjhireasa"} role={"img"} style={{width: 400, height: 250, background: "#d9d9d9"}}>
        </div>
      </div>
      {/*  */}
      <div className={"jsdkjdkdlhjfas"} style={{}}>
        <div className={"djdklrjioejawa"} style={{fontSize: 24, fontWeight: 600, marginBottom: 16}}>
          Queen's Finger Hotel Da Nang
        </div>
        <div className={"sukfdhkjashas"} style={{marginBottom: 40}}>
          155-157 Le Quang Dao, Ngu Hanh Son, Da Nang, Viet Nam
        </div>
        <div className={"jldjdkljdsawes"} style={{fontSize: 24,fontWeight: 700}}>
          Phòng cao cấp
        </div>
      </div>
    </div>
  )
}

const Tab2= (props)=> {
  return (
    <div className={"tab-2-detail-room-booking-hotel"} style={{width: "100%", display: "flex", justifyContent: 'center', gap: 40, padding: '0 40px'}}>
      <div className={"sldjhlksdjasas"} style={{width: 400, padding: 20, border: "1px solid #000", height: "max-content"}}>
        <div className={"fvjlkjdklsjfdasas"} style={{fontSize: 20, fontWeight: 600, marginBottom: 20}}>
          Thông tin chi tiết đặt phòng
        </div>
        <div className={"jdsijhiorjuhseas"} style={{width: "100%", padding: 10}}>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16}}>
            Ngày vào: 30/10/2022
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, paddingBottom: 10, borderBottom: "1px solid #000"}}>
            Ngày ra: 31/10/2022
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, paddingBottom: 10, borderBottom: "1px solid #000"}}>
            Tổng thời gian lưu trữ: <span className={"dfjhkdjskljdasas "} style={{fontSize: 18}}>1 đêm</span>
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16, paddingBottom: 10, borderBottom: "1px solid #000"}}>
            Phòng đã chọn: <span className={"dfjhkdjskljdasas "} style={{fontSize: 18, fontWeight: 600}}>Phòng cao cấp</span>
          </div>
          <div className={"djlhjflksjdasdsaas"} style={{marginBottom: 16, fontSize: 16}}>
            Tổng giá: 1,968,946 VND
          </div>
        </div>
      </div>
      {/*  */}
      <div className={"djslksajkjfklasa"} style={{width: "calc(100% - 400px)"}}>
        <div className={"dfjkahduashajksas"} style={{width: "100%"}}>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Họ và tên: </div>
            <input type="text" className={"sdjskldjakjask"} style={{width: 300, height: 40, background: "#d9d9d9", padding: 10}} />
          </div>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Nhập số điện thoại liên hệ: </div>
            <input type="text" className={"sdjskldjakjask"} style={{width: 300, height: 40, background: "#d9d9d9", padding: 10}} />
          </div>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Nhập địa chỉ email: </div>
            <input type="text" className={"sdjskldjakjask"} style={{width: 300, height: 40, background: "#d9d9d9", padding: 10}} />
          </div>
          <div className={"fjklasjdkasjksjas"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32}}>
            <div className={"sjkldasjkdjawws"} style={{fontSize: 18, fontWeight: 600}}>Yêu cầu khác: </div>
            <textarea type="text" className={"sdjskldjakjask"} rows={40} style={{width: 300, height: 200, background: "#d9d9d9", padding: 10, fontSize: 16, resize: "none"}} />
          </div>
          <div className={"fjklsajklsjasas"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems :'center', marginBottom: 40}}>
            <button className={"fjksajsdkass"} style={{width: 200, height: 60, border: "none", outline: "none",cursor: "pointer", display: "flex", justifyContent: 'center', alignItems: "center", color: "#000", background: "#2e89ff", fontSize: 20, fontWeight: 700}}>
              Đặt ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailRoom