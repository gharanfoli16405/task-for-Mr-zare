import * as React from "react";

function SvgSqure(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={12} height={12} rx={4} fill="#EAEEF3" />
      <rect x={2} y={2} width={8} height={8} rx={2} fill="#4B7DF7" />
    </svg>
  );
}

export default SvgSqure;
