import * as React from "react";

function SvgUser(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11 10.25a3.37 3.37 0 01-3.36-3.36h-1.5A4.87 4.87 0 0011 11.75v-1.5zM7.64 6.89C7.64 5.036 9.16 3.5 11 3.5V2C8.317 2 6.14 4.221 6.14 6.89h1.5zM11 3.5a3.37 3.37 0 013.36 3.36h1.5A4.87 4.87 0 0011 2v1.5zm3.36 3.36c0 1.855-1.52 3.39-3.36 3.39v1.5c2.683 0 4.86-2.221 4.86-4.89h-1.5zm3.056 11.64H4.583V20h12.833v-1.5zm-12.833 0a.17.17 0 01-.167-.167h-1.5A1.67 1.67 0 004.583 20v-1.5zm-.167-.167v-.916h-1.5v.916h1.5zm0-.916A2.927 2.927 0 017.333 14.5V13a4.427 4.427 0 00-4.417 4.417h1.5zM7.333 14.5h7.333V13H7.333v1.5zm7.333 0a2.927 2.927 0 012.917 2.917h1.5A4.427 4.427 0 0014.667 13v1.5zm2.917 2.917v.916h1.5v-.916h-1.5zm0 .916a.17.17 0 01-.166.167V20a1.67 1.67 0 001.666-1.667h-1.5z"
        fill="#5D6F7E"
      />
    </svg>
  );
}

export default SvgUser;
