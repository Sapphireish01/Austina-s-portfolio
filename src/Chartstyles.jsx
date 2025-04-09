// src/styles/ChartStyles.js
import React from 'react';
import { Global } from '@emotion/react';

const ChartStyles = () => (
  <Global
    styles={`
      .recharts-wrapper tspan {
        font-size: 18px;
      }

      @media (max-width: 768px) {
        .recharts-wrapper tspan {
          font-size: 10px;
        }
      }

      @media (max-width: 375px) {
        .recharts-wrapper tspan {
          font-size: 8px;
        }
      }
    `}
  />
);

export default ChartStyles;
