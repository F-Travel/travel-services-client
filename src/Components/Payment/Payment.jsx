import React from 'react'

const Payment = (props) => {
  return (
    <div className={"payment-site"} style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <div className={"c-payment-site"} style={{width: "100%", padding: 30}}>
            <div className={"g-payment-site"} style={{width: "100%", background: "#d9d9d9", padding: "50px 30px"}}>
                <Title title={"Thanh toán"} />
                <MainDetail />
            </div>
        </div>
    </div>
  )
}

const Title= (props)=> {
    return (
        <div className={"title-payment-site"} style={{fontSize: 24, marginBottom: 24}}>
            {props?.title}
        </div>
    )
}

const MainDetail= (props)=> {
    return (
        <div className={"main-detail-payment-site"} style={{width: "100%", display: "flex", justifyContent:" center", alignItems:" center", padding: 20}}>
            <div className={"main-detail-payment-site-c"} style={{width: "100%", maxWidth: 700}}>
                {/*  */}
                <div className={"main-detail-payment-site-c-1"} style={{display:" flex", justifyContent:"space-between", alignItems: "center", marginBottom: 40}}>
                    <div className={"w-img-payment-site-c-1"} style={{display:" flex", justifyContent: 'center', alignItems: "center"}}>
                        <div role={"img"} style={{width: 420, height: 340, objectFit: "cover", background: "#fff"}}>

                        </div>
                    </div>
                    <div className={"main-detail-payment-site-c-1-1"}>
                        <div className={"element-detail-payment-site-c-1-1"} style={{fontSize: 20, marginBottom: 16}}>
                            Tên khách sạn: 
                        </div>
                        <div className={"element-detail-payment-site-c-1-1"} style={{fontSize: 20, marginBottom: 16}}>
                            Địa chỉ: 
                        </div>
                        <div className={"element-detail-payment-site-c-1-1"} style={{fontSize: 20, marginBottom: 16}}>
                            Ngày vào: 
                        </div>
                        <div className={"element-detail-payment-site-c-1-1"} style={{fontSize: 20, marginBottom: 16}}>
                            Ngày ra: 
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className={"list-ab-room-1"} style={{width: "100%"}}>
                    <div className={"ele-list-ab-room-1"} style={{width: "100%", height: 50, borderBottom: "1px solid #000", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", marginBottom: 12}}>
                        <div className={"ele-list-ab-room-1-1"}>Loại phòng</div>
                        <div className={"ele-list-ab-room-1-2"}>Phòng đôi</div>
                    </div>
                    <div className={"ele-list-ab-room-1"} style={{width: "100%", height: 50, borderBottom: "1px solid #000", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", marginBottom: 12}}>
                        <div className={"ele-list-ab-room-1-1"}>Tiền phòng</div>
                        <div className={"ele-list-ab-room-1-2"}>1.000.000đ</div>
                    </div>
                    <div className={"ele-list-ab-room-1"} style={{width: "100%", height: 50, borderBottom: "1px solid #000", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", marginBottom: 12}}>
                        <div className={"ele-list-ab-room-1-1"}>Dịch vụ bổ sung</div>
                        <div className={"ele-list-ab-room-1-2"}>0</div>
                    </div>
                    <div className={"ele-list-ab-room-1"} style={{width: "100%", height: 50, borderBottom: "1px solid #000", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", marginBottom: 12}}>
                        <div className={"ele-list-ab-room-1-1"}>Chi phí khác</div>
                        <div className={"ele-list-ab-room-1-2"}>0đ</div>
                    </div>
                    <div className={"ele-list-ab-room-1"} style={{width: "100%", height: 50, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", marginBottom: 12}}>
                        <div className={"ele-list-ab-room-1-1"}>Tổng</div>
                        <div className={"ele-list-ab-room-1-2"}>1.000.000đ</div>
                    </div>
                    <div className={"ele-list-ab-room-1"} style={{width: "100%", height: 50, display: "flex", alignItems: "center", padding: "10px", marginBottom: 12, gap: 30}}>
                        <div className={"ele-list-ab-room-1-1"} style={{width: 24, height: 24, }}>
                            <input type="radio" name="typepay" style={{width: "100%", height: "100%"}} />
                        </div>
                        <div className={"ele-list-ab-room-1-2"}>Thanh toán bằng VNPAY</div>
                    </div>
                    <div className={"ele-list-ab-room-1"} style={{width: "100%", height: 50, display: "flex", alignItems: "center", padding: "10px", marginBottom: 12, gap: 30}}>
                    <div className={"ele-list-ab-room-1-1"} style={{width: 24, height: 24, }}>
                            <input type="radio" name="typepay" style={{width: "100%", height: "100%"}} />
                        </div>
                        <div className={"ele-list-ab-room-1-2"}>Thanh toán bằng tiền mặt</div>
                    </div>
                    <div className={"confirm-pay-x"} style={{width:" 100%", display: "flex", justifyContent:" center", alignItems: "center", marginTop: 30}}>
                        <button className={"btn-confirm-pay-x"} style={{width: 300, height: 60, border: "none", outline: "none", background: "#fff", color:" #2BC006", cursor: "pointer", fontSize: 18,}}>Xác nhận thanh toán</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment