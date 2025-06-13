import { useRef, useEffect, useState } from 'react';
import noUiSlider, { API as noUiSliderAPI } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { Label } from '@headlessui/react';
import './nouislider-custom.css'; // Custom styles for noUiSlider
import { JobSearchFormData } from '@/app/JobSearchBox';


interface RangeSliderProps {
    value: [number, number];
    onValueChange: (name: keyof JobSearchFormData, value: [number, number]) => void;
}

type NoUiSliderElement = HTMLDivElement & { noUiSlider?: noUiSliderAPI };

const RangeSlider: React.FC<RangeSliderProps> = ({ value, onValueChange }) => {
    const sliderRef = useRef<NoUiSliderElement>(null);
    
    const [sliderValue, setSliderValue] = useState<[string, string]>([`${Math.round(value[0])} €`, `${Math.round(value[1])} €`]);
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
    sliderRef.current?.noUiSlider?.on('update', (values: (number | string)[]) => {
        setSliderValue([values[0] as string, values[1] as string]);
    });

    sliderRef.current.noUiSlider?.on('change', (values: (number | string)[]) => {
        onValueChange('salaryRange', [rangeSliderConfig.format.from(values[0].toString()), rangeSliderConfig.format.from(values[1].toString())]);
    });

    return () => {
      if (sliderRef.current && sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, [onValueChange]);

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