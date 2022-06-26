import React from 'react';
import { Icon } from '../../components';
import iconImage from '../../assets/img/bookmark.svg'

export default {
  title: 'Diseño base/Atomos/Icon',
  component: Icon,
};
const Template = (args) => <Icon {...args} ></Icon>;




export const Default = Template.bind({});
Default.args = {
  src: iconImage
};
Default.decorators = [(Story) => <div style={{width: '500px', padding: "20px"}}><Story/></div>]