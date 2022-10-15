import Image from 'next/image';

const MyImage = ({
  src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  height,
  width,
  alt = '',
  className = '',
  layout,
  ...props
}) => {
  return (
    // <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
    <>
      {/* Content Goes Here */}
      <Image
        src={
          'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        }
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        className={className}
        {...props}
      />
    </>
  );
};

export default MyImage;
