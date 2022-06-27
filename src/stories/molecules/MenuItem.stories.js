import React from 'react';
import { MenuItem } from '../../components';
import bookmark from '../../assets/img/bookmark-white.svg'

export default {
  title: 'Diseño base/Moléculas/MenuItem',
  component: MenuItem
};
const Template = (args) => <MenuItem {...args} ></MenuItem>;




export const Default = Template.bind({});
Default.args = {
  iconSrc: bookmark,
  label: 'FAVORITOS'
};
Default.decorators = [(Story) => <div style={{width: '100%', maxWidth: '600px', padding: "20px", boxSizing: 'border-box'}}><Story/></div>]