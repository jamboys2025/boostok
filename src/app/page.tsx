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
    <div className="flex items-center justify-center h-[calc(100vh-40px)] p-5">
      <Layout className="flex flex-col h-[1024px] min-h-[1024px] max-h-[1024px] w-[576px] min-w-[576px] max-w-[576px]">
        <Header style={commonStyle}>Header</Header>
        <Content style={{ height: "100%" }}>Content</Content>
        <Footer style={commonStyle}>Footer</Footer>
      </Layout>
    </div>
  );
}
