"use client";
import React, { useCallback, useState } from 'react';
import RangeSlider from '../client/RangeSlider';
import PraxSwitch from '@/client/PraxSwitch';
import CityDropdown from '@/client/CityDropdown';
import JobTypeGroup from '@/client/JobTypeGroup';
import { Fieldset, Label, Field, Input, Button } from '@headlessui/react';
import RemoteSwitch from '@/client/RemoteSwitch';
import { useRouter } from 'next/navigation';
import MySelect from '@/client/MySelect';
import { SelectOption } from '@/client/MySelect';

const vzdelanie: SelectOption[] = [
    { id: "zakladne", name: "Základné" },
    { id: "stredne_bez_maturity", name: "Stredné bez maturity" },
    { id: "stredne_s_maturitou", name: "Stredné s maturitou" },
    { id: "vyssie_odborne", name: "Vyššie odborné" },
    { id: "vs_i_stupen", name: "Vysokoškolské I. stupňa" },
    { id: "vs_ii_stupen", name: "Vysokoškolské II. stupňa" },
    { id: "vs_iii_stupen", name: "Vysokoškolské III. stupňa" },
];

export type JobSearchFormField = string | number | boolean | [number, number] | string[];

export interface JobSearchFormData {
    query: string;
    city: string;
    distance: number;
    remote: boolean;
    withoutExperienceOnly: boolean;
    minEducation: string;
    salaryRange: [number, number];
    jobTypes: string[];
}

const JobSearchBox: React.FC = () => {

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

    const handleInputChange = useCallback((name: keyof JobSearchFormData, value: JobSearchFormField) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

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
                <Field className='flex-7'>
                    <Label className="block text-sm/6 font-medium text-black">Lokalita</Label>
                    <CityDropdown value={formData.city} handleInputChange={handleInputChange}></CityDropdown>
                </Field>
                <Field className="flex-3">
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
            <RangeSlider value={formData.salaryRange} onValueChange={handleInputChange} />
            <Field>
                <Label className="block text-sm/6 font-medium text-black">Najvyššie dosiahnuté vzdelanie</Label>
                <MySelect options={vzdelanie} selected={formData.minEducation} onChange={(value) => handleInputChange("minEducation", value)} />
            </Field>
            <JobTypeGroup value={formData.jobTypes} onChange={handleInputChange} />
            <Button onClick={handleSearch} type='button' className="w-full text-center items-center transition gap-2 rounded-md bg-blue-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-blue-400 data-open:bg-gray-700">Hľadať ponuky</Button>
        </Fieldset>
    );
};

export default JobSearchBox;