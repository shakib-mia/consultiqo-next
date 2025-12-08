"use client";

import { useAos } from "@/app/hooks/useAos";
import useHearthMotion from "@/app/hooks/useHearthMotion";
import useLenis from "@/app/hooks/useLenis";
import React from "react";

const HearthMotionInitializer = () => {
  useLenis();
  useHearthMotion();
  return;
};

export default HearthMotionInitializer;
