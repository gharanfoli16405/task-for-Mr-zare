import * as React from "react";

function SvgGroup(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 6.333V7a6 6 0 01-6 6v0a6 6 0 01-6-6v0a6 6 0 016-6h.667"
        stroke="#4B7DF7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M12.805 2.138l-.942-.942a.666.666 0 00-.943 0l-6.111 6.11v1.886h1.885l6.111-6.111a.666.666 0 000-.943v0z"
        stroke="#4B7DF7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.607 4.274l-1.88-1.88"
        stroke="#4B7DF7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgGroup;
