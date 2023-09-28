import React from "react";
import { CommonStyleLoader } from "./CommonStyleLoader";

import { ThreeCircles } from "react-loader-spinner";

export default function CommonTableLoader() {
  return (
    <CommonStyleLoader.LoaderContainer>
      <ThreeCircles
        height="60"
        width="60"
        color="tomato"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </CommonStyleLoader.LoaderContainer>
  );
}
