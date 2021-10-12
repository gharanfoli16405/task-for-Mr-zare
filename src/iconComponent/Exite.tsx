import * as React from "react";

function SvgExite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M11 19.503V7.614c0-.69-.355-1.33-.94-1.696l-4-2.5C4.728 2.586 3 3.543 3 5.114v11.888c0 .69.355 1.331.94 1.696l4 2.5c1.332.833 3.06-.125 3.06-1.695z"
        stroke="#DF0000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 11.111h6M19 13.111l2-2-2-2M11 19.111h4a2 2 0 002-2v-1M17 6.111v-1a2 2 0 00-2-2H5"
        stroke="#DF0000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgExite;
