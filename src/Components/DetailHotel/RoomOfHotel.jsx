import React, { useEffect, useState } from 'react'
import DetailPopupRoom from './DetailPopupRoom'
import OutsideClickHandler from 'react-outside-click-handler';


const RoomOfHotel = (props) => {
  const [openDetail, setOpenDetail]= useState(()=> false)
  return (
    <div onClick={()=> setOpenDetail(()=> true)} className={"dkslklsaklasa"} style={{width: "100%", marginBottom: 20, display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 20}}>
        <Image />
        <ParametersRoom />
        {
            openDetail=== true &&
            <DetailRoom openDetail={openDetail} setOpenDetail={setOpenDetail} />
        }
    </div>
  )
}

const Image= (props)=> {
    return (
        <div className={"sjjaksjiwjewawa"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <div role={"img"} className={"fkdkjdfkaskaawaw"} style={{width: 250, height: 250, background: "#d9d9d9"}}></div>
        </div>
    )
}

const ParametersRoom= (props)=> {
    return (
        <div className={"fkslkalkrkoawlaw"} style={{flex: 1, padding: 10, backgroundColor: "#d9d9d9", minHeight: 250}}>
            <div className={"ksdaskalsklasasa"} style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>
                Phòng cao cấp
            </div>
            <div className={"dksalsklsjfjassa"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <div className={"djsakdkasjksaksa"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 40}}>
                    <div className={"skafaksdskkasa"}>2 Giường</div>
                    <div className={"fksjkdjskdjskew"}>2 Khách</div>
                </div>
                <div className={"dksakjsaksjkeawwaw"}>3 Phòng trống</div>
            </div>
            <div className={"djksjkjdkasjieawwaw"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <div className={"sdksaskasklasas"}>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Miễn phí bữa sáng</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Wifi miễn phí</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Không hút thuốc</div>
                </div>
                {/*  */}
                <div className={"sdksaskasklasas"}>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Không hoàn tiền</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Không áp dụng đổi lịch</div>
                    <div className={"jrjawjalwlkeawa"} style={{height: 30, margin: "8px 0"}}>Xem chính sách hủy phòng</div>
                </div>
                {/*  */}
                <div className={"sdksaskasklasas"}>
                    <div className={"jrjawjalwlkeawa"} style={{direction: "rtl",height: 30, margin: "8px 0"}}>968.946 VND</div>
                    <div className={"jrjawjalwlkeawa"} style={{direction: "rtl", height: 30, margin: "8px 0"}}>1 / phòng 1 / đêm</div>
                    <div className={"jrjawjalwlkeawa"} style={{direction: "rtl", height: 30, margin: "8px 0"}}>
                        <button className={"cksdsjkasjakeaw"} style={{padding:  10, background: "#fff", color: "#000", fontWeight: 600, fontSize: 20}}>
                            Đặt ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DetailRoom= (props)=> {
    const [transition, setTransition]= useState(()=> false)
    useEffect(()=> {
        const trigger= setTimeout(()=> setTransition(()=> true))
        return ()=> clearTimeout(()=> trigger)
    }, [])
    return (
        <div className={"djasjakljakejaklwwa"} style={{position: "fixed", width: "100%", height: "100%", top: 0, left: 0, background: "rgba(0,0,0,0.3)", display: "flex", justifyContent: "center", zIndex: 9999, overflow: "auto"}}>
            <div className={"dkakawjkajwrwweaw"} style={{opacity: transition=== false ? 0 : 1, transition: "all .25s linear", width: "98%", maxWidth: 1200, background: "#fff", borderRadius: 5, padding: 10}}>
                <OutsideClickHandler onOutsideClick={()=> props.setOpenDetail(()=> false)}>
                    <DetailPopupRoom />
                </OutsideClickHandler>
            </div>
        </div>
    )
}

export default RoomOfHotel