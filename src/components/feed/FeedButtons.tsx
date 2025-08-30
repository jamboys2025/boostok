import { Heart, MessageCircle, Share2, Zap } from "lucide-react";

const iconClass = "w-7 h-7 text-white";
const labelClass = "text-sm text-white"
const buttonClass = "flex flex-col items-center bg-transparent border-0";

export default function FeedButtons() {
  

  const handleClick = (action: string) => () =>{
    alert(`${action} not implemented!`);
  }

  return (
    <div className="flex flex-col justify-self-end space-y-4 mr-2">
      <button className={buttonClass} onClick={handleClick("Like")}>
        <Heart className={iconClass} />
        <span className={labelClass}>Like</span>
      </button>
      <button className={buttonClass} onClick={handleClick("Comment")}>
        <MessageCircle className={iconClass} />
        <span className={labelClass}>Comment</span>
      </button>
      <button className={buttonClass} onClick={handleClick("Share")}>
        <Share2 className={iconClass} />
        <span className={labelClass}>Share</span>
      </button>
      <button className={`${buttonClass} cursor-pointer`} onClick={handleClick("Boost")}>
        <Zap className={iconClass} />
        <span className={labelClass}>Boost</span>
      </button>
    </div>
  );
}
