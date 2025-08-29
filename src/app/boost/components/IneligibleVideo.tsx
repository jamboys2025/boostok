"use client";

import { Banner } from "@douyinfe/semi-ui";

export default function IneligibleVideoBanner() {
  return (
    <Banner
      type="danger"
      description="This video is ineligible for boosting."
      className="mt-6"
      closeIcon={null}
    />
  );
}
