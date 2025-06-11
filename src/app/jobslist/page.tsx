"use client";

import { useState } from "react";

import JobCard from "@/client/JobCard";
import MySelect, { SelectOption } from "@/client/MySelect";
import { Field, Label, Button } from "@headlessui/react";
import AscDescSwitch from "./AscDescSwitch";

const orderOptions: SelectOption[] = [
  { id: "plat", name: "Plat" },
  { id: "datum", name: "Dátum pridania" },
  { id: "vzdialenost", name: "Vzdialenosť" },
]

export default function Jobslist() {

  const [orderByState, setOrderByState] = useState<[string, string]>(["plat", "desc"]);

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

  return (
    <div className="max-w-2xl mb-2 mx-auto w-full sm:w-2/3 p-6 bg-white rounded-lg shadow-md flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4">Zoznam pracovných ponúk</h1>
      <div className="flex gap-4">
        <Field className={"w-full"}>
        <Label className="block text-sm/6 font-medium text-black mb-1">
          Zoradiť podľa:
          </Label>
        <MySelect options={orderOptions} selected={orderByState[0]} onChange={(value) => setOrderByState([value, orderByState[1]])} />
        </Field>
        <Field>
          <Label className="block text-sm/6 font-medium text-black mb-1">
            Poradie:
          </Label>
          <AscDescSwitch selected={orderByState[1]} onChange={(value) => setOrderByState([orderByState[0], value])}/>
        </Field>
      </div>
      <div className="text-center">Nájdených <span className="font-bold">22</span> ponúk.</div>
      <div className="flex flex-col gap-4">
        {mockJobs.map((job: JobCardModel) => (
            <JobCard job={job} key={job.id} />
        ))}
      </div>
      <Button className="text-center text-blue-600 data-hover:bg-gray-100 rounded-lg transition py-2">Načítať ďalšie ponuky</Button>

    </div>
  );
}
