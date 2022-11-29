import React, { useEffect, useState } from "react";
import { Title } from "../AdminLevel1/ListHotel";
import { AiOutlineClose } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import get_list_hotel from "../../api/manage/get_list_hotel";
import get_list_request_by_id_hotel from "../../api/manage/get_list_request_by_id_hotel";

const RequestBookingRoom = (props) => {
  const [data, setData]= useState([])
  const [idHotel, setIdHotel]= useState()
  useEffect(()=> {
    get_list_hotel(setData)
  }, [])
  return (
    <div className={"dkaksjakjekeawa"}>
      <Title is_search_by_id_hotel={true} data={data} idHotel={idHotel} setIdHotel={setIdHotel} title={"Yêu cầu đặt phòng"} />
      <ListRequest idHotel={idHotel} />
    </div>
  );
};

const ListRequest = (props) => {
  const [data, setData]= useState([])
  useEffect(()=> {
    if(props?.idHotel) {
      get_list_request_by_id_hotel(setData)
    }
  }, [props?.idHotel])
  return (
    <div
      className={"dkaajkrjaerwlwa"}
      style={{ width: "100%", marginTop: 20, padding: 20 }}
    >
      <table
        className={"fjskljkrlejrkleaw"}
        style={{ width: "100%" , overflowX: "auto"}}
        cellSpacing={20}
      >
        <thead className={"dksjakjdksawkaww"} style={{ width: "100%" }}>
          <tr className={"jakwjkjeaklwwa"}>
            <th style={{ fontWeight: 600 }}>Tên khách hàng</th>
            <th style={{ fontWeight: 600 }}>Số điện thoại</th>
            <th style={{ fontWeight: 600 }}>Loại phòng</th>
            <th style={{ fontWeight: 600 }}>Hình thức thanh toán</th>
            <th style={{ fontWeight: 600 }}>Trạng thái</th>
            <th style={{ fontWeight: 600 }}>Hành động</th>
          </tr>
        </thead>
        <tbody className={"fkkejkjaiwjwawwawa"} style={{ width: "100%" }}>
          {
            data?.map((item, key)=> <tr key={key} className={"jkajksljeklaresas"}>
            <td style={{ textAlign: "center" , whiteSpace: "nowrap"}}>{item?.user_booking}</td>
            <td style={{ textAlign: "center" , whiteSpace: "nowrap"}}>{item?.phone}</td>
            <td style={{ textAlign: "center" , whiteSpace: "nowrap"}}>{item?.room_name}</td>
            <td style={{ textAlign: "center" , whiteSpace: "nowrap"}}>Tiền mặt</td>
            <td style={{ textAlign: "center" , whiteSpace: "nowrap"}}>{item?.booking_status}</td>
            <td style={{ textAlign: "center" , whiteSpace: "nowrap"}}>
              <div
                className={"djskjaksjkafaawe"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <button
                  title={"Chấp nhận"}
                  className={"fjakajkwawawwawa"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                    background: "unset",
                  }}
                >
                  <GoVerified
                    style={{ width: 24, height: 24, color: "#01b853" }}
                  />
                </button>
                <button
                  title={"Từ chối"}
                  className={"fjakajkwawawwawa"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                    background: "unset",
                  }}
                >
                  <AiOutlineClose
                    style={{ width: 24, height: 24, color: "red" }}
                  />
                </button>
              </div>
            </td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default RequestBookingRoom;
