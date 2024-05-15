export default function DropShadowIcon() {
  return (
    <svg className="lg:w-32 w-12 lg:h-8 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 38" fill="none">
      <g opacity="0.7" filter="url(#filter0_f_95_1024)">
        <ellipse cx="70" cy="19" rx="54" ry="3" fill="black" />
      </g>
      <defs>
        <filter id="filter0_f_95_1024" x="0.1" y="0.1" width="139.8" height="37.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7.95" result="effect1_foregroundBlur_95_1024" />
        </filter>
      </defs>
    </svg>
  );
}
