import React from 'react';
import { HouseCard } from '../../components';
import image from '../../../public/img/draco.png'

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
  },
  isFavorite: false
}

export default {
  title: 'Diseño base/Moléculas/HouseCard',
  component: HouseCard,
  args: {
    character
  }
};
const Template = (args) => <HouseCard {...args} ></HouseCard>;




export const Default = Template.bind({});
Default.args = {
  
};
Default.decorators = [(Story) => <div style={{width: '100%', maxWidth: '600px', padding: "20px", boxSizing: 'border-box'}}><Story/></div>]




export const Favorite = Template.bind({});
Favorite.args = {
  character: {
    ...character,
    isFavorite: true
  }
};
Favorite.decorators = [(Story) => <div style={{width: '100%', maxWidth: '600px', padding: "20px", boxSizing: 'border-box'}}><Story/></div>]




export const Dead = Template.bind({});
Dead.args = {
  character: {
    ...character,
    status: 'Muerto'
  }
};
Dead.decorators = [(Story) => <div style={{width: '100%', maxWidth: '600px', padding: "20px", boxSizing: 'border-box'}}><Story/></div>]





export const TwoCards = Template.bind({});
TwoCards.args = {
  
};
TwoCards.decorators = [(Story) => <div style={{width: '100%', padding: "20px", boxSizing: 'border-box', display: 'flex'}}>
  <div style={{width: '50%', padding: '0 2px'}}>
    <Story/>
  </div>
  <div style={{width: '50%', padding: '0 2px'}}>
    <Story/>
  </div>
</div>]