import React from "react";

const LinkedinCard = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0,0,256,256"
      width="96px"
      height="96px"
      fillRule="none"
      id="linkedincard"
    >
      <title>Linkedin</title>
      <defs>
        <linearGradient
          x1="19"
          y1="24.858"
          x2="19"
          y2="49.041"
          gradientUnits="userSpaceOnUse"
          id="color-1"
        >
          <stop offset="0" stopColor="#60fff8"></stop>
          <stop offset="1" stopColor="#fc038c"></stop>
        </linearGradient>
        <linearGradient
          x1="19.382"
          y1="15.423"
          x2="19.382"
          y2="23.341"
          gradientUnits="userSpaceOnUse"
          id="color-2"
        >
          <stop offset="0" stopColor="#60fff8"></stop>
          <stop offset="1" stopColor="#fc038c"></stop>
        </linearGradient>
        <linearGradient
          x1="37.386"
          y1="14.125"
          x2="37.386"
          y2="49.525"
          gradientUnits="userSpaceOnUse"
          id="color-3"
        >
          <stop offset="0" stopColor="#60fff8"></stop>
          <stop offset="1" stopColor="#fc038c"></stop>
        </linearGradient>
        <linearGradient
          x1="32"
          y1="6.5"
          x2="32"
          y2="57.5"
          gradientUnits="userSpaceOnUse"
          id="color-4"
        >
          <stop offset="0" stopColor="#60fff8"></stop>
          <stop offset="1" stopColor="#fc038c"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        fillRule="none"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
      >
        <g transform="scale(4,4)">
          <path
            d="M22,48v-22h-6v22z"
            fill="url(#color-1)"
            fillRule="evenodd"
          ></path>
          <path
            d="M19.358,23c2.512,0 4.076,-1.474 4.076,-3.554c-0.047,-2.126 -1.564,-3.649 -4.028,-3.649c-2.465,0 -4.076,1.475 -4.076,3.601c0,2.08 1.563,3.602 3.981,3.602h0.047z"
            fill="url(#color-2)"
            fillRule="evenodd"
          ></path>
          <path
            d="M26.946,48h7.054v-12.089c0,-0.648 0.122,-1.295 0.313,-1.758c0.52,-1.295 1.877,-2.635 3.867,-2.635c2.607,0 3.821,1.988 3.821,4.901v11.581h6v-12.412c0,-6.657 -3.085,-9.498 -7.826,-9.498c-3.886,0 -5.124,1.91 -6.072,3.91h-0.103v-4h-7.054c0.095,2 -0.175,22 -0.175,22z"
            fill="url(#color-3)"
            fillRule="evenodd"
          ></path>
          <path
            d="M50,57h-36c-3.859,0 -7,-3.141 -7,-7v-36c0,-3.859 3.141,-7 7,-7h36c3.859,0 7,3.141 7,7v36c0,3.859 -3.141,7 -7,7zM14,9c-2.757,0 -5,2.243 -5,5v36c0,2.757 2.243,5 5,5h36c2.757,0 5,-2.243 5,-5v-36c0,-2.757 -2.243,-5 -5,-5z"
            fill="url(#color-4)"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default LinkedinCard;
