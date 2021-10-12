import * as React from "react";

function SvgBasketCheckmarkCircleDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M13 20.942a8.14 8.14 0 01-1 .062A9.004 9.004 0 1121.004 12c0 .335-.021.669-.062 1M19 17v4.002M17 19l2 2.002L21.003 19"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.049 10.25h6.403l-.7 3.5H9.748l-1-5.001h-1.25M14.286 16.216a.05.05 0 11-.07.071.05.05 0 01.07-.07M10.285 16.216a.05.05 0 11-.07.071.05.05 0 01.07-.07"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBasketCheckmarkCircleDown;
