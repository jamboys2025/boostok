"use client";

import { Spin } from "@douyinfe/semi-ui";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4 min-h-[200px]">
      <Spin size="large" />
    </div>
  );
}
