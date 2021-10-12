import * as React from "react";

function SvgEditRegister(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M6.879 1.385H2.306A1.306 1.306 0 001 2.69v9.145a1.306 1.306 0 001.306 1.306h9.145a1.307 1.307 0 001.306-1.306V7.264"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.67 1.416a1.386 1.386 0 111.96 1.96L6.422 9.58l-2.613.65.653-2.61 6.206-6.205z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgEditRegister;
