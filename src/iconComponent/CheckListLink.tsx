import * as React from "react";

function SvgCheckListLink(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.998 4.997h-2a2 2 0 00-2.001 2v12.006a2 2 0 002 2H9"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={7.999}
        y={2.997}
        width={8.003}
        height={4.002}
        rx={1}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.002 4.997h2a2 2 0 012.001 2V12M15.001 21.004A3.003 3.003 0 0112 18.003v0A3.003 3.003 0 0115.001 15M18.003 15.002c1.657 0 3 1.344 3 3v0a3.003 3.003 0 01-3 3.002M15.002 18.003h3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgCheckListLink;
