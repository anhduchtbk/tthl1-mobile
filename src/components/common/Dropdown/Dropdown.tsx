import React, { useState } from 'react';
import type { Control, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { ViewStyle } from 'react-native';
import DropdownComponent from './DropdownComponent';

export type DropdownItem = {
  label: string;
  value: string;
};

export type DropdownProps = {
  data: DropdownItem[];
  label?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  control?: Control<any>;
  name?: Path<any>;
  value?: string;
  isRequired?: boolean;
  onChange?: (value: string) => void;
  dropdownStyle?: ViewStyle;
};

const Dropdown = ({
  data,
  label,
  placeholder,
  searchPlaceholder,
  control,
  name,
  value: externalValue,
  isRequired,
  onChange: externalOnChange,
  dropdownStyle
}: DropdownProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [internalValue, setInternalValue] = useState<string | null>(
    externalValue || null
  );
  const controllerResult =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    control && name ? useController({ name, control }) : null;

  const handleChange = (item: DropdownItem) => {
    const newValue = item.value;
    if (controllerResult) {
      controllerResult.field.onChange(newValue);
    } else {
      setInternalValue(newValue);
      externalOnChange?.(newValue);
    }
    setIsFocus(false);
  };

  const currentValue = controllerResult
    ? controllerResult.field.value
    : internalValue;

  return (
    <DropdownComponent
      data={data}
      label={label}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      value={currentValue}
      isFocus={isFocus}
      isRequired={isRequired}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={handleChange}
      dropdownStyle={dropdownStyle}
    />
  );
};

export default Dropdown;
