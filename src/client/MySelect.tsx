import { Select } from '@headlessui/react';
import React from 'react';
import clsx from 'clsx';

export interface SelectOption {
    name?: string;
    id?: string;
}

interface MySelectProps {
    options: SelectOption[];
    selected: string;
    onChange: (value: string) => void;
}

const MySelect: React.FC<MySelectProps> = ({ options, selected, onChange}) => {
    
    return (
        <div className="relative">
            <Select name="status" value={selected} onChange={e => onChange(e.target.value)} aria-label="Vzdelanie" className={clsx(
              'block w-full appearance-none rounded-lg border-1 border-gray-300 bg-white/5 px-3 py-1.5 text-sm/6 text-black',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
              '*:text-black'
            )} >
                { options.map((edu) => (
                    <option key={edu.id} value={edu.id}>
                        {edu.name}
                    </option>
                )) }
            </Select>
        </div>
    );
};

export default MySelect;