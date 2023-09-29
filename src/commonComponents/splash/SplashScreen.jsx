import React from "react";
import "./splash.css";
import { ThreeCircles } from "react-loader-spinner";

export default function SplashScreen() {
  return (
    <div className="body">
      <div className="loading">
        <div>
          <ThreeCircles
            height="60"
            width="60"
            color="#DEB18A"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      </div>
    </div>
  );
}
