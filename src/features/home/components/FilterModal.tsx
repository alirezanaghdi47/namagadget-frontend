'use client';

// libraries
import { useMediaQuery } from 'usehooks-ts';
import { LuCar, LuCheck, LuChevronDown, LuChevronUp, LuHouse, LuMonitor, LuSofa, LuTrash2, LuX } from 'react-icons/lu';

// components
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@/components/Modal';
import { Button } from '@/components/Button';
import { Accordion, AccordionItem } from '@/components/Accordion';
import { SliderInput } from '@/components/SliderInput';
import { SwitchBox } from '@/components/SwitchBox';

// features
import useFilter from '@/features/home/hooks/useFilter';

// libs
import { formattedPrice } from '@/lib/price';

const FilterModal = ({ isOpen, onOpenChange }) => {
  const categories = [
    {
      id: 1,
      title: 'املاک',
      value: 'house',
      icon: LuHouse({ size: 20 }),
    },
    { id: 2, title: 'وسایل نقلیه', value: 'car', icon: LuCar({ size: 20 }) },
    { id: 3, title: 'کالای دیجیتال', value: 'monitor', icon: LuMonitor({ size: 20 }) },
    { id: 4, title: 'خانه و آشپزخانه', value: 'sofa', icon: LuSofa({ size: 20 }) },
  ];

  const { filters, changeFilters, resetFilters } = useFilter();
  const isDesktop = useMediaQuery('(min-width: 992px)');

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size={isDesktop ? 'lg' : 'full'}
      hideCloseButton
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-4">
                <h3 className="text-dark text-base">فیلتر ها</h3>

                {(filters.categories.length > 0 ||
                  !filters.hasImage ||
                  ![10000000, 50000000].every((price) => filters.prices.includes(price))) && (
                  <Button
                    color="danger"
                    size="sm"
                    variant="flat"
                    onPress={resetFilters}
                    startContent={<LuTrash2 size={16} />}
                  >
                    حذف فیلتر ها
                  </Button>
                )}
              </div>

              <Button color="danger" size="md" variant="light" isIconOnly onPress={onClose}>
                <LuX size={20} />
              </Button>
            </ModalHeader>

            <ModalBody className="px-6 py-0">
              <div className="dir-rtl flex w-full items-start justify-start gap-2">
                <Accordion selectionMode="multiple" className="w-full" disableIndicatorAnimation>
                  <AccordionItem
                    key="categories"
                    title="دسته بندی ها"
                    indicator={({ isOpen }) => (isOpen ? <LuChevronUp size={20} /> : <LuChevronDown size={20} />)}
                    classNames={{ title: 'text-secondary text-sm' }}
                  >
                    <ul className="grid w-full grid-cols-12 items-start justify-start gap-x-2 gap-y-4">
                      {categories.map((category) => (
                        <li key={category.id} className="col-span-4 flex items-center justify-center md:col-span-3">
                          <Button
                            size="sm"
                            color={filters.categories.includes(category.value) ? 'primary' : 'secondary'}
                            variant="light"
                            startContent={category.icon}
                            className="h-max flex-col p-2"
                            onPress={() => changeFilters('categories', category.value)}
                          >
                            {category.title}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>

                  <AccordionItem
                    key="price"
                    title="قیمت"
                    indicator={({ isOpen }) => (isOpen ? <LuChevronUp size={20} /> : <LuChevronDown size={20} />)}
                    classNames={{
                      content: 'flex flex-col justify-start items-start gap-4 w-full pb-4',
                      title: 'text-secondary text-sm',
                    }}
                  >
                    <div className="dir-ltr flex w-full flex-col items-start justify-start gap-4">
                      <SliderInput
                        value={filters.prices}
                        onChange={(values) => changeFilters('prices', values)}
                        minValue={0}
                        maxValue={100000000}
                        size="sm"
                        step={1}
                      />
                    </div>

                    <span className="flex w-full items-center justify-start gap-2 text-sm text-secondary">
                      {formattedPrice(filters.prices[0])}
                      <span className="text-xs">الی</span>
                      {formattedPrice(filters.prices[1])}
                      <span className="text-xs">تومان</span>
                    </span>
                  </AccordionItem>

                  <AccordionItem
                    key="status"
                    title="وضعیت"
                    indicator={({ isOpen }) => (isOpen ? <LuChevronUp size={20} /> : <LuChevronDown size={20} />)}
                    classNames={{ title: 'text-secondary text-sm' }}
                  >
                    <SwitchBox
                      size="sm"
                      classNames={{ label: 'text-secondary text-sm' }}
                      isSelected={filters.hasImage}
                      onChange={() => changeFilters('hasImage', !filters.hasImage)}
                    >
                      عکس دار
                    </SwitchBox>
                  </AccordionItem>
                </Accordion>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button color="danger" size="md" variant="light" onPress={onOpenChange} startContent={<LuX size={16} />}>
                انصراف
              </Button>

              <Button
                color="primary"
                size="md"
                variant="solid"
                onPress={onOpenChange}
                startContent={<LuCheck size={16} />}
              >
                ثبت
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default FilterModal;
