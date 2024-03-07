import { ProForm, ProFormFieldSetProps } from '@ant-design/pro-components';
import _ from 'lodash';
import React,{ HTMLAttributes, useMemo } from 'react';

type CommonProps = {
  getValuePath?: string; // _.get
};

type ShowValueProps = CommonProps & ProFormFieldSetProps & HTMLAttributes<HTMLDivElement>;

export function ShowValue({ value, getValuePath = '', ...props }: ShowValueProps) {
  const val = useMemo(() => {
    if (!getValuePath) {
      return value;
    }

    return _.get(value, getValuePath);
  }, [getValuePath, value]);

  return <div {...props}>{val}</div>;
}

type ShowOtherValueProps = {
  watch: string;
} & ShowValueProps;

export function ShowOtherValue({ watch, ...props }: ShowOtherValueProps) {
  const value = ProForm.useWatch(watch);
  return <ShowValue value={value} {...props} />;
}
