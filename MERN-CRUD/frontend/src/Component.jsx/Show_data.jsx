import React, { useEffect, useState } from 'react'
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";

export default function Show_data() {

    let [user , setUser] = useState([])
    let [na , setNa] = useState("")
    let [e , setE] = useState("")
    let [age , setAge] = useState(0)
    let [g , setG] = useState("")
    let [id , setId] = useState("")

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
     
    function setData(a,b,c,d,e){
        setNa(a);
        setE(b);
        setAge(c);
        setG(d);
        setId(e);
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
                <div className="mt-3 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{a.name}</h4>
                            <p className="card-text">{a.email}</p>
                            <button className="btn btn-danger" onClick={()=>delete_record(a._id)}><i className='bi bi-trash'></i></button> &nbsp;
                         <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" onClick={()=>setData(a.name,a.email,a.age,a.gender,a._id)} ><i className='bi bi-pen'></i></button>
                        </div>
                    </div>

                </div>
            ))
        )
    }
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Record</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" className="form-control mt-3" value={na} onChange={((e)=>{setNa(e.target.value)})}/>
        <input type="text" className="form-control mt-3"  value={e} onChange={((e)=>{setE(e.target.value)})}/>
        <input type="text" className="form-control mt-3"   value={age} onChange={((e)=>{setAge(e.target.value)})}/>
       <input type="radio"  name='gender' value="male" onChange={((e)=>{setG(e.target.value)})} checked={g === "male"}/>&nbsp;Male&nbsp;
       <input type="radio"  name='gender' value="female" onChange={((e)=>{setG(e.target.value)})} checked={g === "female"}/>&nbsp;Female&nbsp;
       <input type="radio"  name='gender' value="other" onChange={((e)=>{setG(e.target.value)})} checked={g === "other"}/>&nbsp;Other&nbsp;

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" >Edit</button>
      </div>
    </div>
  </div>
</div>
    </div>

    </div>
  )
}
