// libraries
import { useMediaQuery } from 'usehooks-ts';
import { LuChevronDown, LuChevronUp, LuX } from 'react-icons/lu';

// libraries
import { Modal, ModalContent, ModalHeader, ModalBody } from '@/components/Modal';
import { Button } from '@/components/Button';
import { Accordion, AccordionItem } from '@/components/Accordion';

const FilterModal = ({ isOpen, onOpenChange }) => {
  const isDesktop = useMediaQuery('(min-width: 992px)');

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={isDesktop ? 'lg' : 'full'} hideCloseButton>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center justify-between">
              <h3 className="text-dark text-base">لیست دسته ها</h3>

              <Button color="danger" size="md" variant="light" isIconOnly onPress={onClose}>
                <LuX size={20} />
              </Button>
            </ModalHeader>

            <ModalBody>
              <div className="flex w-full items-center justify-between gap-2">
                <Button color="danger" size="sm" variant="light" endContent={<LuX size={16} />}>
                  حذف فیلتر ها
                </Button>

                <h3 className="text-base text-secondary">فیلتر ها</h3>
              </div>

              <div className="dir-rtl flex w-full items-start justify-start gap-2">
                <Accordion selectionMode="multiple" className="w-full" disableIndicatorAnimation>
                  <AccordionItem
                    key="1"
                    title="قیمت"
                    indicator={({ isOpen }) => (isOpen ? <LuChevronUp size={20} /> : <LuChevronDown size={20} />)}
                  ></AccordionItem>
                  <AccordionItem
                    key="2"
                    title="وضعیت"
                    indicator={({ isOpen }) => (isOpen ? <LuChevronUp size={20} /> : <LuChevronDown size={20} />)}
                  ></AccordionItem>
                </Accordion>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default FilterModal;
