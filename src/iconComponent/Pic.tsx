import * as React from "react";

function SvgPic(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20.64 15.373l-4.121-4.12a.96.96 0 00-1.358 0l-4.121 4.12"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M17.76 20.174H6.24a2.88 2.88 0 01-2.88-2.88V5.774a2.88 2.88 0 012.88-2.88h11.52a2.88 2.88 0 012.88 2.88v11.52a2.88 2.88 0 01-2.88 2.88z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.84 20.174l-6.041-6.041a.959.959 0 00-1.358 0l-4.653 4.653M9.375 8.4a.36.36 0 11-.51.508.36.36 0 01.51-.509"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgPic;
