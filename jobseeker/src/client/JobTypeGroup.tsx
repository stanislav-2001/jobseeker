import { Checkbox, Fieldset, Label, Field } from '@headlessui/react';
import React from 'react';

const JobTypeGroup: React.FC = () => {
    let jobTypes = [
        { id: 'full-time', label: 'Plný úväzok' },
        { id: 'part-time', label: 'Čiastočný úväzok' },
        { id: 'freelance', label: 'Živnosť' },
        { id: 'internship', label: 'Stáž' },
        { id: 'temporary', label: 'Brigáda' }
    ];
    return (
        <Fieldset className="border-1 border-gray-300 rounded-lg p-4 bg-white">
            <Label className="block text-sm/6 font-medium mb-2 text-black">Druhy pomerov</Label>
            {jobTypes.map((jobType) => (
                <Field key={jobType.id} className="flex items-center space-x-2">
                    <Checkbox
                    id={`job-type-${jobType.id}`}
                    defaultChecked={jobType.id === 'full-time' || jobType.id === 'freelance'}
                    className="group block size-4 rounded border-1 border-gray-300 bg-white data-checked:bg-blue-500"
                >
                    <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="none">
        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
                    </Checkbox>
                <Label
                    htmlFor={`job-type-${jobType.id}`}
                    className="text-sm font-medium text-gray-700"
                >
                    {jobType.label}
                </Label>
            </Field>))}
        </Fieldset>
    );
};

export default JobTypeGroup;