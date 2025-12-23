import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { ExperienceItem } from '../services/types';

const experienceData: ExperienceItem[] = [
  {
    id: "1",
    company: "Norman Carriers",
    role: "Client Relation Management VA",
    period: "2024 – 2025",
    description: [
      "Handled import documentation and ensured timely, compliant submissions.",
      "Used freight software to manage bookings, schedules, and routing.",
      "Coordinated with teams and partners for smooth import operations."
    ]
  },
  {
    id: "2",
    company: "Media Machine",
    role: "General Virtual Assistant",
    period: "2023 – 2023",
    description: [
      "Built KPI dashboards in Looker Studio to deliver real-time performance insights.",
      "Created visual reports summarizing key metrics and trends across departments.",
      "Designed graphics and website mock-ups aligned with brand standards."
    ]
  },
  {
    id: "3",
    company: "Visayas Cockers Club Inc.",
    role: "Officer in Charge",
    period: "2019 – 2022",
    description: [
      "Managed a team and handled customer service and technical support.",
      "Responsible for overseeing the process and effectivity of the production."
    ]
  },
  {
    id: "4",
    company: "SPI Dumaguete",
    role: "Data Analyst",
    period: "2018 – 2019",
    description: [
      "Analyzed XML tagging and checked for errors and issues in web articles."
    ]
  },
  {
    id: "5",
    company: "Chevrolet Dumaguete",
    role: "Sales Consultant",
    period: "2017 – 2018",
    description: [
      "One of the pioneering sales consultants in the Dumaguete branch.",
      "Closed 10+ units in 3 months by prospecting leads via Facebook, emails, and calls."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 -translate-x-1/2"></div>
              
              <div className={`md:flex items-center justify-between gap-10 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0"></div>

                {/* Content */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300`}>
                    <div className="flex items-center gap-2 text-blue-600 font-bold mb-1">
                      <Briefcase size={18} />
                      <h3>{item.company}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-3 font-semibold">
                       <Calendar size={14} />
                       <span>{item.period}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{item.role}</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};