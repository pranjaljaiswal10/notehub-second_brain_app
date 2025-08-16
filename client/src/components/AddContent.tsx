import { api } from "@/utils/apiclient";
import { useState } from "react";

const AddContent = () => {
  const [contentData, setContentData] = useState({
    title: "",
    link: "",
    type: "",
    tag: "",
  });
   const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try {
      await api.post(`/content`,contentData,{
        withCredentials:true
      }) 
    } catch (error) {
        console.log(error)
    }
   }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Enter content"
            value={contentData.title}
            onChange={(e) =>
              setContentData({ ...contentData, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            placeholder="Enter your link"
            value={contentData.link}
            onChange={(e) =>
              setContentData({ ...contentData, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            id="tag"
            placeholder="Enter list of tag"
            value={contentData.tag}
            onChange={(e) =>
              setContentData({ ...contentData, [e.target.id]: e.target.value })
            }
          />
        </div>
      </form>
    </div>
  );
};

export default AddContent;
