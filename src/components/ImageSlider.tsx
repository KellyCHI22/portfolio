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
    <div aria-label="image slider" className="relative">
      <div className="overflow-hidden">
        <div
          className="flex h-52 w-full transition-transform duration-500 ease-out lg:h-72"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {imagesData.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt="project-image"
                loading="lazy"
                className="w-full flex-shrink-0 object-cover"
              />
            );
          })}
        </div>
      </div>
      <button
        aria-label="previous image"
        className="absolute left-2 top-[40%] grid place-items-center rounded-full bg-jet-500 p-[0.5] text-pearl-bush-500 opacity-70 hover:opacity-100"
        onClick={prevSlide}
      >
        <img
          src="/round-arrow-back-ios.svg"
          alt="back-arrow"
          className="p-1"
          loading="lazy"
        />
      </button>
      <button
        aria-label="next image"
        className="absolute right-2 top-[40%] grid place-items-center rounded-full bg-jet-500 p-[0.5] text-pearl-bush-500 opacity-70 hover:opacity-100"
        onClick={nextSlide}
      >
        <img
          src="/round-arrow-forward-ios.svg"
          alt="forward-arrow"
          className="p-1"
          loading="lazy"
        />
      </button>
      <div className="mt-3 flex w-full justify-center gap-3">
        {Array.from(imagesData).map((image, index) => {
          return (
            <div
              key={index}
              className={clsx(
                'h-1 w-4 rounded-full bg-jet-200 dark:bg-jet-400',
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
