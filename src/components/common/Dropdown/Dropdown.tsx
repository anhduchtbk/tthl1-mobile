import React, { useState } from 'react';
import type { Control, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { ViewStyle } from 'react-native';
import DropdownComponent from './DropdownComponent';

export type DropdownItem = {
  label: string;
  value: string;
  birthday?: string;
};

export type DropdownProps = {
  data: DropdownItem[];
  label?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  control?: Control<any>;
  name?: Path<any>;
  value?: string;
  values?: string[];
  isRequired?: boolean;
  onChange?: (value: any) => void;
  dropdownStyle?: ViewStyle;
  onSearchExternal?: (text: string) => void;
  isMultiSelect?: boolean;
  error?: string;
};

const Dropdown = ({
  data,
  label,
  placeholder,
  searchPlaceholder,
  control,
  name,
  value: externalValue,
  values: externalValues,
  isRequired,
  onChange: externalOnChange,
  dropdownStyle,
  onSearchExternal,
  isMultiSelect = false,
  error,
}: DropdownProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [internalValue, setInternalValue] = useState<string | null>(
    externalValue || null
  );
  const [internalValues, setInternalValues] = useState<string[]>(
    externalValues || []
  );
  const controllerResult =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    control && name ? useController({ name, control }) : null;

  const handleChange = (item: string[] | DropdownItem) => {
    if (Array.isArray(item)) {
      setInternalValues(item);
      externalOnChange?.(item);
    } else {
      setInternalValue(item.value);
      externalOnChange?.(item.value);
    }
    // if (controllerResult) {
    //   controllerResult.field.onChange(newValue);
    // } else {
    //   setInternalValue(newValue);
    //   externalOnChange?.(newValue);
    // }
    setIsFocus(false);
  };

  const currentValue = controllerResult
    ? controllerResult.field.value
    : isMultiSelect
    ? internalValues
    : internalValue;

  return (
    <DropdownComponent
      data={data}
      label={label}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      value={isMultiSelect ? undefined : currentValue}
      values={isMultiSelect ? currentValue : []}
      isFocus={isFocus}
      isRequired={isRequired}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={handleChange}
      dropdownStyle={dropdownStyle}
      onSearchExternal={onSearchExternal}
      isMultiSelect={isMultiSelect}
      error={error}
    />
  );
};

export default Dropdown;
