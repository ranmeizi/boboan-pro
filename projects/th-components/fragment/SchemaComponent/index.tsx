import {
    ConfigContextPropsType,
    ProFormColumnsType,
    ProProvider,
  } from '@ant-design/pro-components';
  import React,{ useContext } from 'react';
  
  type ValueMapType = ConfigContextPropsType['valueTypeMap'];
  
  type SchemaComponentProps<T = any, ValueTypes = never> = {
    valueTypeMap?: ValueMapType; // 外部传入的component
    columns?: ProFormColumnsType<T, ValueTypes>[];
    dataSource?: T;
    request?: () => Promise<T>;
  };
  
  function renderer<T = any, ValueTypes = never>(
    config: ProFormColumnsType<T, ValueTypes>,
    valueTypeMap: ValueMapType,
  ) {
    const { render } = valueTypeMap?.[config.valueType as any] || { render: () => null };
    const { fieldProps = {} } = config;
  
    return render!(undefined, fieldProps as any, <></>);
  }
  
  function SchemaComponent<T = any, ValueTypes = never>({
    columns = [],
    valueTypeMap: exValueTypeMap,
  }: SchemaComponentProps<T, ValueTypes>) {
    const { valueTypeMap } = useContext(ProProvider);
  
    return columns.map((item) => renderer(item, { ...valueTypeMap, ...exValueTypeMap }));
  }
  
  export { SchemaComponent };
  