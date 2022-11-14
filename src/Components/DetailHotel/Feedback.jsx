import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {AiFillStar} from "react-icons/ai"

const Feedback = (props) => {
  return (
    <div className={"dskkjskajsakjewa"} style={{width: "100%", marginTop: 20, padding: "0 40px"}}>
        <div className={"djskdjkasjklwawa"} style={{fontSize: 24, fontWeight: 600, marginBottom: 20}}>
            Đánh giá của khách
        </div>
        <div className={"djkajkajkassa"} style={{width: "100%"}}>
            <Swiper
                modules={[Navigation]}
                className="list-nearly-place-suggest"
                navigation={true}
                style={{width: "100%", height: "100%"}}
                breakpoints={{
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                400: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
                }}
            >
                <SwiperSlide>
                    <FeedbackComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackComponent />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Feedback

const FeedbackComponent= (props)=> {
    return (
        <div className={"jksjkalsjdasaw"} style={{width: "100%", marginBottom: 50}}>
            <div className={"fjkajskasjasjkas"} style={{display: "flex", alignItems: "center", gap: 10}}>
                <div className={"dkskalkrleawias"} style={{display: "flex", justifyContent: 'center', alignItems:" center"}}>
                    <div role={"img"} className={"dkaskalskalwsawwaw"} style={{width: 40, height: 40, borderRadius: "50%", background: "#d9d9d9"}}></div>
                </div>
                <div className={"djsasksjkawkwia"}>
                    <div className={"dksasljkjawklajwlakwwa"} style={{marginBottom: 8}}>
                        Nguyễn Văn A
                    </div>
                    <div className={"dkaskaljasjskassa"} style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: 4}}>
                        <AiFillStar style={{color: "orange"}} />
                        <AiFillStar style={{color: "orange"}} />
                        <AiFillStar style={{color: "orange"}} />
                        <AiFillStar style={{color: "orange"}} />
                        <AiFillStar style={{color: "orange"}} />
                    </div>
                </div>
            </div>
            <div className={"dsksakslajkassa"} style={{display: "flex", justifyContent: 'space-between'}}>
                <div className={"djksjaksjaksasasa"}>
                    <div className={"dkskalkrleawias"} style={{display: "flex", justifyContent: 'center', alignItems:" center"}}>
                        <div role={"img"} className={"dkaskalskalwsawwaw"} style={{width: 40, height: 40}}></div>
                    </div>
                </div>
                <div className={"ksjaksjkasjrawa"}>
                    <div className={"dsjjaksjaklsjkalrsawa"} style={{marginTop: 30}}>
                        Khách sạn phục vụ tốt, phòng sạch sẽ, lần sau sẽ quay lại
                    </div>
                    <div className={"djkasjskjakaiwiawwa"} style={{marginTop: 40}}>
                        <div className={"dkaskaljskassasa"} style={{fontWeight: 600, fontSize: 14, cursor: "pointer"}}>
                            Xem thêm
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}