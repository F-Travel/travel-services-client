import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ButtonTemplate from '../BannerLoginAndSignup/ButtonTemplate'
import "./RightSide.sass"
import validUrl from "valid-url"

const RightSide = (props) => {
  return (
    <div className={"right-side-search"} style={{width: "calc(100% - 300px)"}}>
        <CountResultSearch {...props} />
        <SortResult {...props} />
        {
            props?.result?.map((item, key)=> <ListResultSearch key={key} {...item} />)
        }
    </div>
  )
}

const CountResultSearch= (props)=> {
    const [searchParams]= useSearchParams() 

    return (
        <div className={"count-result-search-booking"} style={{marginBottom: 30}}>
           {searchParams?.get("spec")}: tìm thấy <strong>{props?.result?.length}</strong> chỗ nghỉ
        </div>
    )
}

const SortResult= (props)=> {
    return (
        <div className={"sort-result-search-booking"} style={{width: 100, height: 30, borderRadius: 80, display: "flex", alignItems:" center", marginBottom: 16}}>
            Sắp xếp theo
        </div>
    )
}

const ListResultSearch= (props)=> {
    const navigate= useNavigate()

    return (
        <div className={"list-result-search"} style={{width: "100%", cursor :"pointer"}} onClick={()=> navigate("/hotel/detail/"+ props?.id)}>
            <div className={"list-result-search-element"} style={{width: "100%", padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: 5, overflow: "hidden", marginBottom: 24}}>
                {/*  */}
                <div className={"list-result-search-element-l"} style={{display: "flex", justifyContent: 'center', gap: 16}}>
                    {/*  */}
                    <div className={"list-result-search-element-l-wrap-img"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <div className={"dosjkalkjfslkjdakds"} role={"img"} style={{width: 350, aspectRatio: 1 / 1, objectFit: "cover", background: "#d9d9d9", borderRadius: 5, overflow: "hidden"}}>
                            <img src={validUrl.isUri(props.image) ? props.image : "https://images.trvl-media.com/hotels/19000000/18470000/18468600/18468569/ac482033.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium"} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                        </div>
                    </div>
                    {/*  */}
                    <div className={"list-result-search-element-l-wrap-i"} style={{display: "flex", justifyContent: "space-between", flexDirection: "column", height: 350}}>
                        {/*  */}
                        <div className={"list-result-search-element-l-wrap-i-1"}>
                            <div className={"list-result-search-element-l-wrap-i-1-name-hotel"} style={{fontSize: 21, fontWeight: 700, marginBottom: 30}}>
                                {props.title}
                            </div>
                            <div className={"list-result-search-element-l-wrap-i-1-desc-hotel"} style={{marginBottom: 8, maxWidth: 400}}>
                                {props.description}
                            </div>
                        </div>
                        {/*  */}
                        <div className={"list-reuslt-search-element-l-wrap-i-2"}>
                            <div className={"list-reuslt-search-element-l-wrap-i-2-1"} style={{color: "#2BC006", fontSize: 12, fontWeight: 700, marginBottom: 20}}>
                                Miễn phí hủy phòng, không cần thanh toán trước
                            </div>
                            <div className={"list-reuslt-search-element-l-wrap-i-2-2"} style={{color: "#000", fontSize: 10, fontWeight: 400}}>
                                Bạn có thể hủy sau, nên hãy đặt ngay hôm nay để được giá tốt
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {/*  */}
                <div className={"list-result-search-element-r"} style={{display: "flex", justifyContent: "space-between", height: 350, flexDirection: "column"}}>
                    {/*  */}
                    <div className={"list-result-search-element-r-1"} style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: 20}}>
                        {/*  */}
                        <div className={"list-result-search-element-r-1-1"} style={{display: "flex", justifyContent: "end", flexDirection: "column", direction: "rtl"}}>
                            <div className={"list-result-search-element-r-1-1-1"} style={{fontSize: 16}}>
                                Rất tốt
                            </div>
                            <div className={"list-result-search-element-r-1-1-2"} style={{fontSize: 14}}>
                                564 đánh giá
                            </div>
                        </div>
                        {/*  */}
                        <div className={"list-result-search-element-r-1-2"} style={{width: 50, height: 50, display: "flex",justifyContent: 'center', alignItems: "center", background: "#2e89ff", color: "#fff", fontSize: 18, fontWeight: 700}}>
                            {parseFloat(props?.start_point)?.toFixed(2) || "Unset"}
                        </div>
                    </div>
                    {/*  */}
                    <div className={"list-result-search-element-r-2"}>
                        <div className={"list-result-search-element-r-2-1"} style={{fontSize: 14, marginBottom: 20, direction: "rtl"}}>
                            VND {props?.price}
                        </div>
                        <div className={"list-result-search-element-r-2-2"}>
                            <div className={"wrap-button-list-reuslt-search-element-r-2-1"} style={{width: 200, height: 60, background: "#fff", color: "#fff"}}>
                                <ButtonTemplate onClick={()=> {}} className={"btn-button-list-reuslt-search-element-r-2-1"}>
                                    Đặt ngay
                                </ButtonTemplate>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    )
}



export default RightSide