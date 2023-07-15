'use client';

import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/utils/motion';
import { services } from '@/constants';
import Image, { StaticImageData } from 'next/image';
import { SectionWrapper } from '@/hoc';

interface Service {
  title: string;
  icon: StaticImageData;
}

interface ServiceCardProps extends Service {
  index: number;
}
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image src={icon} alt="web-development" width={64} height={64} />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Accomplished in Java, JavaScript, and TypeScript, I&apos;m a software
        developer with a knack for not only frameworks like React, Node.js, and
        Three.js but also Java-based frameworks such as Spring Boot and
        Hibernate. Specializing in designing 3D graphics and complex systems, I
        leverage these tools to engineer efficient, scalable, and user-friendly
        solutions that address real-world problems. Let&apos;s collaborate and
        breathe life into your ideas, capitalizing on the versatility of Java
        and contemporary frameworks!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service: Service, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
