"use client";

import { Layout, Typography, Button } from "@douyinfe/semi-ui";
import { IconChevronLeft, IconTickCircle } from "@douyinfe/semi-icons";
import Link from "next/link";

export default function BoostResultPage() {
  const { Content, Header } = Layout;
  const { Title, Text } = Typography;

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
            Boost Successful
          </Title>
          <div style={{ width: 40 }} />
        </Header>
        <Content className="flex flex-col items-center justify-center text-center bg-white">
          <IconTickCircle
            style={{ fontSize: 64, color: "var(--semi-color-success)" }}
          />
          <Title heading={3} className="!mt-6 !mb-2">
            Success
          </Title>
          <Text type="secondary" className="mb-8">
            The video is now being boosted.
          </Text>
          <Link href="/" passHref>
            <Button type="primary" theme="solid" size="large">
              Back to Home
            </Button>
          </Link>
        </Content>
      </Layout>
    </div>
  );
}
