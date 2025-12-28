import CheckSvg from '@/assets/icons/check-svg';
import DownwardArrowSvg from '@/assets/icons/DownwardArrowSvg';
import MagnifierSvg from '@/assets/icons/MagnifierSvg';
import UpwardArrowSvg from '@/assets/icons/UpwardArrowSvg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatDate } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import {
  Dropdown as DropdownElement,
  MultiSelect,
} from 'react-native-element-dropdown';
import TextField from '../TextField/TextField';
import type { DropdownItem } from './Dropdown';

const SearchInput = ({ onSearch }: { onSearch: (text: string) => void }) => {
  return (
    <TextField
      size="small"
      containerStyle={styles.searchContainer}
      inputStyle={styles.searchInput}
      placeholder={'Tìm kiếm'}
      onChangeText={onSearch}
      left={
        <Box mb={2}>
          <MagnifierSvg />
        </Box>
      }
    />
  );
};

type DropdownComponentProps = {
  data: DropdownItem[];
  label?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  value?: string;
  values?: string[];
  isFocus: boolean;
  isRequired?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (item: string[] | DropdownItem) => void;
  dropdownStyle?: ViewStyle;
  onSearchExternal?: (text: string) => void;
  isMultiSelect?: boolean;
};

const DropdownComponent = ({
  data,
  label,
  placeholder,
  searchPlaceholder,
  value,
  values,
  isFocus,
  isRequired,
  onFocus,
  onBlur,
  onChange,
  dropdownStyle,
  onSearchExternal,
  isMultiSelect,
}: DropdownComponentProps) => {
  return (
    <Box>
      {label && (
        <Text color={colors.text[2]} fontSize={14}>
          {label} <Text color={colors.action.error}>{isRequired && '*'}</Text>
        </Text>
      )}
      <Box h={4} />
      {isMultiSelect ? (
        <MultiSelect
          style={[styles.dropdown, dropdownStyle]}
          placeholderStyle={styles.dropdownPlaceholder}
          selectedTextStyle={{
            fontSize: FontSize.LARGE,
            color: colors.text[3],
          }}
          inputSearchStyle={{
            color: colors.text[3],
            ...styles.dropdownInputSearch,
          }}
          searchPlaceholderTextColor={colors.grey[60]}
          renderRightIcon={() =>
            isFocus ? <UpwardArrowSvg /> : <DownwardArrowSvg />
          }
          itemTextStyle={{
            ...styles.dropdownPlaceholder,
            color: colors.text[3],
          }}
          containerStyle={{
            backgroundColor: colors.white,
          }}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          searchPlaceholder={searchPlaceholder}
          value={values}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          renderInputSearch={onSearch => (
            <SearchInput
              onSearch={onSearchExternal ? onSearchExternal : onSearch}
            />
          )}
          renderItem={(item, selected) => {
            return <RenderItem item={item} selected={selected} />;
          }}
          renderSelectedItem={(item, unSelect) => {
            return <RenderSelectedItem item={item} unSelect={unSelect} />;
          }}
        />
      ) : (
        <DropdownElement
          style={[styles.dropdown, dropdownStyle]}
          placeholderStyle={styles.dropdownPlaceholder}
          selectedTextStyle={{
            fontSize: FontSize.LARGE,
            color: colors.text[3],
          }}
          inputSearchStyle={{
            color: colors.text[3],
            ...styles.dropdownInputSearch,
          }}
          searchPlaceholderTextColor={colors.grey[60]}
          renderRightIcon={() =>
            isFocus ? <UpwardArrowSvg /> : <DownwardArrowSvg />
          }
          itemTextStyle={{
            ...styles.dropdownPlaceholder,
            color: colors.text[3],
          }}
          containerStyle={{
            backgroundColor: colors.white,
          }}
          data={data}
          search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          searchPlaceholder={searchPlaceholder}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          renderInputSearch={onSearch => (
            <SearchInput
              onSearch={onSearchExternal ? onSearchExternal : onSearch}
            />
          )}
          renderItem={(item, selected) => {
            return <RenderItem item={item} selected={selected} />;
          }}
        />
      )}
    </Box>
  );
};

type RenderItemProps = {
  item: DropdownItem;
  selected?: boolean;
};

const RenderItem = ({ item, selected }: RenderItemProps) => (
  <Box
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    py={10}
    px={16}
    bgColor={selected ? colors.blue : colors.white}
  >
    <Text fontSize={16} color={selected ? colors.white : colors.text[3]}>
      {item.label}
      {item.birthday && ` - ${formatDate(item.birthday)}`}
    </Text>
    {selected && <CheckSvg activeColor={colors.white} />}
  </Box>
);

type RenderSelectedItemProps = {
  item: DropdownItem;
  unSelect?: (item: DropdownItem) => void;
};

const RenderSelectedItem = ({ item, unSelect }: RenderSelectedItemProps) => (
  <Box
    flexDirection="row"
    alignItems="center"
    gap={8}
    marginTop={8}
    marginRight={8}
    padding={8}
    borderWidth={0.5}
    borderColor={colors.blue}
    borderRadius={8}
    onPress={() => unSelect && unSelect(item)}
  >
    <Text color={colors.text[3]}>
      {item.label} - {item.birthday ? formatDate(item.birthday) : ''}
    </Text>
    <AntDesign color={colors.text[3]} name="close" size={10} />
  </Box>
);

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 0.75,
    borderColor: colors.blue,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  dropdownPlaceholder: {
    fontSize: 16,
    color: colors.placeholder,
  },
  dropdownInputSearch: {
    margin: 6,
    borderRadius: 2,
  },
  searchContainer: {
    margin: 6,
  },
  searchInput: {
    fontSize: 16,
    paddingVertical: 12,
  },
});

export default DropdownComponent;
