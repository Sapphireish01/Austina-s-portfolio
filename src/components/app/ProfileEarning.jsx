import React from 'react';
import { Box, Text, VStack, Heading } from '@chakra-ui/react';

const ProfileEarning = () => {
  const data = [
    { msgBody: 'We would like to inform you that your project has been approved.', msgDate: '2023-10-01' },
    { msgBody: 'Your payment has been processed successfully.', msgDate: '2023-10-02' },
    { msgBody: 'A new project has been assigned to you.', msgDate: '2023-10-03' },
    { msgBody: 'Your project deadline has been extended, Also the details of all the files you requested has been released.', msgDate: '2023-10-04' },
  ];

  return (
    <Box
      bg="teal.600"
      borderRadius="xl"
      color="white"
      p={4}
      shadow="md"
      m={{base: "auto", xl: 3 }}
      w={{base: '315px', md: '364px'}}
      h={{base: 'fit-content', xl: '469px'}}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading as="h2" fontSize="xl" w="full" textAlign="start" mb={4}>
        Messages
      </Heading>

      <VStack spacing={3}>
        {data.map((item, index) => (
          <Box
            key={index}
            bg="whiteAlpha.300"
            borderRadius="lg"
            p={4}
            w="300px"
            _hover={{ bg: 'whiteAlpha.400' }}
            transition="0.3s"
          >
            <Text fontSize="sm" color="gray.200">
              {item.msgBody.length > 50 ? item.msgBody.slice(0, 50) + '...' : item.msgBody}
            </Text>
            <Text fontSize="xs" color="gray.400" textAlign="right">
              {item.msgDate}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ProfileEarning;
