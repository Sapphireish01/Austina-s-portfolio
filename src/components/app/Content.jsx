import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Profilecard from './ProfileEarning';
import EarningsSummary from './EarningsSummary';
import Projects from './Projects';
import Feedback from './Feedback';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Content = () => {
  return (
    <Box p={4} m={{ base: 0, md: 5 }}>
      {/* Top Section: Profile & Earnings */}
      <MotionFlex
        direction={{ base: 'column', xl: 'row' }}
        w="100%"
        justify="space-between"
        gap={4}
        mb={10}
        layout
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <MotionBox
          w={{ base: '100%', lg: '30%' }}
          mx= 'auto'
          layout
          transition={{ duration: 0.4 }}
        >
          <Profilecard />
        </MotionBox>

        <MotionBox
          w="70%"
          layout
          transition={{ duration: 0.4 }}
        >
          <EarningsSummary />
        </MotionBox>
      </MotionFlex>

      {/* Bottom Section: Projects & Feedback */}
      <MotionFlex
        direction={{ base: 'column', lg: 'row' }}
        w="100%"
        justify="space-between"
        gap={4}
        mb={4}
        layout
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <MotionBox
          w={{ base: '100%', lg: '48%' }}
          layout
          transition={{ duration: 0.4 }}
        >
          <Projects />
        </MotionBox>

        <MotionBox
          w={{ base: '100%', lg: '48%' }}
          layout
          transition={{ duration: 0.4 }}
        >
          <Feedback />
        </MotionBox>
      </MotionFlex>
    </Box>
  );
};

export default Content;
