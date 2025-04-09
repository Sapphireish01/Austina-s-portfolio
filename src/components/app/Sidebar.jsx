import React from 'react';
import {
  Box,
  Flex,
  VStack,
  Image,
  Text,
  Link,
  Icon,
  Avatar,
} from '@chakra-ui/react';
import {
  BiDockRight,
  BiLineChart,
  BiStar,
  BiBriefcaseAlt,
  BiEnvelope,
} from 'react-icons/bi';

import ProfileImage from '../../assets/images.jpeg';

const Sidebar = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      bg="gray.700/30"
      color="white"
      p={8}
      boxShadow="lg"
    >
      {/* Profile Section */}
      <VStack spacing={3} mt={10}>
        <Avatar size="2xl" src={ProfileImage} name="Austina Lama" mb={4} />
        <Text fontSize="2xl" fontWeight="bold">
          Austina Lama
        </Text>
        <Text
          fontSize="xl"
          bg="yellow.200"
          color="gray.700"
          px={4}
          py={1}
          borderRadius="full"
        >
          Designer
        </Text>
        <Text fontSize="lg" color="gray.300">
          Joined since 2023.
        </Text>
      </VStack>

      {/* Nav Links */}
      <VStack align="start" spacing={4} mt={12}>
        <NavItem icon={BiDockRight} label="Dashboard" />
        <NavItem icon={BiEnvelope} label="Messages" />
        <NavItem icon={BiLineChart} label="Financial Summary" />
        <NavItem icon={BiStar} label="Clients Feedback" />
        <NavItem icon={BiBriefcaseAlt} label="Recent projects" />
      </VStack>
    </Box>
  );
};

// Reusable Nav Link
const NavItem = ({ icon, label }) => (
  <Link
    href="#"
    display="flex"
    alignItems="center"
    gap={2}
    fontSize="lg"
    _hover={{ color: 'gray.400' }}
    w="full"
  >
    <Icon as={icon} boxSize={5} mt={1} />
    <Text>{label}</Text>
  </Link>
);

export default Sidebar;
