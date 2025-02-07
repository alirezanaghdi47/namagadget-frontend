'use client';

// libraries
import { useState } from 'react';
import Image from 'next/image';
import { LuCar, LuCheck, LuHouse, LuMonitor, LuPencil, LuPlus, LuSofa, LuTrash2, LuX } from 'react-icons/lu';

// components
import { TextInput } from '@/components/TextInput';
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';
import { SelectBox, SelectBoxItem } from '@/components/SelectBox';
import { LocationPicker } from '@/components/LocationPicker';
import { ImageInput } from '@/components/ImageInput';
import { NumberInput } from '@/components/NumberInput';

const PropertiesInput = ({ properties, setProperties }) => {
  return (
    <div className="mt-4 flex w-full flex-col items-start justify-start gap-4">
      <div className="flex w-full items-center justify-between gap-4">
        <h3 className="flex items-center justify-start gap-1 text-base text-default-foreground">ویژگی ها</h3>

        <Button
          color="primary"
          size="md"
          variant="flat"
          startContent={<LuPlus size={16} />}
          onPress={() =>
            setProperties((prevState) => [
              ...prevState,
              {
                id: properties.length + 1,
                title: '',
                value: '',
              },
            ])
          }
        >
          افزودن ویژگی
        </Button>
      </div>

      {properties.length > 0 ? (
        <ul className="flex w-full flex-col items-start justify-start gap-2">
          {properties.map((property) => (
            <li key={property.id} className="grid w-full grid-cols-3 items-start justify-start gap-4">
              <div className="col-span-1">
                <TextInput
                  type="text"
                  name={`property-${property.title}`}
                  label="عنوان"
                  placeholder=" "
                  labelPlacement="outside"
                  variant="flat"
                  size="md"
                  isRequired
                />
              </div>

              <div className="col-span-2 flex items-end justify-end gap-2">
                <TextInput
                  type="text"
                  name={`property-${property.value}`}
                  label="توضیحات"
                  placeholder=" "
                  labelPlacement="outside"
                  variant="flat"
                  size="md"
                  isRequired
                />

                <Button
                  color="danger"
                  variant="flat"
                  isIconOnly
                  onPress={() => setProperties((prevState) => prevState.filter((item) => item.id !== property.id))}
                >
                  <LuTrash2 size={20} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <Image
            src="/assets/images/no-data.svg"
            alt="ویژگی یافت نشد"
            width={100}
            height={100}
            className="h-full w-32"
          />

          <span className="text-sm font-bold text-secondary">ویژگی ثبت نشده</span>
        </div>
      )}
    </div>
  );
};

const UpdateFormData = () => {
  const [properties, setProperties] = useState([]);

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

  return (
    <div className="flex w-full flex-col items-end justify-start gap-4">
      <SelectBox
        name="category"
        label="دسته بندی"
        labelPlacement="outside"
        variant="flat"
        size="md"
        placeholder=" "
        selectionMode="single"
        isRequired
      >
        {categories.map((category) => (
          <SelectBoxItem key={category.value} startContent={category.icon}>
            {category.title}
          </SelectBoxItem>
        ))}
      </SelectBox>

      <SelectBox
        name="city"
        label="شهر"
        labelPlacement="outside"
        variant="flat"
        size="md"
        placeholder=" "
        selectionMode="single"
        isRequired
      >
        {cities.map((city) => (
          <SelectBoxItem key={city.value}>{city.title}</SelectBoxItem>
        ))}
      </SelectBox>

      <LocationPicker name="location" label="موقعیت مکانی" isRequired />

      <ImageInput name="images" label="عکس ها" isRequired />

      <TextInput
        type="text"
        name="title"
        label="عنوان"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
      />

      <Textarea name="description" label="توضیحات" placeholder=" " labelPlacement="outside" variant="flat" size="md" />

      <NumberInput
        name="code"
        label="قیمت"
        placeholder=" "
        labelPlacement="outside"
        variant="flat"
        size="md"
        isRequired
        endContent={<span className="text-sm text-secondary">تومان</span>}
      />

      <PropertiesInput properties={properties} setProperties={setProperties} />

      <div className="flex w-full items-center justify-end gap-4">
        <Button color="danger" size="md" variant="light" startContent={<LuX size={16} />}>
          انصراف
        </Button>

        <Button color="warning" size="md" variant="solid" startContent={<LuPencil size={16} />}>
          ویرایش
        </Button>
      </div>
    </div>
  );
};

export default UpdateFormData;
