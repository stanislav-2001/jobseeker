"use client";

import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { BuildingOffice2Icon, CurrencyEuroIcon, BriefcaseIcon, MapPinIcon,
    EnvelopeIcon, PhoneIcon
 } from '@heroicons/react/24/outline';
 import { Button } from '@headlessui/react';    
 import { useRouter } from 'next/navigation';
//import { MapPinIcon } from '@heroicons/react/20/solid';

const JobPage = () => {

    const router = useRouter();
    
        const handleEmployerDetails = () => {
            // Prepare query params
            const params = new URLSearchParams();
            /*Object.entries().forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    params.append(key, JSON.stringify(value));
                } else {
                    params.append(key, String(value));
                }
            });*/
            router.push(`/employer?${params.toString()}`);
        };


    return (
        <main className="max-w-2xl mx-auto mb-2 p-6 bg-white rounded-lg shadow-md flex flex-col gap-4 min-h-[60vh]">
            <div className="flex items-start justify-between">
                <h1 className="text-3xl font-bold">Predavač</h1>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors text-sm font-semibold">
                    Reagovať
                </button>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPinIcon className="w-5 h-5 text-gray-400" />
                <span>Bratislava, Slovensko</span>
                {true && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">
                    Remote
                </span>
                )}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm">
                <BuildingOffice2Icon className="w-5 h-5 text-gray-400" />
                <span>Solutions s.r.o</span>
                <span className="mx-2 text-gray-400">&#183;</span>
                <Button type="button" onClick={handleEmployerDetails} className="text-blue-600 hover:underline cursor-pointer">
                    Zobraziť viac informácií o firme
                </Button>
            </div>
            <hr className="my-2 w-full border-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
                <div>
                    <span className="text-sm font-semibold text-gray-700 mb-1 block">Plat</span>
                    <span className="text-gray-800 text-sm font-medium">
                        1 500 - 2 000 € / mesiac
                    </span>
                </div>
                <div>
                    <span className="text-sm font-semibold text-gray-700 mb-1 block">Typ úväzku</span>
                    <span className="text-gray-800 text-sm font-medium">
                        Plný úväzok
                    </span>
                </div>
                <div>
                    <span className="text-sm font-semibold text-gray-700 mb-1 block">Požiadavky na prax</span>
                    <span className="text-gray-800 text-sm font-medium">
                        aspoň 2 roky praxe
                    </span>
                </div>
            </div>
            <hr className="my-2 w-full border-gray-300" />
            <section>
                <h2 className="text-lg font-semibold mb-2">Popis pracovnej pozície</h2>
                <p className="text-gray-700 text-sm">
                    Hľadáme motivovaného a komunikatívneho predavača, ktorý sa rád stretáva s ľuďmi a má záujem rozvíjať svoje zručnosti v oblasti predaja. Vašou úlohou bude aktívne oslovovať zákazníkov, poskytovať im odborné poradenstvo a zabezpečiť kvalitný zákaznícky servis. Ak ste tímový hráč a orientujete sa na dosahovanie výsledkov, táto pozícia je pre vás ideálnou príležitosťou.
                </p>
                <h3 className="text-md font-semibold mt-4">Požiadavky</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>Skúsenosti v oblasti predaja</li>
                    <li>Schopnosť komunikovať so zákazníkmi</li>
                    <li>Orientácia na výsledky a cieľ</li>
                    </ul>
                <h3 className="text-md font-semibold mt-4">Ponúkame</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>Motivačný plat a bonusy</li>
                    <li>Možnosť profesijného rastu</li>
                    <li>Príjemné pracovné prostredie</li>
                </ul>
            </section>
            <hr className="my-2 w-full border-gray-300" />
            <section>
                <h3 className="text-md font-semibold">Kontaktná osoba</h3>
                    <div className='mt-2'>
                        <p className="text-gray-800 font-sm">Ján Novák</p>
                        <p className="text-gray-600 text-sm">HR Manager</p>
                        <p><a href="mailto:" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                            <svg className="w-4 h-4 text-gray-400" aria-hidden="true">
                                <EnvelopeIcon />
                            </svg>
                            dummy@example.com
                        </a>
                        </p>
                        <p>
                        <a href="tel:+421123456789" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                            <svg className="w-4 h-4 text-gray-400" aria-hidden="true">
                                <PhoneIcon />
                            </svg>
                            +421 123 456 789
                        </a>
                        </p>
                    </div>
            </section>
        </main>
    );
};

export default JobPage;