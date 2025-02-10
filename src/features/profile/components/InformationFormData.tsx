'use client';

// libraries
import { LuCheck } from 'react-icons/lu';

// components
import { TextInput } from '@shared/components/TextInput';
import { Button } from '@shared/components/Button';
import { NumberInput } from '@shared/components/NumberInput';
import { DatePicker } from '@shared/components/DatePicker';

const InformationFormData = () => {
  return (
    <div className="flex w-full flex-col items-end justify-start gap-4">
      <TextInput
        name="username"
        label="نام کاربری"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        disabled
      />

      <TextInput
        name="username"
        label="نام و نام خانوادگی"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
      />

      <DatePicker name="code" label="روز ، ماه ، سال" isRequired />

      <NumberInput
        name="code"
        label="شماره موبایل"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
      />

      <Button color="primary" size="md" variant="solid" startContent={<LuCheck size={16} />}>
        ثبت
      </Button>
    </div>
  );
};

export default InformationFormData;
