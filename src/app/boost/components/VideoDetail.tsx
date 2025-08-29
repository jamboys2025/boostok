"use client";

import { Avatar, Typography } from "@douyinfe/semi-ui";

const { Title, Text } = Typography;

export default function VideoDetail({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex items-center gap-4 mb-6" onClick={onClick}>
      <div className="w-24 h-36 bg-gray-200 rounded-md flex items-center justify-center">
        <Text size="small" className="text-gray-500">
          Video
        </Text>
      </div>
      <div className="flex flex-col">
        <Title heading={6} className="!mb-2">
          My Awesome Video Title
        </Title>
        <div className="flex items-center gap-2">
          <Avatar size="extra-extra-small" src="/dy-min.png" />
          <Text size="small">@username</Text>
        </div>
      </div>
    </div>
  );
}
