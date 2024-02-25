import Link from 'next/link';
import Image from 'next/image';
import github from '@/public/github.svg';
import linkedin from '@/public/linkedin.svg';
import mail from '@/public/mail.svg';
import TitleText from './TitleText';

const ContactComponent = () => {
  return (
    <div
      id='contact'
      className='relative text-vWhite my-[250px] w-full flex flex-shrink-0 flex-col justify-center items-start gap-[60px]'>
      <div className='w-full z-10'>
      <TitleText num={"04."} nTitle={"Contact"} />

        {/* <p className='font-main text-xl text-center mb-[60px]'>Let's create something together!</p> */}
      </div>

      <article className='z-10 py-[30px] px-[60px]  rounded-xl border-selected/40 border-2 self-center shadow-[0_0_30px_10px_rgba(0,0,0,0.5)]'>
        <p className='font-main text-xl text-center mb-[60px]'>If you want to chat or start working with me, you can find me at:</p>
        <div className='flex gap-[60px] items-center justify-center'>
          <Link
            href={'/'}
            className='hover:scale-110 transition-all duration-300 flex flex-col gap-[20px] items-center'>
            <Image src={linkedin} alt='linkedin Icon' className='w-[50px] aspect-square' />
            <span className=''>LinkdIn</span>
          </Link>
          <Link
            href={'/'}
            className='hover:scale-110 transition-all duration-300 flex flex-col gap-[20px] items-center'>
            <Image src={mail} alt='mail Icon' className='w-[50px] aspect-square' />
            <span className=''>Email</span>
          </Link>

          <Link
            href={'/'}
            className='hover:scale-110 transition-all duration-300 flex flex-col gap-[20px] items-center'>
            <Image src={github} alt='github Icon' className='w-[50px] aspect-square' />
            <span className=''>Github</span>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ContactComponent;
