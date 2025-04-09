import React from 'react';
import {
  Flex,
  Box,
  Text,
  Icon,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/react';
import { BiBell, BiEnvelope, BiUserCircle, BiMenu } from "react-icons/bi";
import Sidebar from './Sidebar';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        p={4}
        bg="gray.100"
        boxShadow="md"
        borderBottom="1px"
        borderColor="gray.300"
      >
        {/* Mobile Hamburger */}
        <IconButton
          aria-label="Open menu"
          icon={<BiMenu />}
          display={{ base: 'flex', lg: 'none' }}
          onClick={onOpen}
          variant="ghost"
          fontSize="2xl"
        />

        {/* Greeting */}
        <Text fontSize="xl" fontWeight="semibold" display={{ base: 'none', sm: 'block' }}>
          Good Morning Austina,
        </Text>

        {/* Right-side icons */}
        <HStack spacing={4} ml="auto">
          <Box
            as={BiBell}
            fontSize="4xl"
            p={2}
            rounded="full"
            _hover={{ bg: 'gray.300' }}
            cursor="pointer"
          />
          <Box
            as={BiEnvelope}
            fontSize="4xl"
            p={2}
            rounded="full"
            _hover={{ bg: 'gray.300' }}
            cursor="pointer"
          />
          <Flex
            align="center"
            gap={2}
            bg="gray.200"
            p={2}
            rounded="full"
            cursor="pointer"
            _hover={{ bg: 'gray.300' }}
          >
            <Icon as={BiUserCircle} boxSize={6} />
            <Text display={{ base: 'none', sm: 'block' }}>Austina</Text>
          </Flex>
        </HStack>
      </Flex>

      {/* Drawer for Sidebar on mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="teal.700" color="white">
          <DrawerCloseButton mt={2} />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
