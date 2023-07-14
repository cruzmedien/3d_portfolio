import { motion, Variants } from 'framer-motion';

import { styles } from '@/styles/styles';
import { staggerContainer } from '@/utils/motion';
import { ComponentType, FC } from 'react';

const StarWrapper = (Component: ComponentType, idName: string): FC =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer() as Variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
