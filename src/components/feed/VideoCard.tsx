"use client";
import { Button } from "@douyinfe/semi-ui";
import FeedButtons from "./FeedButtons";

type VideoCardProps = {
  src: string;
  username: string;
  caption: string;
};

export default function VideoCard({ src, username, caption }: VideoCardProps) {
  return (
    <div className="relative h-screen w-full flex flex-col justify-end bg-black">
      <video
        src={src}
        controls
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative p-4 text-white z-10 flex w-full pb-8">
        <div className="content-end w-full pb-8">
        <h3 className="font-bold">@{username}</h3>
        <p>{caption}</p>
        <Button theme="solid" type="tertiary" size="small" className="mt-2">
          Follow
        </Button>
        </div>
        <div className="justify-self-end p-4">
        <FeedButtons />
        </div>
      </div>
    </div>
  );
}
