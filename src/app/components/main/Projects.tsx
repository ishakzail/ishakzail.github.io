"use client";

import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';
import "swiper/css/navigation"
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from 'next/image';
import { projectsData } from '@/constants';

const Projects = () => {
    return (
      <div 
        id='projects'
        className='flex flex-col items-center justify-center'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            Projects    
        </h1>    
        <div className='w-full '>
            <Swiper
                breakpoints={{
                467: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    // centeredSlides: true, // Add this line
                    // scrollbar: false


                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1700: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                navigation
                scrollbar={{ draggable: true }}
                modules={[FreeMode, Pagination, Navigation]}
                className="m-[20%]"
            >
                {/* <SwiperSlide className='h-[720px] w-[6px]'></SwiperSlide> */}
                {projectsData.map((item) => (
                <SwiperSlide key={item.title} >
                        <div 
                        className='h-[720px] w-[360px]  gap-6 relative overflow-hidden  rounded-xl shadow-lg  border border-[#2A0E61]'
                        > 
                            <Image 
                                src={item.backgroundImage}
                                alt={item.title}
                                height={400}
                                width={300}
                                className='w-full object-contain'
                            />
                            <hr className='my-4 border-gray-300' /> {/* Add separator */}
                            <div className='relative p-4'>
                                <h1 className='text-2xl font-semibold text-white'>{item.title}</h1>
                                <p className="mt-2 text-gray-300">{item.content}</p>
                                <br />
                                <p className='text-[15px] pt-0 pb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>{item.tools}</p>
                            </div>
                            <div className="absolute  bottom-4 left-[50%]">
                                <a 
                                    target='_blank'
                                    href={item.link} 
                                    className="px-10 py-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">View Code</a>         
                            </div>

                        </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        
      </div>
    );
  };

export default Projects;