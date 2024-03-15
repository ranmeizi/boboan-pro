import { ProForm, ProFieldFCRenderProps } from '@ant-design/pro-components';
import _ from 'lodash';
import React,{ HTMLAttributes, useMemo } from 'react';

type CommonProps = {
  getValuePath?: string; // _.get
};

type ShowValueProps = CommonProps & Partial<ProFieldFCRenderProps> & HTMLAttributes<HTMLDivElement>;

/**
 * ShowValue
 * 
 * 使用 _.get 获取 object value 的值
 */
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

/**
 * ShowOtherValue
 * 
 * 使用 ProForm.useWatch 配合 ShowValue 显示另一个 form field 的值
 */
export function ShowOtherValue({ watch, ...props }: ShowOtherValueProps) {
  const value = ProForm.useWatch(watch);
  return <ShowValue value={value} {...props} />;
}
