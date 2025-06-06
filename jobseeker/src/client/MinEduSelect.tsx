import { Checkbox, Label, Select } from '@headlessui/react';
import React from 'react';
import clsx from 'clsx';

const MinEduSelect: React.FC = () => {
    let vzdelanie = [
        "Základné",
        "Stredné bez maturity",
        "Stredné s maturitou",
        "Vyššie odborné",
        "Vysokoškolské I. stupňa",
        "Vysokoškolské II. stupňa",
        "Vysokoškolské III. stupňa",
    ];
    return (
        <div className="relative">
            <Select name="status" aria-label="Vzdelanie" className={clsx(
              'block w-full appearance-none rounded-lg border-1 border-gray-300 bg-white/5 px-3 py-1.5 text-sm/6 text-black',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
              '*:text-black'
            )}>
                { vzdelanie.map((edu, index) => (
                    <option key={index} value={edu} defaultChecked={index === 5}>
                        {edu}
                    </option>
                )) }
            </Select>
        </div>
    );
};

export default MinEduSelect;