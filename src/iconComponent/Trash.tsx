import * as React from "react";

function SvgTrash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4v8.5c0 .829-.685 1.5-1.513 1.5h-5A1.489 1.489 0 014 12.5V4M13 4H3M6.668 2h2.667M9.333 6.667v4.667M6.665 11.334V6.667"
        stroke="#C13430"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTrash;
