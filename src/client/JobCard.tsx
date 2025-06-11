"use client";

import React from 'react';
import { JobCardModel } from './JobCardModel';
import {
  BuildingOffice2Icon,
  MapPinIcon,
  CurrencyEuroIcon,
  GlobeAltIcon,
  ClockIcon
} from "@heroicons/react/24/outline";
import { useRouter } from 'next/navigation';
import { Button } from '@headlessui/react';

type JobCardProps = {
  job: JobCardModel;
};



const JobCard: React.FC<JobCardProps> = ({ job }) => {
  console.log("JobCard props:", job);

  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    /*Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            params.append(key, JSON.stringify(value));
        } else {
            params.append(key, String(value));
        }
    });*/
    console.log("JobCard handleSearch params:", params);
    router.push(`/job?${params.toString()}`);
  };
  return (
    <button
      onClick={handleSearch}
      type='button'
      key={job.id}
      className="rounded-lg border border-gray-300 p-4 flex flex-col gap-2 bg-white hover:bg-gray-100 hover:cursor-pointer hover:border-gray-100 transition"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{job.title}</h2>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <BuildingOffice2Icon className="w-4 h-4 text-gray-400" />
        {job.company}
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <MapPinIcon className="w-4 h-4 text-gray-400" />
        {job.location}
      </div>
      <div className="flex gap-4 text-sm mt-2 items-center">
        <span className="font-medium text-green-700">{job.salary}</span>
        {job.remote && (
          <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">
            Remote
          </span>
        )}
        <span className="ml-auto flex items-center gap-1 text-xs text-gray-400">
          <ClockIcon className="w-4 h-4" />
          3 hours ago
        </span>
      </div>
    </button>
  );
};

export default JobCard;