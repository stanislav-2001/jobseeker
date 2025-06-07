import { useRef, useEffect, useState } from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { Label } from '@headlessui/react';
import './nouislider-custom.css'; // Custom styles for noUiSlider

const RangeSlider = () => {

  const sliderRef = useRef(null);
  const [sliderValues, setSliderValues] = useState([1200, 1700]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const rangeSliderConfig = {
      start: [1200, 1700],
      range: {
        min: 0,
        max: 4000,
      },
      connect: true,
      format: {
        to: value => `${Math.round(value)} €`,
        from: value => Number(value.replace(' €', '')),
      },
      // Note: CSS classes are usually handled with your own styles in React
    };

    if (sliderRef.current && !sliderRef.current.noUiSlider) {
      noUiSlider.create(sliderRef.current, rangeSliderConfig);
    }

    sliderRef.current.noUiSlider.on('update', (values) => {
        setSliderValues([values[0], values[1]]);
    });

    return () => {
      if (sliderRef.current && sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, []);

  return (
    <div className='border border-gray-300 rounded-lg p-4 bg-white'>
      <Label className="block text-sm/6 font-medium text-black">Platové rozpätie</Label>
      <Label className="text-sm/6 text-gray-500 mb-2">
        Od {sliderValues[0]} do {sliderValues[1]}.
      </Label>
      <div ref={sliderRef} className="mb-2 mt-6" />
    </div>
  );
};

export default RangeSlider;