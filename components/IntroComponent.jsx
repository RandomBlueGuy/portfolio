const IntroComponent = () => {
  return (
    <div
      id='intro'
      className='z-10 relative w-full h-screen flex flex-col justify-center items-center'>
      <figure className='-z-0 blur-[150px] mix-blend-screen bg-[radial-gradient(rgba(0,100,255,0.4)_0%,rgba(0,100,255,0.1))] rounded-full w-[60%] h-auto aspect-square absolute translate-y-[-50%]' />
      <div className=''></div>
      <span className='h-[160px] text-9xl leading-none text-vWhite font-custom2 font-bold border-y-[2px] py-[8px] px-[30px] mb-[30px] [text-shadow:0px_0px_20px_rgba(0,0,0,0.3)]'>
        Andres Velez
      </span>
      <h1 className='font-custom4 font-light text-2xl text-vWhite text-center'>Web Developer
      <br /><br />
      H1 needs to be a call to action
      </h1>
    </div>
  );
};

export default IntroComponent;
