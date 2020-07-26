import React from 'react'
import classNames  from 'classnames';


type MenuMode = 'horizontal | 'vertical';
// 接口定义属性
export interface MenuProps {
  defaultIndex?:number;
  className?:string;
  mode?: MenuMode;
  style?: React.CSSProperties;
}
