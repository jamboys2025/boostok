"use client";

import { Layout, Button, Typography, Divider } from "@douyinfe/semi-ui";
import { IconChevronLeft } from "@douyinfe/semi-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";


import VideoDetail from "./components/VideoDetail";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load conditional components with loading spinner
const BoostForm = dynamic(() => import("./components/BoostForm"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

const IneligibleVideoBanner = dynamic(
  () => import("./components/IneligibleVideo"),
  {
    ssr: false,
    loading: () => <LoadingSpinner />,
  }
);

const { Header, Content } = Layout;
const { Title } = Typography;

export default function BoostPage() {
  // You can add logic here to determine if video is eligible
  const [isEligible, setIsEligible] = useState(true);
  const searchParams = useSearchParams();
  const src = searchParams.get("src");
  const username = searchParams.get("username");
  const caption = searchParams.get("caption");  

  useEffect(() => { 
    console.log(src)
    console.log(username)
    console.log(caption)
  }, [src, username, caption]);

  return (
    <div className="flex items-center justify-center p-5 min-h-[calc(100vh-40px)] h-[calc(100vh-40px)] bg-gray-50">
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
        <Header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <Link href="/" passHref>
            <Button icon={<IconChevronLeft />} theme="borderless" />
          </Link>
          <Title heading={5} className="!mb-0">
            Boost Video
          </Title>
          <div style={{ width: 40 }} />
        </Header>
        <Content className="p-6 overflow-y-auto bg-white flex flex-col">
          {/* Debug: toggle eligibility by clicking video detail */}
          <VideoDetail onClick={() => setIsEligible((p) => !p)} />
          <Divider />
          <div className="flex-1">
            {isEligible ? <BoostForm /> : <IneligibleVideoBanner />}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
