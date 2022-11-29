import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import search_hotel from '../../api/search/search_hotel'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import "./Search.sass"

const Search = (props) => {
  return (
    <div className={"search-result"}>
      <MainSearch />
    </div>
  )
}

const MainSearch= (props)=> {
  const [result, setResult]= useState(()=> [])
  const [searchParams] = useSearchParams()
   useEffect(()=> {
      search_hotel(searchParams.get("spec"), setResult)
   }, [searchParams])
    return (
      <div className={"main-search-result"} style={{width: "100%", display: "flex", justifyContent: "space-between", padding: 20, gap: 30}}>
        <LeftSide />
        <RightSide result={result} />
      </div>
    )
}



export default Search