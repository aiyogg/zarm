import { ReactNode } from 'react';

export type CheckboxType = 'button' | 'list';
export type CheckboxValue = number | string;
export type CheckboxGroupListMarkerAlign = 'before' | 'after';

export interface BaseCheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  value?: CheckboxValue;
  id?: string;
  listMarkerAlign?: CheckboxGroupListMarkerAlign;
  indeterminate?: boolean;
  children?: ReactNode;
}

export interface BaseCheckboxGroupProps {
  type?: CheckboxType;
  disabled?: boolean;
  block?: boolean;
  value?: Array<CheckboxValue>;
  defaultValue?: Array<CheckboxValue>;
  listMarkerAlign?: CheckboxGroupListMarkerAlign;
  onChange?: (value: Array<CheckboxValue>) => void;
  children?: ReactNode;
}
