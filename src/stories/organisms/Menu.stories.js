import React from 'react';
import { Menu } from '../../components';
import image from '../../assets/img/draco.png'

export default {
  title: 'Diseño base/Organismos/Menu',
  component: Menu
};
const Template = (args) => <Menu {...args} ></Menu>;

const character = {
  picture: image,
  house: 'Slytherin',
  status: 'Vivo',
  type: 'Estudiante',
  name: 'Draco Malfoy',
  characteristics: {
    'Cumpleaños': '31-07-1980',
    'Género': 'Male',
    'Color de ojos': 'Green',
    'Color de pelo': 'Blonde',
  }
}



export const Default = Template.bind({});
Default.args = {
  favorites: [
    character,
    character,
    character,
    character,
    character
  ]
};
Default.decorators = [(Story) => <div style={{width: '100%', maxWidth: '600px', padding: "20px", boxSizing: 'border-box'}}><Story/></div>]