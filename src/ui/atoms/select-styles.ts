import { theme } from '@theme';

const { colors } = theme;

export const selectStyles = {
  container: (provided: { [key: string]: any }) => ({
    ...provided,
    marginTop: 10
  }),
  control: (provided: { [key: string]: any }, { selectProps: { error } }) => ({
    ...provided,
    borderRadius: 20,
    height: 40,
    backgroundColor: colors.dark,
    boxShadow: 'none',
    border: `1px solid ${error ? colors.error : colors.dark}`,
    ':hover': {
      border: `1px solid ${error ? colors.error : colors.dark}`
    },
    ':active': {
      border: `1px solid ${error ? colors.error : colors.dark}`
    }
  }),
  placeholder: (provided: { [key: string]: any }) => ({
    ...provided,
    color: colors.gray
  }),
  valueContainer: (provided: { [key: string]: any }) => ({
    ...provided,
    paddingLeft: 20
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: (provided: { [key: string]: any }) => ({
    ...provided,
    color: colors.gray,
    ':hover': {
      color: colors.gray
    },
    ':active': {
      color: colors.gray
    }
  }),
  menuList: (provided: { [key: string]: any }) => ({
    ...provided,
    backgroundColor: colors.dark,
    borderRadius: 10
  }),
  menu: (provided: { [key: string]: any }) => ({
    ...provided,
    backgroundColor: colors.dark,
    borderRadius: 10
  }),
  noOptionsMessage: (provided: { [key: string]: any }) => ({
    ...provided,
    color: colors.gray
  }),
  singleValue: (provided: { [key: string]: any }) => ({
    ...provided,
    color: colors.light
  }),
  option: (provided: { [key: string]: any }, { isSelected }) => ({
    ...provided,
    backgroundColor: isSelected ? colors.primary : colors.dark,
    color: colors.light,
    ':hover': {
      backgroundColor: colors.primary
    },
    ':active': {
      backgroundColor: colors.primary
    }
  }),
  multiValue: (provided: { [key: string]: any }) => ({
    ...provided,
    backgroundColor: colors.background,
    borderRadius: 14,
    padding: '4px 4px 4px 8px'
  }),
  multiValueLabel: (provided: { [key: string]: any }) => ({
    ...provided,
    color: colors.light
  }),
  multiValueRemove: (provided: { [key: string]: any }) => ({
    ...provided,
    color: colors.light
  })
};
