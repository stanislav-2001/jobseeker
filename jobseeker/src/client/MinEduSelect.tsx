import { Checkbox, Label, Select } from '@headlessui/react';
import React from 'react';
import clsx from 'clsx';

const MinEduSelect: React.FC = () => {
    const vzdelanie = [
        { id: "zakladne", name: "Základné" },
        { id: "stredne_bez_maturity", name: "Stredné bez maturity" },
        { id: "stredne_s_maturitou", name: "Stredné s maturitou" },
        { id: "vyssie_odborne", name: "Vyššie odborné" },
        { id: "vs_i_stupen", name: "Vysokoškolské I. stupňa" },
        { id: "vs_ii_stupen", name: "Vysokoškolské II. stupňa" },
        { id: "vs_iii_stupen", name: "Vysokoškolské III. stupňa" },
    ];
    return (
        <div className="relative">
            <Select name="status" aria-label="Vzdelanie" className={clsx(
              'block w-full appearance-none rounded-lg border-1 border-gray-300 bg-white/5 px-3 py-1.5 text-sm/6 text-black',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
              '*:text-black'
            )}>
                { vzdelanie.map((edu) => (
                    <option key={edu.id} value={edu.id} selected={edu.id === 'vs_ii_stupen'}>
                        {edu.name}
                    </option>
                )) }
            </Select>
        </div>
    );
};

export default MinEduSelect;