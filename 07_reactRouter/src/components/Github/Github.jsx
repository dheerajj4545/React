import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/dheerajj4545')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='bg-gray-600 text-center text-3xl p-4 m-4'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/dheerajj4545')
    return response.json()
}