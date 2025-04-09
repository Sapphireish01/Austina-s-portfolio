import React from 'react';
import { Box, Heading, Text, SimpleGrid, Flex, Button } from '@chakra-ui/react';

const Projects = () => {
  const proj = [
    { name: 'Saas Delivery App', description: 'A SaaS delivery app that helps businesses manage, track, and optimize their deliveries in real time.', status: 'In Progress', date: '2023-10-01' },
    { name: 'Project 2', description: 'Description for project 2', status: 'In Progress', date: '2023-09-15' },
    { name: 'Project 3', description: 'Description for project 3', status: 'Pending', date: '2023-10-05' },
    { name: 'Project 4', description: 'Description for project 4', status: 'Pending', date: '2023-10-10' },
    { name: 'Project 5', description: 'Description for project 5', status: 'Completed', date: '2023-09-20' },
    { name: 'Project 6', description: 'Description for project 6', status: 'Completed', date: '2023-10-12' },
  ];
  const upProj = [
    {name: 'Satino',
    description: 'A project management tool that helps teams collaborate and track progress in real time.',
    filter: 'Interested',
    },
    {
        name: 'Gona',
        description: 'Menu management system for restaurants',
        filter: 'Not Interested',
    }
  ]

  // Function to determine the background gradient color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'linear(to-br, orange.50, orange.200)';
      case 'Completed':
        return 'linear(to-br, cyan.100, green.400)';
      case 'Pending':
        return 'linear(to-br, red.50, red.400)';
      default:
        return 'gray.200';
    }
  };

  return (
    <Box bg="white" borderRadius="xl" p={6} boxShadow="md" h="fit-content">
      <Heading fontSize="xl" fontWeight="semibold" mb={4}>
        Projects
      </Heading>
      
      {/* Chakra UI SimpleGrid for responsive layout */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
        {proj.map((item, i) => (
          <Box
            key={i}
            borderRadius="lg"
            p={4}
            boxShadow="sm"
            bgGradient={getStatusColor(item.status)}
            display="flex"
            flexDirection="column"
            gap={4}
          >
            <Flex justify="space-between" fontSize="sm" color="gray.700" fontWeight="medium">
              <Text>{item.name}</Text>
              <Text>{item.status}</Text>
            </Flex>
            <Text fontSize="sm" color="gray.900">
              {item.description}
            </Text>
            <Text fontSize="xs" color="gray.600" textAlign="right">
              {item.date}
            </Text>
            <Button rounded="full " colorScheme="teal" size="sm" mt={2} alignSelf="flex-end">
              {item.status === 'In Progress' ? 'Continue' : item.status === 'Pending' ? 'Start' : 'View'}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={1} spacing={4} mb={6}>
        {upProj.map((item, i) => (
          <Box
            key={i}
            borderRadius="lg"
            p={4}
            boxShadow="sm"
            bg={'teal.100'}
            display="flex"
            flexDirection="column"
            gap={4}
          >
            <Flex justify="space-between" fontSize="sm" color="gray.700" fontWeight="medium">
              <Text>{item.name}</Text>
              <Text>{item.filter}</Text>
            </Flex>
            <Text fontSize="sm" color="gray.900">
              {item.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
