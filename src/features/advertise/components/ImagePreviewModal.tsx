'use client';

// libraries
import { useRef } from 'react';
import Image from 'next/image';
import { LuChevronLeft, LuChevronRight, LuX } from 'react-icons/lu';

// components
import { Button } from '@/components/Button';
import { Carousel, CarouselItem, Navigation, Pagination } from '@/components/Carousel';

const ImagePreviewModal = ({ isOpen, onClose }) => {
  const sliderRef = useRef(null);

  const images = [
    '/assets/images/adv-1.jpg',
    '/assets/images/adv-2.jpg',
    '/assets/images/adv-3.jpg',
    '/assets/images/adv-4.jpg',
    '/assets/images/adv-5.jpg',
  ];

  return (
    isOpen && (
      <div
        className="fixed left-0 top-0 z-40 flex h-dvh w-full items-center justify-center bg-overlay p-8"
        onClick={onClose}
      >
        <Button color="danger" variant="light" isIconOnly onPress={onClose} className="absolute right-4 top-4 z-50">
          <LuX size={20} />
        </Button>

        <div
          className="relative h-full max-h-[calc(100%_-_100px)] w-full max-w-[calc(100%_-_100px)]"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            color="default"
            variant="solid"
            isIconOnly
            onPress={() => sliderRef?.current?.slideNext()}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2"
          >
            <LuChevronLeft size={20} />
          </Button>

          <Button
            color="default"
            variant="solid"
            isIconOnly
            onPress={() => sliderRef?.current?.slidePrev()}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
          >
            <LuChevronRight size={20} />
          </Button>

          <Carousel
            onSwiper={(swiper: any) => (sliderRef.current = swiper)}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            className="h-full w-full"
          >
            {images.map((image) => (
              <CarouselItem key={image}>
                <Image
                  src={image}
                  alt="image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-full object-contain"
                />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    )
  );
};

export default ImagePreviewModal;
