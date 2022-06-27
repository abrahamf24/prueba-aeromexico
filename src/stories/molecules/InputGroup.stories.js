import React from 'react';
import { Input, InputGroup } from '../../components';

export default {
  title: 'Diseño base/Moléculas/InputGroup',
  component: InputGroup
};
const Template = (args) => <InputGroup {...args} ></InputGroup>;




export const Default = Template.bind({});
Default.args = {
  label: 'Nombre',
  children: <Input></Input>
};
Default.decorators = [(Story) => <div style={{width: '100%', maxWidth: '600px', padding: "20px", boxSizing: 'border-box', backgroundColor: '#fff'}}><Story/></div>]