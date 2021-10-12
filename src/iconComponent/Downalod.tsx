import * as React from "react";

function SvgDownalod(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M13 14.334l-1.779-1.778M14.779 12.556L13 14.334M13 8.999v5.335M17.002 15.223v0c0 .982-.796 1.779-1.779 1.779h-4.446A1.779 1.779 0 019 15.223v0"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={13}
        cy={13}
        r={9.004}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDownalod;
