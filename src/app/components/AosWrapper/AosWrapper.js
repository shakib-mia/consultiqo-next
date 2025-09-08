"use client";

import { useAos } from "@/app/hooks/useAos";
import useLenis from "@/app/hooks/useLenis";
import React from "react";
import "@/app/lib/scrollAnimate";

const AosLenisProvider = ({ children }) => {
  // useAos();
  useLenis();

  return <></>;
};

export default AosLenisProvider;
