import React from 'react'
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className = 'w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
             making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
             obscure Latin words, consectetur, 
            from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
             obscure Latin words, consectetur, 
            from a Lorem Ipsum passage, and going through the cites.</p>
        </div>

      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
             obscure Latin words, consectetur, 
            from a Lorem Ipsum passage, and going through the cites.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
             obscure Latin words, consectetur, 
            from a Lorem Ipsum passage, and going through the cites.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
             obscure Latin words, consectetur, 
            from a Lorem Ipsum passage, and going through the cites.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
