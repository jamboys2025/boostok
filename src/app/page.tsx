"use client";

import { Button, Input, Select } from "@douyinfe/semi-ui";

export default function Home() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Semi UI + Tailwind
        </h1>

        <div className="space-y-4">
          <Button className="w-full" type="primary">
            主要按钮
          </Button>
          <div>
            <Button>Primary Button</Button>
            <Button type="secondary">Secondary Button</Button>
            <Button type="tertiary">Tertiary Button</Button>
            <Button type="warning">Warning Button</Button>
            <Button type="danger">Danger Button</Button>
          </div>

          <Input placeholder="输入内容" className="w-full" />

          <Select
            placeholder="选择选项"
            className="w-full"
            optionList={[
              { value: "1", label: "选项1" },
              { value: "2", label: "选项2" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
