import { Checkbox, Label } from '@headlessui/react';
import React from 'react';

const RemoteSwitch: React.FC = () => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                id="remote-switch"
                className="group block size-4 rounded border-1 border-gray-300 bg-white data-checked:bg-blue-500"
                                defaultChecked={true}
            >
                <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="none">
        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
                </Checkbox>
            <Label
                htmlFor="remote-switch"
                className="text-sm font-medium text-gray-700"
            >
                Aj remote ponuky
            </Label>
        </div>
    );
};

export default RemoteSwitch;