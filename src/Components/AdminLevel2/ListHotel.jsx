import React from 'react'

const ListHotel = (props) => {
  return (
    <div className={"hjfjhdkjlajsaksa"}>
        <Title title={"Danh sách khách sạn của bạn"} is_add_new_hotel={true} />
    </div>
  )
}

export const Title= (props)=> {
    return (
        <div className={"aksdkjasksalasas"} style={{width: "100%", padding: "20px", borderBottom: "1px solid #000", marginBottom: 16}}>
            <div className={"djkdjksjasksjasa"} style={{fontSize: 20, fontWeight: 600}}>
                {props.title}
            </div>
            {
                props.is_add_new_hotel=== true &&
                <div className={"snkdljkasksalsalas"}>
                    <button style={{padding: 10, outline: "none", border: "none", cursor: "pointer", background: "#d9d9d9"}}>
                        Thêm mới khách sạn
                    </button>
                </div>
            }
        </div>
    )
}

export default ListHotel