// libraries
import { useState } from 'react';
import { Listbox, ListboxItem } from '@nextui-org/react';
import { useMediaQuery } from 'usehooks-ts';
import { LuChevronLeft, LuChevronRight, LuSearch, LuX } from 'react-icons/lu';

// libraries
import { Modal, ModalContent, ModalHeader, ModalBody } from '@/components/Modal';
import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';

const CategoriesModal = ({ isOpen, onOpenChange }) => {
  const categories = [
    {
      id: 1,
      title: 'املاک',
      value: 'tehran',
      children: [
        { id: 11, title: 'مسکونی', value: 'tehran' },
        { id: 12, title: 'اجاره', value: 'tehran' },
        { id: 13, title: 'اداری', value: 'tehran' },
      ],
    },
    { id: 2, title: 'وسایل نقلیه', value: 'tehran' },
    { id: 3, title: 'کالای دیجیتال', value: 'tehran' },
    { id: 4, title: 'خانه و آشپزخانه', value: 'tehran' },
    { id: 5, title: 'خدمات', value: 'tehran' },
    { id: 6, title: 'وسایل شخصی', value: 'tehran' },
  ];

  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const isDesktop = useMediaQuery('(min-width: 992px)');

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={isDesktop ? 'lg' : 'full'} hideCloseButton>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                {category && (
                  <Button color="secondary" size="md" variant="light" isIconOnly onPress={() => setCategory('')}>
                    <LuChevronRight size={20} />
                  </Button>
                )}

                <h3 className="text-dark text-base">
                  {category
                    ? categories.find((item) => item.id?.toString() === category.currentKey?.toString())?.title
                    : 'لیست دسته ها'}
                </h3>
              </div>

              <Button color="danger" size="md" variant="light" isIconOnly onPress={onClose}>
                <LuX size={20} />
              </Button>
            </ModalHeader>

            <ModalBody>
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

              <div className="h-full w-full" id="virtualize-category-list">
                {!category ? (
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
                        : document.getElementById('virtualize-category-list')?.clientHeight || 200,
                      itemHeight: 40,
                    }}
                    selectionMode="single"
                    selectedKeys={category}
                    onSelectionChange={setCategory}
                    hideSelectedIcon
                  >
                    {categories.map((category) => (
                      <ListboxItem
                        key={category.id}
                        value={category.value}
                        endContent={<LuChevronLeft size={20} />}
                        hideSelectedIcon
                      >
                        {category.title}
                      </ListboxItem>
                    ))}
                  </Listbox>
                ) : (
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
                        : document.getElementById('virtualize-category-list')?.clientHeight || 200,
                      itemHeight: 40,
                    }}
                    selectionMode="single"
                    selectedKeys={subCategory}
                    onSelectionChange={setSubCategory}
                    hideSelectedIcon
                  >
                    {categories
                      .find((item) => item.id?.toString() === category.currentKey?.toString())
                      .children.map((category) => (
                        <ListboxItem
                          key={category.id}
                          value={category.value}
                          endContent={<LuChevronLeft size={20} />}
                          hideSelectedIcon
                        >
                          {category.title}
                        </ListboxItem>
                      ))}
                  </Listbox>
                )}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CategoriesModal;
