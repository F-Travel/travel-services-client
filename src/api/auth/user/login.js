import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../../config/config"

const login= async (account, password, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/auth/signin`,
        method: "post",
        data: {
            username: account, password
        }
    })
    const result= await res.data
    if(result?.accessToken?.length > 0) {
        Cookies.set("accessToken", result.accessToken)
        Cookies.set("uid", result.id)
        setData("Đăng nhập thành công")
        return window.location.reload()
    }
    else {
        return setData("Tài khoản hoặc mật khẩu không chính xác")
    }
}   

export default login