import React from "react";

const Instagram = props => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-instagram"
    {...props}
  >
    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <path d="M17.5 6.5L17.51 6.5" />
  </svg>
);

export default Instagram;
