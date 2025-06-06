import { useRef, useEffect } from 'react';
import noUiSlider from 'nouislider';
//import 'nouislider/dist/nouislider.css';
import { Label } from '@headlessui/react';
import './nouislider-custom.css'; // Custom styles for noUiSlider

const RangeSlider = () => {

  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const rangeSliderConfig = {
      start: [1200, 1700],
      range: {
        min: 0,
        max: 4000,
      },
      connect: true,
      pips: {
        mode: 'count',
        values: 5,
      },
      tooltips: true,
      format: {
        to: value => `${Math.round(value)}&nbsp;€`,
        from: value => Number(value.replace('&nbsp;€', '')),
      },
      // Note: CSS classes are usually handled with your own styles in React
    };

    if (sliderRef.current && !sliderRef.current.noUiSlider) {
      noUiSlider.create(sliderRef.current, rangeSliderConfig);
    }

    return () => {
      if (sliderRef.current && sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, []);

  return (
    <div className='border border-gray-300 rounded-lg p-4 bg-white'>
      <Label className="block text-sm/6 font-medium text-black">Platové rozpätie</Label>
      <div ref={sliderRef} className="mb-2 mt-15" />
    </div>
  );
};

export default RangeSlider;