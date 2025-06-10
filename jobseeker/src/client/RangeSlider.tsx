import { useRef, useEffect, useState } from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { Label } from '@headlessui/react';
import './nouislider-custom.css'; // Custom styles for noUiSlider


interface RangeSliderProps {
    value: [number, number];
    onValueChange: (name: string, value: [number, number]) => void;
  }

const RangeSlider: React.FC<RangeSliderProps> = ({ value, onValueChange }) => {
    const sliderRef = useRef<any>(null);

    const [sliderValue, setSliderValue] = useState<[number, number]>(value);
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
        to: (value: number) => `${Math.round(value)} €`,
        from: (value: string) => Number(value.replace(' €', '')),
      }
    };

    if (sliderRef.current && !sliderRef.current.noUiSlider) {
      noUiSlider.create(sliderRef.current, rangeSliderConfig);
    }

    //pre optimal performance, we should only update the slider if the value has changed

    sliderRef.current.noUiSlider.on('update', (values: any) => {
        setSliderValue([values[0], values[1]]);
    });

    sliderRef.current.noUiSlider.on('change', (values: any) => {
        onValueChange('salaryRange', [rangeSliderConfig.format.from(values[0]), rangeSliderConfig.format.from(values[1])]);
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
        Od {sliderValue[0]} do {sliderValue[1]}.
      </Label>
      <div ref={sliderRef} className="mb-2 mt-6" />
    </div>
  );
};

export default RangeSlider;