import React, { useEffect, useState } from 'react'
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";

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

    async function delete_record(id){
        try {
            if (window.confirm("Are You sure You want to delete this record..?")) {
                await axios.delete(`http://localhost:3001/gym/getuser/${id}`).then(()=>{
                    toast.dark("Record Deleted Successfully")
                    dataaya();
                })
            }
            
        } catch (error) {
            toast.error(error.response.data.msg)
            
        }
    }

  return (
    <div className="container">
        <ToastContainer/>
    <h1>User Records</h1>
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
                            <button className="btn btn-danger" onClick={()=>delete_record(a._id)}><i className='bi bi-trash'></i></button>
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
