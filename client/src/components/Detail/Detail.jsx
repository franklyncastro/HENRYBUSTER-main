import React from "react";
// import { useState, useEffect } from 'react'
// import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import getDetailMovie from "../../redux/actions";



const Detail = () => {
    const movies = useSelector(state => state.movies)
  return (
    <div>
        <div>Detail</div>
        <div>{movies}</div>
    </div>
    
  )
}

export default Detail