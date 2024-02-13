import Image from 'next/image';
import github from '@/public/github.svg';
import linkedin from '@/public/linkedin.svg';
import mail from '@/public/mail.svg';

const ContactComponent = () => {
  return (
    <div
      id='contact'
      className='relative text-vWhite bg-black/30 h-[600px] mt-[250px] w-full flex flex-shrink-0 flex-col justify-center items-start gap-[60px]'>
      <div className='w-full '>
        <h2 className='absolute top-0  left-0 font-tag font-bold text-7xl text-vWhite mb-[50px]'>
          <span className='-z-10 box-content  leading-none text-10xl text-transparent font-outline-2 font-title font-bold'>
            04.
          </span>
          <span className='z-0 absolute bottom-0 left-0 translate-x-[40%]'>Contact</span>
        </h2>
        {/* <p className='font-main text-xl text-center mb-[60px]'>Let's create something together!</p> */}
        <p className='font-main text-xl text-center mb-[60px]'>You can find me at...</p>
        <div className='flex gap-[60px] items-center justify-center'>
          <Image src={linkedin} alt='linkedin Icon' className='w-[50px] aspect-square' />
          <Image src={mail} alt='mail Icon' className='w-[50px] aspect-square' />
          <Image src={github} alt='github Icon' className='w-[50px] aspect-square' />
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
