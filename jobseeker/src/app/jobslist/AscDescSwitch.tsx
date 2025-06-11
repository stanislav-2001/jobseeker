import { Checkbox, Label, Select, RadioGroup, Field, Radio } from '@headlessui/react';
import React from 'react';
import clsx from 'clsx';

interface AscDescSwitchProps {
    selected: string;
    onChange: (value: string) => void;
}

const AscDescSwitch: React.FC<AscDescSwitchProps> = ({selected, onChange}) => {
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
        <RadioGroup value={selected} onChange={onChange} aria-label="Server size">
            <div className='flex h-9.5'>
                <Radio className={clsx("flex items-center text-sm/6 px-2 flex-1 rounded-l-lg border-gray-300",
                "border-l-1 border-t-1 border-b-1", {
                    'bg-blue-300': selected === 'asc',
                    'bg-white': selected !== 'asc'
                })}
                value='asc'>
                Vzostupne</Radio>
                <Radio className={clsx("flex items-center text-sm/6 px-2 flex-1 rounded-r-lg border-gray-300",
                "border-r-1 border-t-1 border-b-1", {
                    'bg-blue-300': selected === 'desc',
                    'bg-white': selected !== 'desc'
                })}
                value='desc'>
                Zostupne</Radio>
            </div>
        </RadioGroup>
    );
};

export default AscDescSwitch;