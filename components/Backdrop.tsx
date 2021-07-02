import React from 'react';

interface BackdropProps {
  backgroundImage: StaticImageData,
  children: any,
}

const Backdrop = (props: BackdropProps) => {
  const { backgroundImage, children } = props;
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      className="h-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      {children}
    </div>

    // <div className="h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-cover bg-center bg-no-repeat flex justify-center items-center">
    //   {children}
    // </div>
  )
};

export default Backdrop;