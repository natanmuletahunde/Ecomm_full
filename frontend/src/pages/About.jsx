import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from '../components/NewslatterBox'

const About = () => {
  return (
    <><div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, maxime est soluta labore exercitationem harum, aspernatur quaerat aut suscipit, nulla quas officia consequuntur molestiae iusto odit sunt dolore voluptatibus nobis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur corporis eos, nobis tempora alias ratione eveniet nemo at. Fuga impedit itaque molestiae quasi, est laudantium expedita. Soluta, quibusdam nulla.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic explicabo asperiores dolore dolores ipsam dolorem magni odit dicta earum labore necessitatibus enim aliquam veritatis reiciendis nulla, ipsum mollitia dolor?</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod, blanditiis inventore aliquid asperiores perferendis odit perspiciatis velit, ipsam corporis nobis error sit quidem incidunt est dolorum dolores porro voluptatibus.</p>
        </div>

        <div className='border px-10 md:px py-8 sm:py-20 flex flex-col gap-5'>
          <b> Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod, blanditiis inventore aliquid asperiores perferendis odit perspiciatis velit, ipsam corporis nobis error sit quidem incidunt est dolorum dolores porro voluptatibus.</p>
        </div>
        <div className='border px-10 md:px py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod, blanditiis inventore aliquid asperiores perferendis odit perspiciatis velit, ipsam corporis nobis error sit quidem incidunt est dolorum dolores porro voluptatibus.</p>
        </div>
      </div>

    </div><NewsLatterBox /></>
  )

}
export default About
