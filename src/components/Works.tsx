'use client';

import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { github } from '@/assets';
import { SectionWrapper } from '@/hoc';
import { projects } from '@/constants';
import { fadeIn, textVariant } from '@/utils/motion';
import Image, { StaticImageData } from 'next/image';

type WorkProps = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: StaticImageData;
  source_code_link: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: WorkProps) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px] ">
          <Image
            src={image}
            alt="project_image"
            fill
            quality={100}
            placeholder="blur"
            style={{ objectFit: 'cover', borderRadius: '20px' }}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="source code"
                quality={100}
                width={30}
                height={30}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText text-center">My work</p>
        <h2 className="sectionHeadText text-center">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          The projects featured below serve as practical demonstrations of my
          skill set and experience. Each one comes with a concise description,
          along with links to the respective code repositories and live demos.
          These projects echo my ability to tackle intricate problems,
          skillfully employ various technologies, and effectively manage
          projects. They are a testament to my adeptness with Java and
          associated frameworks, alongside modern web technologies.
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'Works');
