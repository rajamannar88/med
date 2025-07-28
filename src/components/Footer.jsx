import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/*---left-section--*/}
        <div>
           <img className='mb-5 w-40' src={assets.logo} alt="" /> 
           <p className='w-full md:w-2/3 text-gray-600 leading-6'>Medivora is your all-in-one platform for hassle-free doctor appointments and trusted healthcare access. Whether you're booking an online consultation or scheduling a visit to your nearest clinic, Medivora ensures a smooth, secure, and reliable experience. We connect you with certified doctors across various specialties, making quality healthcare just a few taps away.</p>     
        
        </div>

        {/*---center-section--*/}
        <div>
            <p className='text-xl font-medium mb-5' >COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>

        </div>

        {/*---right-section--*/}
        <div >
            <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
               <ul className='flex flex-col gap-2 text-gray-600' >
                <li>7339553581</li>
                <li>rajamannar97@gmail.com</li>
               </ul>
        </div>
      </div>
      {/*---copy-rights text---*/}
            <div>
               <hr />
               <p className='py-5 text-sm text-center' >Copyright © 2024 Medivora - All Right Reserved.</p>

            </div>
    </div>
  )
}

export default Footer
