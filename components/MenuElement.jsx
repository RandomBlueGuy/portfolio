import Link from 'next/link';

const MenuElement = ({ mlink, title, hType }) => {
  return (
    <Link
      href={mlink}
      className='flex w-fit flex-col justify-between hover:translate-x-[10%] mb-[5px] hover:py-[10px] hover:scale-125 transition-all duration-200 group'>
      <span className=' text-xs pl-10 leading-none group-hover:text-vWhite'>{`<${hType}>`}</span>
      <p className='font-title pl-16 text-vTitle leading-none group-hover:text-selected'>{title}</p>
      <span className=' text-xs pl-10 leading-none group-hover:text-vWhite'>{`</${hType}>`}</span>
    </Link>
  );
};

export default MenuElement;
