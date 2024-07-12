import React from 'react'
import Cardimg1 from '../assets/images/webp/Rectangle1.webp'
import Commonbtn from './Commonbtn'
import Cardimg2 from '../assets/images/webp/Rectangle2.webp'
import Topvector from '../assets/images/webp/vectortop.png'
import Bottomvector from '../assets/images/webp/vectorbottom.png'


const HeroSection = () => {
    return (
        <section className=' relative'>
            <div className=" absolute top-0 left-0 "> <img src={Topvector} alt="" /></div>
            <div className=" absolute  bottom-0 right-0"> <img src={Bottomvector} alt="" /></div>
            <div className="max-w-[1140px] mx-auto px-[12px]  z-10  relative  pt-[42px] pb-[43px]">
                <div className="bg-whitesmoke sm:pb-[40px] pb-[20px] sm:px-[20px]">
                    <div className="flex sm:pt-10 pt-[25px] items-center justify-center gap-[15px]">
                        <span className='h-[2px] w-[60px] bg-lightgreen  block'></span>
                        <h3 className='font-kaushan  font-normal text-[32px] leading-[32px] text-lightgreen text-center '>Technology</h3>
                        <span className='h-[2px] w-[60px] bg-lightgreen  block'></span>
                    </div>
                
                    <div className="flex  justify-center  ">
                        <h1 className='sm:text-[48px] text-[36px] text-center font-archivo font-semibold max-w-[799px] pt-2.5 sm:leading-[62px] leading-[52px]'>Devices and Treatments to meet your needs</h1>
                    </div>
                    <div className="flex flex-row flex-wrap sm:pt-[60px] pt-[40px]">
                        <div className="sm:w-6/12 w-full px-[20px]">
                            <div className=" bg-white border-[1.09px] border-solid border-[#0000001A] hover:shadow-cardshow duration-300">
                                <img src={Cardimg1} alt="cardimg" className='w-full' />
                                <div className="sm:p-[30px] p-[20px]">
                                    <h5 className='text-black font-archivo font-semibold text-[25px] leading-[32px]'>Devices</h5>
                                    <h6 className=' font-archivo font-normal text-[16px] leading-[24px] pt-4 sm:pb-[27px] pb-[20px]'>Our state-of-the-art devices are designed to target a variety of skin concerns with precision and efficacy.</h6>
                                    <Commonbtn name="Our Devices" />
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-6/12 w-full px-[20px] sm:pt-0 pt-5">
                            <div className=" bg-white border-[1.09px] border-solid border-[#0000001A] hover:shadow-cardshow duration-300">
                                <img src={Cardimg2} alt="cardimg" className='w-full' />
                                <div className="sm:p-[30px] p-[20px]">
                                    <h5 className='text-black font-archivo font-semibold text-[25px] leading-[32px]'>Devices</h5>
                                    <h6 className=' font-archivo font-normal text-[16px] leading-[24px] pt-4 sm:pb-[27px] pb-[20px]'>Our state-of-the-art devices are designed to target a variety of skin concerns with precision and efficacy.</h6>
                                    <Commonbtn name="Our Devices" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection