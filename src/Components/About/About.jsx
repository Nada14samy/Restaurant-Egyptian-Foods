import React from 'react';
import mashawe from '../../Image/mashawe.png';
import builder from '../../Image/builder.png';
import faveBean from '../../Image/fave-bean.png';
import aboutImage from '../../Image/about.png';

const About = () => {
  return (
    <>
    <section>
    {/* {Discount} */}
    <div className='grid lg:grid-cols-3 text-white p-[7%]'>
        <div className='bg-[#C10C0C] col-span-1 p-3 relative flex justify-between text-center'>
            <div>
                <h1 className='font-bold text-2xl'>Mashawe</h1>
                <h6 className='my-3 text-zinc-200'>20% <br />discount</h6>
                <b className='font-bold text-2xl'>$10.45</b>
            </div>
            <div>
                <img className='w-24' src={mashawe} alt="Mashawe" />
            </div>
        </div>
        <div className='bg-[#353535] col-span-1 p-3 relative flex justify-between text-center'>
            <div>
                <h1 className='font-bold text-2xl'>builder</h1>
                <h6 className='my-3 text-zinc-200'>20% <br />discount</h6>
                <b className='font-bold text-2xl'>$13.90</b>
            </div>
            <div>
                <img className='w-24' src={builder} alt="builder" />
            </div>
        </div>
        <div className='bg-[#FFB52C] col-span-1 p-3 relative flex justify-between text-center'>
            <div>
                <h1 className='font-bold text-2xl'>Fave Bean</h1>
                <h6 className='my-3 text-zinc-200'>20% <br />discount</h6>
                <b className='font-bold text-2xl'>$16.55</b>
            </div>
            <div>
                <img className='w-24' src={faveBean} alt="faveBean" />
            </div>
        </div>
    </div>
    {/* {about} */}
    <div className='about px-[7%] justify-between lg:flex grid lg:grid-cols-2 '>
        <div className='col-span-1 mt-[-40px]'>
            <img className='lg:place-self-start place-self-center lg:w-8/12' src={aboutImage} alt="About Image" />
        </div>
        <div className='text-black col-span-1 my-4 lg:w-7/12 lg:float-right'>
            <b className='text-5xl'>About House <span className='text-[#ED0707]'>Foods</span></b>
            <ul className='mt-8 font-medium list-disc list-inside text-3xl'>
                <li>Delicious & Healthy foods</li>
                <li>Best Price & Offers</li>
                <li>Fresh Vegetables</li>
                <li>Make with all love</li>
            </ul>
        </div>
    </div>
    </section>
      
    </>
  )
}

export default About
