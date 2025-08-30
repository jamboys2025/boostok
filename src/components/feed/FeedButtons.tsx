import { Heart, MessageCircle, Share2, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

const iconClass = "w-7 h-7 text-white";
const labelClass = "text-sm text-white"
const buttonClass = "flex flex-col items-center bg-transparent border-0";

type VideoCardProps = {
  src: string;
  username: string;
  caption: string;
};

export default function FeedButtons({ src, username, caption }: VideoCardProps) {

  const router = useRouter();
  

  const handleClick = (action: string) => () =>{
    alert(`${action} not implemented!`);
  }

  const direct_to_boost = () => {
    const params = new URLSearchParams({
      src,
      username,
      caption,
    });
    router.push(`/boost?${params.toString()}`);
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
      <button className={`${buttonClass} cursor-pointer`} onClick={() => direct_to_boost()}>
        <Zap className={iconClass} />
        <span className={labelClass}>Boost</span>
      </button>
    </div>
  );
}
