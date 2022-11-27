import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const get_list_request_by_id_hotel = async(setData) => {
    const res= await axios({
        url: SERVER_URL+ "/api/booking/list-request/5",
        method: "get",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        }
    })
    const result= await res.data
    return setData(result)
}

export default get_list_request_by_id_hotel
