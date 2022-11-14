import React from 'react'
import "./AroundHotel.sass"

const AroundHotel = (props) => {
  return (
    <div className={"ajsjaksjakraew"} style={{width: "100%", padding: "0 40px"}}>
        <div className={"sakskaslkfrawawa"} style={{fontSize: 24, fontWeight: 600, marginBottom: 30}}>
            Xung quanh của khách sạn
        </div>
        <div className={"djsjakjiojawwa"} style={{width: "100%", display: "flex", alignItems: "center", flexWrap: "wrap"}}>
            <PlacePerDistance />
            <PlacePerDistance />
            <PlacePerDistance />
            <PlacePerDistance />
        </div>
    </div>  
  )
}

export const PlacePerDistance= (props)=> {
    return (
        <div className={"ajksajkajkjwawwa"} style={{width: "25%"}}>
            <div className={"sajsaksjkfaaraww"} style={{fontWeight: 600, marginBottom: 20}}>
                Xung quanh có gì
            </div>
            <div className={"daskjaksjakjwiw"} style={{marginBottom: 25, display: "flex", justifyContent: 'space-between', alignItems: "center", width: "100%"}}>
                <div className={"sjksjakjskrjioawjw"}>My Khe Beach Park</div>
                <div className={"djsaskrjauwijwjawa"}>400 m</div>
            </div>
            <div className={"daskjaksjakjwiw"} style={{marginBottom: 25, display: "flex", justifyContent: 'space-between', alignItems: "center", width: "100%"}}>
                <div className={"sjksjakjskrjioawjw"}>My Khe Beach Park</div>
                <div className={"djsaskrjauwijwjawa"}>400 m</div>
            </div>
            <div className={"daskjaksjakjwiw"} style={{marginBottom: 25, display: "flex", justifyContent: 'space-between', alignItems: "center", width: "100%"}}>
                <div className={"sjksjakjskrjioawjw"}>My Khe Beach Park</div>
                <div className={"djsaskrjauwijwjawa"}>400 m</div>
            </div>
        </div>
    )
}

export default AroundHotel