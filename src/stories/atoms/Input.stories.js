import React from 'react';
import { Input } from '../../components';

export default {
  title: 'Diseño base/Atomos/Input',
  component: Input,
};
const Template = (args) => <Input {...args} ></Input>;




export const Default = Template.bind({});
Default.args = {
};
Default.decorators = [(Story) => <div style={{width: '500px', padding: "20px", backgroundColor: '#fff'}}><Story/></div>]