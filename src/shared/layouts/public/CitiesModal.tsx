'use client';

// libraries
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { LuSearch, LuX } from 'react-icons/lu';

// components
import { Modal, ModalContent, ModalHeader, ModalBody } from '@shared/components/Modal';
import { Button } from '@shared/components/Button';
import { TextInput } from '@shared/components/TextInput';
import { List, ListItem } from '@shared/components/List';

const CitiesModal = ({ isOpen, onOpenChange }) => {
  const [city, setCity] = useState('');
  const isDesktop = useMediaQuery('(min-width: 992px)');

  const handleSelectCity = (value) => {
    setCity(value);
    onOpenChange();
  };

  const cityList = [
    { id: 1, label: 'تهران', value: 'tehran' },
    { id: 2, label: 'مشهد', value: 'mashhad' },
    { id: 3, label: 'اصفهان', value: 'esfahan' },
    { id: 4, label: 'کیش', value: 'kish' },
    { id: 5, label: 'قشم', value: 'gheshm' },
    { id: 6, label: 'تبریز', value: 'tabriz' },
    { id: 7, label: 'شمال', value: 'north' },
    { id: 8, label: 'جنوب', value: 'south' },
    { id: 9, label: 'اهواز', value: 'ahvaz' },
    { id: 10, label: 'سمنان', value: 'semnan' },
  ];

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

              <List
                onAction={(key) => handleSelectCity(key)}
                selectionMode="single"
                hideSelectedIcon
                className="h-[calc(100dvh_-_140px)] overflow-y-auto lg:max-h-[280px] custom-scrollbar"
              >
                {cityList.map((cityItem) => (
                  <ListItem
                    key={cityItem.value}
                    color={city === cityItem.value ? 'primary' : 'secondary'}
                    variant={city === cityItem.value ? 'solid' : 'flat'}
                  >
                    {cityItem.label}
                  </ListItem>
                ))}
              </List>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CitiesModal;
