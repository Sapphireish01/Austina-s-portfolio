import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from './components/app/Header';
import Sidebar from './components/app/Sidebar';
import Content from './components/app/Content';

function App() {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} h="100vh">
      {/* Sidebar */}
      <Box
        w={{ base: '100%', md: '20%' }}
        bg="teal.700"
        color="white"
        borderTopRightRadius={{ md: '4xl' }}
        position={{ md: 'sticky' }}
        top="0"
        left="0"
        p={8}
        zIndex={2}
        display={{ base: 'none', lg: 'flex' }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h={{ base: 'auto', md: '100vh' }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Flex
        direction="column"
        w={{ base: '100%', md: '80%' }}
        h={{ base: 'auto', md: '100vh' }}
        flex="1"
      >
        {/* Header */}
        <Box
          position="sticky"
          top="0"
          bg="white"
          zIndex={10}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Header />
        </Box>

        {/* Page Content */}
        <Box
          flex="1"
          overflowY="auto"
          bg="gray.100"
          p={{ base: 4, md: 6 }}
        >
          <Content />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
