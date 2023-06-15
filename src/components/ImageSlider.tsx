import clsx from 'clsx';
import { useState } from 'react';

export default function ImageSlider({ imagesData }: { imagesData: string[] }) {
  const [current, setCurrent] = useState(0);
  const length = imagesData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(imagesData) || imagesData.length <= 0) {
    return null;
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500 w-full h-48"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {imagesData.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt="project-image"
                loading="lazy"
                className="w-full object-cover flex-shrink-0"
              />
            );
          })}
        </div>
      </div>
      <button
        className="p-[0.5] bg-jet-500 text-pearl-bush-500 rounded-full absolute left-2 top-[40%] grid place-items-center opacity-70 hover:opacity-100"
        onClick={prevSlide}
      >
        <img
          src="/round-arrow-back-ios.svg"
          alt="back-arrow"
          className="p-1"
          loading="lazy"
        />
        {/* <IoIosArrowBack className="text-2xl" /> */}
      </button>
      <button
        className="p-[0.5] bg-jet-500 text-pearl-bush-500 rounded-full absolute right-2 top-[40%] grid place-items-center opacity-70 hover:opacity-100"
        onClick={nextSlide}
      >
        <img
          src="/round-arrow-forward-ios.svg"
          alt="forward-arrow"
          className="p-1"
          loading="lazy"
        />
        {/* <IoIosArrowForward className="text-2xl" /> */}
      </button>
      <div className="flex gap-3 w-full justify-center mt-3">
        {Array.from(imagesData).map((image, index) => {
          return (
            <div
              key={index}
              className={clsx(
                'w-4 h-1 rounded-full bg-jet-200 dark:bg-jet-400',
                {
                  'bg-jet-500 dark:bg-white': current === index,
                }
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
