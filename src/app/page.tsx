"use client";

import { Layout } from "@douyinfe/semi-ui";
import VideoList from "@/components/feed/VideoList";
import { useEffect, useState } from "react";

export default function Home() {
  const { Header, Footer, Content } = Layout;

  const commonStyle = {
    height: 64,
    maxWidth: "100%",
    background: "var(--semi-color-fill-0)",
  };

  const [boostData, setBoostData] = useState<{
    src: any;
    username: any;
    caption: any;
  } | null>(null);

  const [videos, setVideos] = useState([
    {
      src: "https://cdn.pixabay.com/video/2025/08/12/296958_tiny.mp4",
      username: "user1",
      caption: "Check out this awesome clip!",
    },
    {
      src: "https://cdn.pixabay.com/video/2024/05/06/210905_tiny.mp4",
      username: "user2",
      caption: "Another fun moment 🎵",
    },
    {
      src: "https://cdn.pixabay.com/video/2024/08/30/228847_tiny.mp4",
      username: "user1",
      caption: "Check out this awesome clip!",
    },
    {
      src: "https://cdn.pixabay.com/video/2024/11/09/240570_tiny.mp4",
      username: "user1",
      caption: "Check out this awesome clip!",
    },
    {
      src: "https://cdn.pixabay.com/video/2023/02/09/149899-797491517_tiny.mp4",
      username: "user1",
      caption: "Check out this awesome clip!",
    },
  ]);

  useEffect(() => {
    const stored = localStorage.getItem("boostData");
    console.log(stored);
    if (stored) {
      const parsed = JSON.parse(stored);

      setBoostData(parsed);
      // Move boostData video to top of videos array
      setVideos((prev) => {
        // remove it first if it already exists in the array
        const filtered = prev.filter((v) => v.src !== parsed.src);
        return [parsed, ...filtered];
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center p-5 min-h-[calc(100vh-40px)] h-[calc(100vh-40px)]">
      <Layout
        className="
      flex flex-col
      w-full h-full
      min-w-full min-h-full
      max-w-full max-h-full
      sm:w-[576px] sm:h-[1024px]
      sm:min-w-[576px] sm:min-h-[1024px]
      sm:max-w-[576px] sm:max-h-[1024px]
      shadow-lg rounded-xl
      overflow-hidden
    "
      >
        <Content style={{ height: "100%" }}>
          <VideoList videos={videos} />
        </Content>
      </Layout>
    </div>
  );
}
