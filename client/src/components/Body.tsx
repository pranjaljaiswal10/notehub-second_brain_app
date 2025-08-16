import axios from "axios";
import { Plus, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

const Body = () => {
  const [list,setList]=useState([])
  async function getData(){
   try {  
   const response=await axios.get(`/contents`,{withCredentials:true}) 
   const data=response.data;
   console.log(data)
   setList(data.data)
   } catch (error) {
    console.log(error)
   }
   
  }
  useEffect(()=>{
  getData()
  },[])


  return (
    <main>
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">All Notes</h1>
        <div>
          <button className="">
            <Share2 /> Share Brain
          </button>
          <button>
            <Plus /> Add Content
          </button>
        </div>
      </div>

    </main>
  );
};

export default Body;
