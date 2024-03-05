import React from 'react';
import XPfile from './XPfile';
import TitleText from './TitleText';

const WorkComponent = () => {
  const projectsArr = [
    {
      title: '[ CICT Solutions ]',
      role: 'FrontEnd Developer',
      images: [],
      description: `CICT Solutions' website is a showcase of the company IT services, & Digital Marketing, featuring a user-friendly interface for easy exploration in order to attract customers from all over Australia. Visitors can choose the services they may be interested in, blogs and new relevant for them and enjoy seamless performance across devices. Built for frontend responsiveness, it's a progressive web app designed for accessibility and convenience.`,
      technologies: [
        'NextJS',
        'Blogger',
        'EmailJS',
        'Hubspot',
        'JavaScript',
        'NodeJS',
        'Tailwind CSS',
        'AWS',
      ],
      repositoryURL: '',
      websiteURL: '',
    },
    {
      title: '[ The Food Company ]',
      role: 'FrontEnd/BackEnd Developer',
      images: [],
      description: '',
      technologies: ['NextJS', 'JavaScript', 'NodeJS', 'Tailwind CSS', 'EmailJS', 'AWS'],
      repositoryURL: '',
      websiteURL: 'https://www.cict.com.au/',
    },
    {
      title: '[ Dr. Seeto ]',
      role: 'FrontEnd Developer',
      images: [],
      description: '',
      technologies: ['NextJS', 'JavaScript', 'Tailwind CSS', 'EmailJS', 'AWS'],
      repositoryURL: '',
      websiteURL: 'https://www.thefoodcompany.com.au/',
    },
    {
      title: '[ YCC Poultry ]',
      role: 'Lead Developer',
      images: [],
      description: '',
      technologies: [
        'NextJS',
        'JavaScript',
        'Shopify',
        'Hydrogen',
        'Tailwind CSS',
        'EmailJS',
        'AWS',
      ],
      repositoryURL: '',
      websiteURL: 'https://shop.yccpoultry.com.au/',
    },
    {
      title: '[ Impressive Wardrobes ]',
      role: 'FrontEnd Developer',
      images: [],
      description: '',
      technologies: ['NextJS', 'JavaScript', 'Tailwind CSS', 'EmailJS', 'AWS'],
      repositoryURL: '',
      websiteURL: 'https://www.impressivewardrobes.com.au/',
    },
    {
      title: '[ Unnamed Visitor App ]',
      role: 'Backend Developer',
      images: [],
      description: '',
      technologies: [
        'NextJS',
        'JavaScript',
        'Tailwind CSS',
        'MongoDB',
        'MongoAtlas',
        'DynamoDB',
        'AWS',
      ],
      repositoryURL: '',
      websiteURL: '',
    },
    {
      title: '[ Delta Bookings ]',
      role: 'Lead Developer',
      images: [],
      description: '',
      technologies: [
        'ReactJS',
        'JavaScript',
        'TypeScript',
        'ExpressJS',
        'PostGreSQL',
        'NodeJS',
        'Tailwind CSS',
      ],
      repositoryURL: 'https://github.com/RandomBlueGuy/Delta-Bookings',
      websiteURL: '',
    },
    {
      title: '[ Shop Prototype ]',
      role: 'Lead Developer',
      images: [],
      description: '',
      technologies: ['ReactJS', 'JavaScript', 'NodeJS', 'Tailwind CSS', 'Redux'],
      repositoryURL: '',
      websiteURL: 'https://github.com/RandomBlueGuy/Shop-Prototype',
    },
    {
      title: '[ Cuarentena ]',
      role: 'Lead Developer',
      images: [],
      description: '',
      technologies: ['C++', 'GameMaker', 'RPGMaker', 'Tailwind CSS'],
      repositoryURL: '',
      websiteURL: '',
    },
  ];

  return (
    <div
      id='work'
      className='w-full h-fit flex flex-shrink-0 flex-col justify-center items-start  gap-[60px]'>
      <div className='w-full'>
        <TitleText num={'03.'} nTitle={'Work'} />
        <p className='my-[50px] font-tag text-xl'>
          // Check some of the work I have done over the last few years
        </p>
        <div className='w-full flex flex-wrap box-content justify-around hover:items-start pl-[2rem]'>
          {projectsArr.map((project, index) => (
            <XPfile key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
