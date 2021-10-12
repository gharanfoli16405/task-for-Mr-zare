import * as React from "react";

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.5 13.5l5.207-5.207A1 1 0 0020 7.586V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2.586c0 .265.105.52.293.707L9.5 13.5M9.5 13.5v6.249c0 .813.764 1.41 1.553 1.213l2.5-.625a1.25 1.25 0 00.947-1.213V13.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgFilter;
