import { X ,FileText,Link2,Hash} from "lucide-react"


const Sidebar = () => {
  return (
    <div className="max-w-[25%]">
      <ul>
        <li>
          {" "}
          <X />
          Tweets
        </li>
        <li>Videos</li>
        <li>
          <FileText /> Document
        </li>
        <li>
          <Link2 /> Links
        </li>
        <li>
          <Hash /> Tags
        </li>
      </ul>
    </div>
  );
}

export default Sidebar