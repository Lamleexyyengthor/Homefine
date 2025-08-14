import React from "react";
import { Route } from "./components/route/Route";

export const App = () => {
  return (
    <div>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B8D1" />
            <stop offset="100%" stopColor="#005E6B" />
          </linearGradient>
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00B8D1" />
            <stop offset="100%" stopColor="#005E6B" />
          </linearGradient>
        </defs>
      </svg>

      <Route />
    </div>
  );
};
