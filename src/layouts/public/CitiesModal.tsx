// libraries
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { LuSearch, LuX } from 'react-icons/lu';

// components
import { Modal, ModalContent, ModalHeader, ModalBody } from '@/components/Modal';
import { Listbox, ListboxItem } from '@/components/List';
import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';

const CitiesModal = ({ isOpen, onOpenChange }) => {
  const cities = [
    { id: 1, title: 'تهران', value: 'tehran' },
    { id: 2, title: 'مشهد', value: 'tehran' },
    { id: 3, title: 'اصفهان', value: 'tehran' },
    { id: 4, title: 'کیش', value: 'tehran' },
    { id: 5, title: 'قشم', value: 'tehran' },
    { id: 6, title: 'تبریز', value: 'tehran' },
    { id: 7, title: 'شمال', value: 'tehran' },
    { id: 8, title: 'جنوب', value: 'tehran' },
    { id: 9, title: 'اهواز', value: 'tehran' },
    { id: 10, title: 'سمنان', value: 'tehran' },
    { id: 11, title: 'سمنان', value: 'tehran' },
    { id: 12, title: 'سمنان', value: 'tehran' },
    { id: 13, title: 'سمنان', value: 'tehran' },
    { id: 14, title: 'سمنان', value: 'tehran' },
    { id: 15, title: 'سمنان', value: 'tehran' },
    { id: 16, title: 'سمنان', value: 'tehran' },
    { id: 17, title: 'سمنان', value: 'tehran' },
    { id: 18, title: 'سمنان', value: 'tehran' },
    { id: 19, title: 'سمنان', value: 'tehran' },
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

              <Button color="danger" size="md" variant="light" isIcon onClick={onClose}>
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

              <div className="h-full w-full" id="virtualize-city-list">
                <Listbox
                  isVirtualized
                  variant="flat"
                  color="primary"
                  className="w-full"
                  classNames={{
                    base: 'p-0',
                  }}
                  virtualization={{
                    maxListboxHeight: isDesktop
                      ? 300
                      : document.getElementById('virtualize-city-list')?.clientHeight || 200,
                    itemHeight: 40,
                  }}
                  selectionMode="single"
                  selectedKeys={city}
                  onSelectionChange={setCity}
                  hideSelectedIcon
                >
                  {cities.map((city) => (
                    <ListboxItem key={city.id} value={city.value}>
                      {city.title}
                    </ListboxItem>
                  ))}
                </Listbox>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CitiesModal;
