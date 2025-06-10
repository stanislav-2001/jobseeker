"use client";
import React, { useCallback, useState } from 'react';
import RangeSlider from '../client/RangeSlider';
import PraxSwitch from '@/client/PraxSwitch';
import CityDropdown from '@/client/CityDropdown';
import MinEduSelect from '@/client/MinEduSelect';
import JobTypeGroup from '@/client/JobTypeGroup';
import { Fieldset, Label, Field, Input, Button } from '@headlessui/react';
import RemoteSwitch from '@/client/RemoteSwitch';
import { useRouter } from 'next/navigation';

const JobSearchBox: React.FC = () => {

    interface JobSearchFormData {
        query: string;
        city: string;
        distance: number;
        remote: boolean;
        withoutExperienceOnly: boolean;
        minEducation: string;
        salaryRange: [number, number];
        jobTypes: string[];
    }

    const [formData, setFormData] = useState<JobSearchFormData>({
        query: '',
        city: '',
        distance: 30,
        remote: true,
        withoutExperienceOnly: false,
        minEducation: 'vs_ii_stupen',
        salaryRange: [1200, 1700],
        jobTypes: ["full-time", "freelance"],
    });

    const handleInputChange = useCallback((name: string, value: any) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    },[]);

    const router = useRouter();

    const handleSearch = () => {
        // Prepare query params
        const params = new URLSearchParams();
        Object.entries(formData).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                params.append(key, JSON.stringify(value));
            } else {
                params.append(key, String(value));
            }
        });
        router.push(`/jobslist?${params.toString()}`);
    };

    return (
        <Fieldset className="sm:max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md flex flex-col gap-4">
            <Field>
                <Label className="block text-sm/6 font-medium text-black">Pozícia, kľúčové slovo</Label>
                <Input
                    type="text"
                    placeholder="napr. manažér predaja"
                    value={formData.query}
                    onChange={(e) => handleInputChange('query', e.target.value)}
                    className="clsx(
              'mt-3 block w-full rounded-lg border-1 border-gray-300 bg-white/5 px-3 py-1.5 text-sm/6 text-white',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )"
                />
            </Field>
            <div className='flex gap-2'>
                <Field>
                    <Label className="block text-sm/6 font-medium text-black">Lokalita</Label>
                    <CityDropdown value={formData.city} handleInputChange={handleInputChange}></CityDropdown>
                </Field>
                <Field>
                    <Label className="block text-sm/6 font-medium text-black">Vzdialenosť</Label>
                    <div className='flex items-center gap-2'>
                    <Input
                        type="number"
                        min="0"
                        max="1000"
                        value={formData.distance}
                        onChange={(e) => handleInputChange('distance', parseInt(e.target.value))}
                        placeholder=""
        className="clsx(
                    'mt-3 block w-full rounded-lg border-1 border-gray-300 bg-white/5 px-3 py-1.5 text-sm/6 text-white',
                    'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                    )"            />
                    <Label className="block text-sm/6 font-medium text-black">km</Label>
                    </div>
                </Field>
            </div>
            <div className='flex gap-2 justify-between'> 
                <PraxSwitch />
                <RemoteSwitch />
            </div>
            <RangeSlider value={formData.salaryRange} onValueChange={handleInputChange}/>
            <Field>
            <Label className="block text-sm/6 font-medium text-black">Najvyššie dosiahnuté vzdelanie</Label>
            <MinEduSelect />   
            </Field>
            <JobTypeGroup value={formData.jobTypes} onChange={handleInputChange}/>
            <Button onClick={handleSearch} type='button' className="w-full text-center items-center transition gap-2 rounded-md bg-blue-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-blue-400 data-open:bg-gray-700">Hľadať ponuky</Button>
        </Fieldset>
    );
};

export default JobSearchBox;