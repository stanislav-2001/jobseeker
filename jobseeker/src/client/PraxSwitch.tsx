import { Checkbox, Label } from '@headlessui/react';
import React from 'react';

const PraxSwitch: React.FC = () => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                id="prax-switch"
                className="group block size-4 rounded border-1 border-gray-300 bg-white data-checked:bg-blue-500"
            >
                <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="none">
        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
                </Checkbox>
            <Label
                htmlFor="prax-switch"
                className="text-sm font-medium text-gray-700"
            >
                Iba ponuky bez praxe
            </Label>
        </div>
    );
};

export default PraxSwitch;