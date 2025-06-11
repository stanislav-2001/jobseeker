import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import AboutTab from './AboutTab'
import JobCard from '@/client/JobCard'
import { JobCardModel } from '@/client/JobCardModel'

const categories = [
  {
    name: 'O spoločnosti',
    posts: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: 'Aktuálne ponuky',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: 'Ukončené ponuky',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
]

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

export default function CompanyTabs() {
  return (
    <div className="flex px-4">
      <div className="w-full">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full transition-colors px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-100 data-selected:bg-blue-200"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            <TabPanel>
              <AboutTab />
            </TabPanel>
            {categories.map(({ name }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <div className="flex flex-col gap-4">
                  {mockJobs.map((job: JobCardModel) => (
                      <JobCard job={job} key={job.id} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}