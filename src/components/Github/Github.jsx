import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
// const [data,setData]=useState([])
// useEffect(() => {

//     fetch('https://api.github.com/users/sandhujay')
    
// .then(response=>response.json())
// .then(data=>{
//     console.log(data)
//     setData(data)
// })

// },[])
const data = useLoaderData()
  return (
    <>

    <div className=' text-center m-4 bg-gray-400 p-4 text-white text-xl'> 
    
   
   <h2>User_Name : {data.name}</h2> 
    <h2 className=''>Github Followers : {data.followers}</h2>
    <h2>Github Following : {data.following}
    <img  src={data.avatar_url} alt="Git picture" width={200} height={150} />
    </h2>
   
    </div>
  
    </>
  )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sandhujay')
    return response.json()
}