import React from 'react'
import { PlacePerDistance } from './AroundHotel'

const ConvenientAndInfracstructure = (props) => {
  return (
    <div className={"dajsjksjaksasdas"} style={{width: "100%", padding: "0 40px", marginTop: 40}}>
        <div className={"sakskaslkfrawawa"} style={{fontSize: 24, fontWeight: 600, marginBottom: 30}}>
            Tiện nghi và cơ sở vật chất
        </div>
        <div className={"djsjakjiojawwa"} style={{width: "100%", display: "flex", alignItems: "center", flexWrap: "wrap"}}>
            <PlacePerDistance />
            <PlacePerDistance />
            <PlacePerDistance />
            <PlacePerDistance />
            <PlacePerDistance />
            <PlacePerDistance />
            <PlacePerDistance />    
        </div>
    </div>
  )
}

export default ConvenientAndInfracstructure