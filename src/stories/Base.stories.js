import React from 'react';

const Base = () => {
  return <div>
    <h3>=== Texto ===</h3>
    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
    <h4>H4</h4>
    <h5>H5</h5>
    <h6>H6</h6>

    <p>Texto normal</p>

    <br></br><br></br>
    <h3>=== Colores ===</h3>
    <span class="bg-primary text-white">Fondo primario</span>
    <br></br><span class="bg-secondary text-white">Fondo secundario</span>

    <br></br><br></br>
    <span class="text-primary">Texto primario</span>
    <br></br><span class="text-secondary">Texto secundario</span>
    <br></br><span class="text-tertiary">Texto terciario</span>
    <br></br><span class="bg-secondary text-white">Texto blanco</span>
  </div>
}

export default {
  title: 'Introducción/Diseño base',
  component: Base,
};
const Template = (args) => <Base>CREAR CUENTA</Base>






export const Bases = Template.bind({});
Bases.args = {
};
Bases.decorators = [(Story) => <div style={{padding: '30px'}}><Story/></div>]