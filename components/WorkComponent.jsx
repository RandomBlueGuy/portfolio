import React from 'react';
import XPfile from './XPfile';
import TitleText from './TitleText';

const WorkComponent = () => {
  const projectsArr = [
    {
      title: 'CICT Solutions',
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
      websiteURL: 'https://www.cict.com.au/',
    },
    {
      title: 'The Food Company',
      role: 'FullStack Developer',
      images: [],
      description: `CICT Solutions' website is a showcase of taste and web development! Featuring small backend features, design and UI/UX adapted to the client's needs as well as their customers and corporate partners. Visitors can access, and review recipes and sauces from all over the world.`,
      technologies: ['NextJS', 'JavaScript', 'NodeJS', 'Tailwind CSS', 'EmailJS', 'AWS'],
      repositoryURL: '',
      websiteURL: 'https://www.cict.com.au/',
    },
    {
      title: 'Dr. Seeto',
      role: 'FrontEnd Developer',
      images: [],
      description: '',
      technologies: ['NextJS', 'JavaScript', 'Tailwind CSS', 'EmailJS', 'AWS'],
      repositoryURL: '',
      websiteURL: 'https://www.thefoodcompany.com.au/',
    },
    {
      title: 'YCC Poultry',
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
      title: 'Impressive Wardrobes',
      role: 'FrontEnd Developer',
      images: [],
      description: '',
      technologies: ['NextJS', 'JavaScript', 'Tailwind CSS', 'EmailJS', 'AWS'],
      repositoryURL: '',
      websiteURL: 'https://www.impressivewardrobes.com.au/',
    },
    {
      title: 'Unnamed Visitor App',
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
      title: 'Delta Bookings',
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
      title: 'Shop Prototype',
      role: 'Lead Developer',
      images: [],
      description: '',
      technologies: ['ReactJS', 'JavaScript', 'NodeJS', 'Tailwind CSS', 'Redux'],
      repositoryURL: '',
      websiteURL: 'https://github.com/RandomBlueGuy/Shop-Prototype',
    },
    {
      title: 'Cuarentena',
      role: 'Lead Developer',
      images: [],
      description: '',
      technologies: ['C++', 'C#', 'GameMaker', 'RPGMaker'],
      repositoryURL: '',
      websiteURL: '',
    },
  ];

  return (
    <div
      id='work'
      className='w-full relative h-fit flex flex-shrink-0 flex-col justify-center items-start  gap-[60px]'>
      <figure className='translate-x-[25%] -z-0 blur-[100px] mix-blend-multiply bg-[radial-gradient(rgba(0,0,0,0.4)_0%,rgba(0,100,255,0.1))] rounded-full w-[100vw] h-auto aspect-square absolute ' />

      <div className='w-full'>
        <TitleText num={'03.'} nTitle={'Work'} />
        <p className='my-[50px]  text-xl'>
          // Check some of the work I have done over the last few years
        </p>
        <div className='w-[90%] flex flex-wrap box-content justify-around hover:items-start pl-[2rem]'>
          {projectsArr.map((project, index) => (
            <XPfile key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
