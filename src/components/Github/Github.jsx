import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=>res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="flex justify-center min-h-full mt-16 mb-7">
            <div class="w-[300px] rounded-md border text-center">
              <img
                src={data.avatar_url}
                class="h-[300px] w-full rounded-full object-cover"
              />
              <div class="p-4">
                <h1 class="text-2xl font-semibold text-black">Ashwani Pandey</h1>
                <p class="mt-3 text-lg bg-gray-600 text-white p-3 rounded-lg">
                  GitHub followers: <span className="text-xl text-center">{data.followers}</span>
                </p>
              </div>
            </div>
        </div>

    )
}


export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/ashwanipydev')
   return response.json()
}