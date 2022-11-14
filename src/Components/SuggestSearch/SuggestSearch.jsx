import React from 'react'
import { GoLocation} from "react-icons/go"
import "./SuggestSearch.sass"

const SuggestSearch = (props) => {
  const choosePlace= ()=> {
    props.setValue(()=> "Sapa")
    props.setOpen(()=> false)
  }
  return (
    <div className={"suggest-search"} style={{width: "100%", padding: 20, background: "#fff", borderRadius: 5, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div className={"dlksjdakljskdlfasd"} style={{marginBottom: 8, fontWeight: 600, fontSize: 15}}>
            Những địa điểm nổi tiếng gần bạn
        </div>
        <div onClick={choosePlace} className={"item-suggest-search"} style={{width: "100%", display: "flex", alignItems: "center", padding: "10px 0", gap: 10}}>
            <div className={"fjksldjkalsjafadsas"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                <GoLocation style={{width: 26, height: 26, color: "#333"}} />
            </div>
            <div className={"dsjlksjlskjakldfasdsasd"}>
                <div className={"djsjakljdkslfjdassa"} style={{fontSize: 16, fontWeight: 600}}>
                    Sapa
                </div>
                <div className={"djaklsjalksjkldfjkasa"} style={{fontSize: 14, color: "#333"}}>
                    Lao Cai, Viet Nam
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuggestSearch