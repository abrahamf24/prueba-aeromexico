import React from 'react';
import { Button, Modal } from '../../components';

export default {
  title: 'Diseño base/Moléculas/Modal',
  component: Modal,
};
const Template = (args) => <Modal {...args} ></Modal>;




export const Default = Template.bind({});
Default.args = {
  show: true,
  title: 'Agrega un personaje ',
  children: <div>
    Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
    <br/>Content
  </div>,
  footer: <>
    <Button>GUARDAR</Button>
  </>
};