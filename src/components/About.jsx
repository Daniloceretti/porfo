import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-lime-200'>
              Acerca de mi
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola. Soy Danilo, encantado de conocerte. Te cuento un poco sobre mi.</p>
            </div>
            <div>
              <p>Luego de varios años trabajando en Marketing Digital en diferentes roles como analista, gerente y lider de equipo, decidí cambiar mi rumbo profesional y dedicarme al desarrollo web con lenguaje JavaScript. En esta área encontré una nueva vocación en la que tengo el desafío de implementar mis habilidades blandas ya adquiridas y mejorar mis habilidades técnicas.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;