import React from 'react'
import { BannerHome} from "../Home/Home"
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import "./Search.sass"

const Search = (props) => {
  return (
    <div className={"search-result"}>
      <BannerHome />
      <MainSearch />
    </div>
  )
}

const MainSearch= (props)=> {
    return (
      <div className={"main-search-result"} style={{width: "100%", display: "flex", justifyContent: "space-between", padding: 20, gap: 30}}>
        <LeftSide />
        <RightSide />
      </div>
    )
}



export default Search