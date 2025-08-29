"use client";

import { Layout } from "@douyinfe/semi-ui";

export default function Home() {
  const { Header, Footer, Content } = Layout;

  const commonStyle = {
    height: 64,
    maxWidth: "100%",
    background: "var(--semi-color-fill-0)",
  };

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
        <Header style={commonStyle}>Header</Header>
        <Content style={{ height: "100%" }}>Content</Content>
        <Footer style={commonStyle}>Footer</Footer>
      </Layout>
    </div>
  );
}
