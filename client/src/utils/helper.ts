import { api } from "./apiclient"


export const deleteContent=async(id:string)=>{
    try {
        const response=await api.delete(`/content/${id}`,{
            withCredentials:true
        })
        const message=response.data?.message
        return message
    } catch (error) {
       console.log(error) 
    }
}

export const updateContent=async(id:string)=>{
    try {
        const response=await api.put(`content/${id}`)
        const message=response.data?.message
    } catch (error) {
        console.log(error)
    }
}