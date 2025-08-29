"use client";

import {
  Layout,
  Button,
  Avatar,
  Typography,
  RadioGroup,
  Radio,
  InputNumber,
  Checkbox,
  Divider,
} from "@douyinfe/semi-ui";
import { IconChevronLeft } from "@douyinfe/semi-icons";
import Link from "next/link";
import { useState } from "react";

export default function BoostPage() {
  const { Header, Footer, Content } = Layout;
  const { Title, Text } = Typography;

  const [boostAmount, setBoostAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState<number | undefined>(
    undefined
  );
  const [agreed, setAgreed] = useState(false);
  const [radioValue, setRadioValue] = useState<string | number>(10);

  const handleRadioChange = (e: any) => {
    const value = e.target.value;
    if (value === "other") {
      setBoostAmount(customAmount || 0);
      setRadioValue("other");
    } else {
      setBoostAmount(value);
      setCustomAmount(undefined);
      setRadioValue(value);
    }
  };

  const handleCustomAmountChange = (value: number) => {
    setCustomAmount(value);
    setBoostAmount(value);
    setRadioValue("other");
  };

  const expectedViews = boostAmount * 100; // Example calculation

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
        <Content className="p-6 overflow-y-auto bg-white">
          <div className="flex items-center gap-4 mb-6">
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
                <Avatar
                  size="extra-extra-small"
                  src="https://i.pravatar.cc/32"
                />
                <Text size="small">@username</Text>
              </div>
            </div>
          </div>

          <Divider />

          <div className="my-6">
            <Title heading={6} className="!mb-4">
              How much you want to boost?
            </Title>
            <RadioGroup
              type="card"
              direction="vertical"
              className="w-full"
              onChange={handleRadioChange}
              value={radioValue}
            >
              <Radio value={10} className="!w-full !p-4">
                <div className="flex justify-between w-full">
                  <Text>$10</Text>
                  <Text type="tertiary" className="ml-2">
                    ~1,000 views
                  </Text>
                </div>
              </Radio>
              <Radio value={20} className="!w-full !p-4">
                <div className="flex justify-between w-full">
                  <Text>$20</Text>
                  <Text type="tertiary" className="ml-2">
                    ~2,000 views
                  </Text>
                </div>
              </Radio>
              <Radio value={50} className="!w-full !p-4">
                <div className="flex justify-between w-full">
                  <Text>$50</Text>
                  <Text type="tertiary" className="ml-2">
                    ~5,000 views
                  </Text>
                </div>
              </Radio>
              <Radio value="other" className="!w-full !p-4 items-center">
                <div className="flex justify-between w-full items-center">
                  <Text>Other</Text>
                  <InputNumber
                    formatter={(value) => `${value}`.replace(/\D/g, "")}
                    className="w-24 ml-5"
                    value={customAmount}
                    onNumberChange={handleCustomAmountChange}
                    placeholder="Amount"
                    prefix="$"
                    min={1}
                  />
                </div>
              </Radio>
            </RadioGroup>
          </div>

          <div className="flex justify-between items-center my-4">
            <Text>Total amount:</Text>
            <Title heading={5} className="!mb-0">
              ${boostAmount}
            </Title>
          </div>
          <div className="flex justify-between items-center my-4">
            <Text>Expected number of views increase:</Text>
            <Title heading={5} className="!mb-0">
              ~{expectedViews.toLocaleString()}
            </Title>
          </div>

          <div className="mt-6">
            <Checkbox
              checked={agreed}
              onChange={(e) => setAgreed(Boolean(e.target.checked))}
            >
              I agree to terms and conditions
            </Checkbox>
          </div>
        </Content>
        <Footer className="flex items-center justify-center p-4 bg-white border-t border-gray-200">
          <Button
            theme="solid"
            type="primary"
            className="w-full"
            size="large"
            disabled={!agreed || boostAmount <= 0}
          >
            Proceed
          </Button>
        </Footer>
      </Layout>
    </div>
  );
}
