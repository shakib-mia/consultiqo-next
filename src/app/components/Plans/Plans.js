"use client";

import React, { useState } from "react";
import Switch from "../Switch/Switch";
import { FaCheck } from "react-icons/fa6";
import { LiaCheckSolid, LiaTimesSolid } from "react-icons/lia";
import Button from "../Button/Button";

const Plans = () => {
  const [value, setValue] = useState("Yearly");

  const plans = [
    {
      planName: "Starter",
      price: {
        monthly: "19",
        yearly: "190",
      },
      billing: "billed monthly",
      features: [
        { name: "Commercial License", available: true },
        { name: "100+ HTML UI Elements", available: true },
        { name: "Unlimited Domain Support", available: false },
        { name: "6 Month Premium Support", available: false },
        { name: "Lifetime Updates", available: false },
      ],
      cta: {
        button: "Start Free Trial",
        note: "No credit card required",
      },
    },
    {
      planName: "Standard",
      price: {
        monthly: "49",
        yearly: "490",
      },
      billing: "billed monthly",
      features: [
        { name: "Commercial License", available: true },
        { name: "100+ HTML UI Elements", available: true },
        { name: "Unlimited Domain Support", available: true },
        { name: "6 Month Premium Support", available: true },
        { name: "Lifetime Updates", available: false },
      ],
      cta: {
        button: "Start Free Trial",
        note: "No credit card required",
      },
    },
    {
      planName: "Premium",
      price: {
        monthly: "99",
        yearly: "990",
      },
      billing: "billed monthly",
      features: [
        { name: "Commercial License", available: true },
        { name: "100+ HTML UI Elements", available: true },
        { name: "Unlimited Domain Support", available: true },
        { name: "6 Month Premium Support", available: true },
        { name: "Lifetime Updates", available: true },
      ],
      cta: {
        button: "Start Free Trial",
        note: "No credit card required",
      },
    },
  ];

  return (
    <>
      <div className="flex justify-center mt-12">
        <Switch
          leftLabel="Yearly"
          rightLabel="Monthly"
          onChange={(val) => setValue(val)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {plans.map((plan, key) => (
          <div
            className="bg-white rounded-lg shadow-lg hover:shadow transition p-10"
            key={key}
          >
            <p className="text-sm text-primary font-bold uppercase tracking-widest">
              {plan.planName}
            </p>

            <div className="mt-10 flex items-end">
              <span className="font-bold text-lg">$</span>
              <h1 className="leading-[0.9]">
                {value === "Yearly" ? plan.price.yearly : plan.price.monthly}
                {/* // {value === "Yearly" ? "0" : ""} */}
              </h1>
              <span>/{value === "Yearly" ? "Year" : "Month"}</span>
            </div>

            <div className="mt-3">Billed {value}</div>

            <ul className="my-10 space-y-4">
              {plan.features.map((item, key) => (
                <li className="flex gap-2 items-center" key={key}>
                  {item.available ? (
                    <LiaCheckSolid className="text-green-600" />
                  ) : (
                    <LiaTimesSolid />
                  )}
                  {item.available ? (
                    <p>{item.name}</p>
                  ) : (
                    <del className="text-gray-800">{item.name}</del>
                  )}
                </li>
              ))}
            </ul>

            <Button
              className={
                key !== 1
                  ? "bg-primary-light border-primary-light w-full !text-primary hover:!bg-primary hover:!text-white"
                  : "w-full"
              }
            >
              Start Free Trial
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plans;
