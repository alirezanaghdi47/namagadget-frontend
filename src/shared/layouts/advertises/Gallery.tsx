'use client';

// libraries
import { useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useDisclosure } from '@nextui-org/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

// components
import { Carousel, CarouselItem, Navigation, Pagination } from '@shared/components/Carousel';
import { Button } from '@shared/components/Button';

// hooks
import useKeyboardShortcut from '@shared/hooks/useKeyboardShortcut';

const LightBox = dynamic(() => import('@shared/components/LightBox').then((module) => module.LightBox), { ssr: false });

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const nextSlideRef = useRef(null);
  const prevSlideRef = useRef(null);
  const { isOpen: isOpenLightBox, onOpen: onOpenLightBox, onClose: onCloseLightBox } = useDisclosure();

  useKeyboardShortcut(['alt', 'n'], () => handleNextSlide());
  useKeyboardShortcut(['alt', 'p'], () => handlePrevSlide());

  const handleNextSlide = () => {
    sliderRef?.current?.slideNext();
  };

  const handlePrevSlide = () => {
    sliderRef?.current?.slidePrev();
  };

  const images = [
    '/assets/images/adv-1.jpg',
    '/assets/images/adv-2.jpg',
    '/assets/images/adv-3.jpg',
    '/assets/images/adv-4.jpg',
    '/assets/images/adv-5.jpg',
  ];

  return (
    <>
      <div className="relative w-full">
        <Button
          ref={nextSlideRef}
          color="default"
          variant="solid"
          isIconOnly
          onPress={handleNextSlide}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2"
        >
          <LuChevronLeft size={20} />
        </Button>

        <Button
          ref={prevSlideRef}
          color="default"
          variant="solid"
          isIconOnly
          onPress={handlePrevSlide}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2"
        >
          <LuChevronRight size={20} />
        </Button>

        <Carousel
          onSwiper={(swiper) => (sliderRef.current = swiper)}
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          className="h-64 w-full rounded-lg"
        >
          {images.map((image) => (
            <CarouselItem key={image} onClick={onOpenLightBox} className="cursor-pointer">
              <Image
                src={image}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      {isOpenLightBox && <LightBox isOpen={isOpenLightBox} onClose={onCloseLightBox} />}
    </>
  );
};

const Gallery = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-8">
      <ImageSlider />
    </div>
  );
};

export default Gallery;
