"use client";

import { Avatar, Typography } from "@douyinfe/semi-ui";
import { useSearchParams } from "next/navigation";

const { Title, Text } = Typography;

export default function VideoDetail({ onClick }: { onClick: () => void }) {
  const searchParams = useSearchParams();
  const src = searchParams.get("src");
  const username = searchParams.get("username");
  const caption = searchParams.get("caption");
  console.log({ src, username, caption });

  return (
    <div className="flex items-center gap-4 mb-6" onClick={onClick}>
      {src ? (
        <video
          src={src}
          className="w-24 h-36 rounded-md object-cover"
          autoPlay={false}
          muted
          controls={false}
        />
      ) : (
        <div className="w-24 h-36 bg-gray-200 rounded-md flex items-center justify-center">
          <Text size="small" className="text-gray-500">
            Video
          </Text>
        </div>
      )}
      <div className="flex flex-col">
        <Title heading={6} className="!mb-2">
          {caption || "My Awesome Video Title"}
        </Title>
        <div className="flex items-center gap-2">
          <Avatar size="extra-extra-small" src="/dy-min.png" />
          <Text size="small">@{username || "username"}</Text>
        </div>
      </div>
    </div>
  );
}
