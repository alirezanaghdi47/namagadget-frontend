// libraries
import { useState } from 'react';
import { format, getYear } from 'date-fns-jalali';

// components
import { SelectBox, SelectBoxItem } from '@/components/SelectBox';

// libs
import { rangeArray } from '@/lib/utils';

const DatePicker = ({ name, label, isRequired, value, onChange }) => {
  const [date, setData] = useState({
    year: '',
    month: '',
    day: '',
  });

  const years = rangeArray(getYear(new Date()), getYear(new Date()) - 100, -1).map((item) => ({
    title: item.toString(),
    value: item.toString(),
  }));
  const months = rangeArray(2, 13, 1).map((item, index) => ({
    title: format(new Date().setMonth(item), 'LLLL'),
    value: (index + 1).toString(),
  }));
  const days = rangeArray(1, 31, 1).map((item) => ({ title: item.toString(), value: item.toString() }));

  return (
    <div className="grid w-full grid-cols-3 items-center justify-start gap-2">
      <SelectBox
        name={`day-${name}`}
        label={label.split('،')[0]}
        placeholder=" "
        isRequired={isRequired}
        labelPlacement="outside"
        variant="flat"
        size="md"
        selectedKeys={date.day}
        onChange={(e) => setData((prevState) => ({ ...prevState, day: e.target.value }))}
      >
        {days.map((day) => (
          <SelectBoxItem key={day.value}>{day.title}</SelectBoxItem>
        ))}
      </SelectBox>

      <SelectBox
        name={`month-${name}`}
        label={label.split('،')[1]}
        placeholder=" "
        isRequired={isRequired}
        labelPlacement="outside"
        variant="flat"
        size="md"
        selectedKeys={date.month}
        onChange={(e) => setData((prevState) => ({ ...prevState, month: e.target.value }))}
      >
        {months.map((month) => (
          <SelectBoxItem key={month.value}>{month.title}</SelectBoxItem>
        ))}
      </SelectBox>

      <SelectBox
        name={`year-${name}`}
        label={label.split('،')[2]}
        placeholder=" "
        isRequired={isRequired}
        labelPlacement="outside"
        variant="flat"
        size="md"
        selectedKeys={date.year}
        onChange={(e) => setData((prevState) => ({ ...prevState, year: e.target.value }))}
      >
        {years.map((year) => (
          <SelectBoxItem key={year.value}>{year.title}</SelectBoxItem>
        ))}
      </SelectBox>
    </div>
  );
};

export default DatePicker;
