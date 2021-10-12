import * as React from "react";

function SvgWalletCreditCard(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21 9.5v-3A2.5 2.5 0 0018.5 4h-13A2.5 2.5 0 003 6.5V10M21 14.5v3a2.5 2.5 0 01-2.5 2.5H16"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M18.5 9.5H21a1 1 0 011 1v3a1 1 0 01-1 1h-2.5A2.5 2.5 0 0116 12v0a2.5 2.5 0 012.5-2.5v0zM3 15v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 16.5H3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgWalletCreditCard;
