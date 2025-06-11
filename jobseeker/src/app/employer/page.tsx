import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import CompanyTabs from './CompanyTabs';
import { StarIcon } from '@heroicons/react/24/solid';

const EmployerPage: React.FC = () => {
    return (
        <main className="flex flex-col min-h-[60vh] mb-2 sm:w-2/3 w-full mx-2 bg-white rounded-xl shadow-md">
            <div className="flex items-center p-6">
                <img
                    src="https://logo.clearbit.com/example.com"
                    alt="Profile"
                    className="w-30 h-30 aspect-square rounded-full object-cover mr-8 border-4 border-gray-200"
                />
                <div>
                    <h1 className="m-0 text-2xl font-bold">Employer Name</h1>
                    <div className="flex items-center mt-2 text-gray-500">
                        <MapPinIcon className="h-5 w-5 mr-1 text-gray-400" />
                        <span>Bratislava, Slovakia</span>
                    </div>
                    <div className="flex items-center mt-2 text-gray-500">
                        <StarIcon className="h-5 w-5 mr-1 text-yellow-400" />
                        <span>3,6</span>
                    </div>
                </div>
            </div>
            <hr className="my-2 w-full border-gray-300" />
            <CompanyTabs />
        </main>
    );
};

export default EmployerPage; 
