import React from 'react';
import { Button } from '../../components';

export default {
  title: 'Diseño base/Atomos/Button',
  component: Button,
};
const Template = (args) => <Button {...args} >ESTUDIANTES</Button>;






export const Default = Template.bind({});
Default.args = {
  
};
Default.decorators = [(Story) => <div style={{width: '500px', padding: "20px"}}><Story/></div>]