import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Show_data() {

    let [user , setUser] = useState([])

    useEffect(()=>{
        dataaya()
    }, [])

    async function dataaya(){
        try {
            await axios.get("http://localhost:3001/gym/getuser").then((a)=>{
            console.log(a.data)
            setUser(a.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="container">
    <h1>Show_data</h1>
    <div className="row">
        {user.length === 0 ? 
        (
            <p>No record found </p>
        ):(
            user.map((a)=>(
                <div className="mt-3 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{a.name}</h4>
                            <p className="card-text">{a.email}</p>
                        </div>
                    </div>

                </div>
            ))
        )
    }
    </div>

    </div>
  )
}
