// libraries
import { Select as NextSelect, SelectItem as NextSelectItem } from '@nextui-org/react';

export const SelectBox = (props) => {
  return <NextSelect popoverProps={{ placement: 'bottom' }} {...props} />;
};

export const SelectBoxItem = NextSelectItem;
