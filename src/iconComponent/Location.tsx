import * as React from "react";

function SvgLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M4.7 9.208V9.05a6.3 6.3 0 016.3-6.3v0a6.3 6.3 0 016.3 6.3v.158c0 3.172-4.017 7.948-5.636 9.745a.892.892 0 01-1.329 0C8.717 17.156 4.7 12.381 4.7 9.208z"
        stroke="currentColor"
        strokeWidth={1.447}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.166 9.125c0 1.013.82 1.834 1.834 1.834v0c1.013 0 1.833-.82 1.833-1.834v-.034c0-1.013-.82-1.833-1.833-1.833v0c-1.013 0-1.834.82-1.834 1.833"
        stroke="currentColor"
        strokeWidth={1.447}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLocation;
