"use client";

import {
  Button,
  RadioGroup,
  Radio,
  InputNumber,
  Checkbox,
  Typography,
} from "@douyinfe/semi-ui";
import { useState } from "react";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function BoostForm() {
  const router = useRouter();
  const [boostAmount, setBoostAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState<number | undefined>(
    undefined
  );
  const [agreed, setAgreed] = useState(false);
  const [radioValue, setRadioValue] = useState<string | number>(10);

  const [proceedLoading, setProceedLoading] = useState(false);

  const searchParams = useSearchParams();
  const src = searchParams.get("src");
  const username = searchParams.get("username");
  const caption = searchParams.get("caption");  

  const handleRadioChange = (e: any) => {
    const value = e.target.value;
    if (value === "other") {
      setBoostAmount(customAmount || 0);
      setRadioValue("other");
    } else {
      setBoostAmount(value);
      setRadioValue(value);
      setCustomAmount(undefined);
    }
  };

  const handleCustomAmountChange = (value: number) => {
    setBoostAmount(value);
    setRadioValue("other");
    setCustomAmount(value);
  };

  const handleProceed = () => {
    if (!src || !username || !caption) {
      // Handle missing data case
      localStorage.setItem("boostData", JSON.stringify({ src, username, caption }));

      return;
    }

    setProceedLoading(true);
    // wait
    
    setTimeout(() => {
      // Here you would typically handle the payment processing.
      // After successful payment, navigate to the result page.
      router.push("/boost/result");
    }, 500);
  };

  const expectedViews = boostAmount * 100; // Example calculation

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
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
                  formatter={(value) => `${value}`.replace(/\\D/g, "")}
                  className="ml-5 w-36"
                  value={customAmount}
                  onNumberChange={handleCustomAmountChange}
                  placeholder="Amount"
                  prefix="$"
                  min={1}
                  max={500}
                />
              </div>
            </Radio>
          </RadioGroup>
        </div>

        <div className="flex justify-between items-center my-4">
          <Text weight={600}>Total amount:</Text>
          <Title heading={5} className="!mb-0">
            ${boostAmount}
          </Title>
        </div>
        <div className="flex justify-between items-center my-4">
          <Text weight={600}>Expected number of views increase:</Text>
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
      </div>

      <div className="mt-auto pt-4">
        <Button
          theme="solid"
          type="primary"
          className="w-full"
          size="large"
          disabled={!agreed || boostAmount <= 0}
          onClick={handleProceed}
          loading={proceedLoading}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}
