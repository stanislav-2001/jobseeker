import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'
import { EnvelopeIcon } from '@heroicons/react/20/solid';

const AboutTab: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/5 p-6 text-black">
            <div className="col-span-2 max-w-prose">
                <p className='text-sm/6'>
                    Naša spoločnosť je lídrom v oblasti inovácií a poskytuje kvalitné služby zákazníkom už viac ako 10 rokov.
                    Sme zameraní na rast, rozvoj a spokojnosť našich zamestnancov aj klientov.
                    Pracujeme v dynamickom tíme, kde si ceníme kreativitu, zodpovednosť a spoluprácu.
                    Naším cieľom je neustále posúvať hranice možného a prinášať nové riešenia, ktoré zlepšujú životy ľudí.
                    Podporujeme profesionálny rast, vzdelávanie a otvorenú komunikáciu na všetkých úrovniach.
                    Veríme, že úspech firmy je postavený na spokojnosti a motivácii našich zamestnancov, ktorých považujeme za najcennejšie aktívum.
                </p>
                <p className="text-sm/6 text-gray-500">
                    Počet zamestnancov: 150
                </p>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-6 flex flex-col gap-2">
                <p className='pb-4 font-semibold'>Kontakt</p>
                <div className="flex items-center gap-2">
                    <GlobeAltIcon className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    <a href="https://www.example.com" className="text-blue-500 text-sm hover:underline">
                        www.hiring.example.com
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <EnvelopeIcon className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    <a href="mailto:info@example.com" className="text-blue-500 text-sm hover:underline">
                        info@example.com
                    </a>
                </div>
                <div className="flex items-center my-4 gap-2">
                    <SocialIcon url='linkedin.com/company/example' className="!h-7 !w-7" />
                    <SocialIcon url='facebook.com/example' className="!h-7 !w-7" />
                </div>
            </div>
        </div>
    );
};

export default AboutTab;