import { useRef, useEffect } from 'react';
import noUiSlider from 'nouislider';

const RangeSlider = () => {


  return (
    <div data-hs-range-slider='{
  "start": [1200, 1700],
  "range": {
    "min": 0,
    "max": 4000
  },
  "connect": true,
  "pips": {
    "mode": "count",
    "values": 5
  },
  "tooltips": true,
  "formatter": {
    "type": "integer",
    "prefix": "€"
  },
  "cssClasses": {
    "target": "relative h-2 mb-10 rounded-full bg-gray-100 dark:bg-neutral-700",
    "base": "size-full relative z-1",
    "origin": "absolute top-0 end-0 size-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 size-4.5 bg-white border-4 border-blue-600 rounded-full cursor-pointer translate-x-2/4 -translate-y-2/4 dark:border-blue-500",
    "connects": "relative z-0 size-full rounded-full overflow-hidden",
    "connect": "absolute top-0 end-0 z-1 size-full bg-blue-600 origin-[0_0] dark:bg-blue-500",
    "touchArea": "absolute -inset-1",
    "tooltip": "bg-white border border-gray-200 text-sm text-gray-800 py-1 px-2 rounded-lg mb-3 absolute bottom-full start-2/4 -translate-x-2/4 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white",
    "pips": "relative w-full h-10 mt-1",
    "value": "absolute top-4 -translate-x-2/4 text-sm text-gray-400 dark:text-neutral-500",
    "marker": "absolute border-s border-gray-400 dark:border-neutral-500",
    "markerNormal": "h-2",
    "markerLarge": "h-4"
  }
}'></div>
  );
};

export default RangeSlider;