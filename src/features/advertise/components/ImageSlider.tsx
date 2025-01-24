'use client';

// libraries
import { useRef } from 'react';
import Image from 'next/image';
import { useDisclosure } from '@nextui-org/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

// components
import { Carousel, CarouselItem, Navigation, Pagination } from '@/components/Carousel';
import { Button } from '@/components/Button';

// features
import ImagePreviewModal from '@/features/advertise/components/ImagePreviewModal';

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const {
    isOpen: isOpenImagePreviewModal,
    onOpen: onOpenImagePreviewModal,
    onClose: onCloseImagePreviewModal,
  } = useDisclosure();

  const images = [
    '/assets/images/adv-1.jpg',
    '/assets/images/adv-2.jpg',
    '/assets/images/adv-3.jpg',
    '/assets/images/adv-4.jpg',
    '/assets/images/adv-5.jpg',
  ];

  return (
    <div className="flex w-full flex-col items-start justify-start gap-8">
      <div className="relative w-full">
        <Button
          color="default"
          variant="solid"
          isIconOnly
          onPress={() => sliderRef?.current?.slideNext()}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2"
        >
          <LuChevronLeft size={20} />
        </Button>

        <Button
          color="default"
          variant="solid"
          isIconOnly
          onPress={() => sliderRef?.current?.slidePrev()}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2"
        >
          <LuChevronRight size={20} />
        </Button>

        <Carousel
          onSwiper={(swiper: any) => (sliderRef.current = swiper)}
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          className="h-[300px] w-full rounded-lg"
        >
          {images.map((image) => (
            <CarouselItem key={image} onClick={onOpenImagePreviewModal} className="cursor-pointer">
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

      <ul className="remove-scrollbar flex w-full flex-nowrap items-center justify-start gap-4 overflow-x-auto pb-4">
        {images.map((image, index) => (
          <li
            key={image}
            className="relative h-[80px] min-h-[80px] w-[80px] min-w-[80px] cursor-pointer after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-lg after:bg-overlay/25 after:transition after:duration-200 hover:after:bg-transparent"
            onClick={() => sliderRef?.current?.slideTo(index)}
          >
            <Image
              key={image}
              src={image}
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full rounded-lg object-cover object-center"
            />
          </li>
        ))}
      </ul>

      {isOpenImagePreviewModal && (
        <ImagePreviewModal isOpen={isOpenImagePreviewModal} onClose={onCloseImagePreviewModal} />
      )}
    </div>
  );
};

export default ImageSlider;
