import DownwardArrowSvg from '@/assets/icons/DownwardArrowSvg';
import MagnifierSvg from '@/assets/icons/MagnifierSvg';
import UpwardArrowSvg from '@/assets/icons/UpwardArrowSvg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown as DropdownElement } from 'react-native-element-dropdown';
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
  value: string | null;
  isFocus: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (item: DropdownItem) => void;
};

const DropdownComponent = ({
  data,
  label,
  placeholder,
  searchPlaceholder,
  value,
  isFocus,
  onFocus,
  onBlur,
  onChange,
}: DropdownComponentProps) => {
  const { colors } = useTheme();

  return (
    <Box>
      {label && (
        <Text color={colors.text} fontSize={14}>
          {label}
        </Text>
      )}
      <Box h={6} />
      <DropdownElement
        style={[
          styles.dropdown,
          {
            borderColor: value ? colors.grey[60] : colors.grey[60],
          },
        ]}
        placeholderStyle={{
          ...styles.dropdownPlaceholder,
          color: colors.grey[60],
        }}
        selectedTextStyle={{
          ...styles.dropdownPlaceholder,
          color: colors.text,
        }}
        inputSearchStyle={{
          color: colors.text,
          ...styles.dropdownInputSearch,
        }}
        searchPlaceholderTextColor={colors.grey[60]}
        renderRightIcon={() =>
          isFocus ? <UpwardArrowSvg /> : <DownwardArrowSvg/>
        }
        itemTextStyle={{
          ...styles.dropdownPlaceholder,
          color: colors.text,
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
        renderInputSearch={onSearch => <SearchInput onSearch={onSearch} />}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  dropdownPlaceholder: {
    fontSize: 14,
  },
  dropdownInputSearch: {
    fontSize: 12,
    margin: 6,
    borderRadius: 2,
  },
  searchContainer: {
    margin: 6,
  },
  searchInput: {
    fontSize: 12,
    paddingVertical: 16,
  },
});

export default DropdownComponent;
