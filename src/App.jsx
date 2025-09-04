import React from "react";
import { Route } from "./components/route/Route";

export const App = () => {
  return (
    <div>
      <svg
        className="absolute -top-full -left-full w-0 h-0 overflow-hidden"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B8D1" />
            <stop offset="100%" stopColor="#005E6B" />
          </linearGradient>
        </defs>
      </svg>
      <linearGradient
        id="gradientStroke"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%"
        gradientUnits="objectBoundingBox" // ເພີ່ມນີ້
      ></linearGradient>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B8D1" />
            <stop offset="100%" stopColor="#005E6B" />
          </linearGradient>
        </defs>
      </svg>
      <svg width="0" height="0">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#00B8D1" />
      <stop offset="100%" stopColor="#005E6B" />
    </linearGradient>
  </defs>
  <path
    d="M3 12h18M3 6h18M3 18h18"
    stroke="url(#grad1)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

      <Route />
    </div>
  );
};
