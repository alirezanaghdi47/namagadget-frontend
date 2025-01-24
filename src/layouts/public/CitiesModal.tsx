'use client';

// libraries
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { LuSearch, LuX } from 'react-icons/lu';

// components
import { Modal, ModalContent, ModalHeader, ModalBody } from '@/components/Modal';
import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';

const CitiesModal = ({ isOpen, onOpenChange }) => {
  const cities = [
    { id: 1, title: 'تهران', value: 'tehran' },
    { id: 2, title: 'مشهد', value: 'mashhad' },
    { id: 3, title: 'اصفهان', value: 'esfahan' },
    { id: 4, title: 'کیش', value: 'kish' },
    { id: 5, title: 'قشم', value: 'gheshm' },
    { id: 6, title: 'تبریز', value: 'tabriz' },
    { id: 7, title: 'شمال', value: 'north' },
    { id: 8, title: 'جنوب', value: 'south' },
    { id: 9, title: 'اهواز', value: 'ahvaz' },
    { id: 10, title: 'سمنان', value: 'semnan' },
  ];

  const [city, setCity] = useState('');
  const isDesktop = useMediaQuery('(min-width: 992px)');

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={isDesktop ? 'lg' : 'full'} hideCloseButton>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center justify-between">
              <h3 className="text-dark text-base">لیست شهر ها</h3>

              <Button color="danger" size="md" variant="light" isIconOnly onPress={onClose}>
                <LuX size={20} />
              </Button>
            </ModalHeader>

            <ModalBody className="p-6 pt-0">
              <div className="w-full">
                <TextInput
                  name="search"
                  type="text"
                  variant="bordered"
                  size="md"
                  startContent={<LuSearch size={20} />}
                  placeholder="جستجو کنید"
                />
              </div>

              <ul className="flex h-[calc(100dvh_-_140px)] w-full flex-col items-start justify-start gap-2 overflow-y-auto pe-2 lg:max-h-[280px]">
                {cities.map((item) => (
                  <li key={item.id} className="w-full">
                    <Button
                      color="secondary"
                      variant="light"
                      className="w-full justify-start"
                      onPress={() => setCity(item.value)}
                    >
                      {item.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CitiesModal;
