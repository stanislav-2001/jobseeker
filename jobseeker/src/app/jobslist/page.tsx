"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

import JobCard from "@/client/JobCard";

export default function Jobslist() {
  const searchParams = useSearchParams();

  interface JobCardModel {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    remote: boolean;
  }

  const mockJobs: JobCardModel[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Bratislava",
      salary: "1500 - 2000 €",
      type: "Plný úväzok",
      remote: true,
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataCorp",
      location: "Košice",
      salary: "1800 - 2500 €",
      type: "Čiastočný úväzok",
      remote: false,
    },
  ];
  // Parse the JobSearchFormData from URL
  const jobSearchData = useMemo(() => {
    const obj: Record<string, any> = {};
    for (const [key, value] of searchParams.entries()) {
      try {
        // Try to parse arrays/objects (e.g., jobTypes, salaryRange)
        obj[key] = JSON.parse(value);
      } catch {
        obj[key] = value;
      }
    }
    return obj;
  }, [searchParams]);

  return (
    <div className="max-w-2xl mx-auto w-full sm:w-2/3 p-6 bg-white rounded-lg shadow-md flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4">Zoznam pracovných ponúk</h1>
      <div className="flex flex-col gap-4">
        {mockJobs.map((job: JobCardModel) => (
            <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
}
