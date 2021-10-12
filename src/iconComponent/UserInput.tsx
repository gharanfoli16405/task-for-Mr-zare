import * as React from "react";

function SvgUserInput(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={25.5} cy={25.5} r={25.5} fill="#20A471" />
      <circle
        cx={25.5}
        cy={25.5}
        r={19.5}
        fill="#20A471"
        stroke="#fff"
        strokeWidth={4}
      />
    </svg>
  );
}

export default SvgUserInput;
