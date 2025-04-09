import React from 'react';
import { Box, Heading, Text, Flex, VStack } from '@chakra-ui/react';

const Feedback = () => {
  const feedbacks = [
    { 
      name: 'Sandra Johnson', 
      Company: 'Tech-Notion',
      rating: '⭐⭐⭐⭐⭐',
      feedback: 'Austina exceeded our expectations by delivering a stunning, user-focused UI design that not only aligned perfectly with our brand identity but also showcased her exceptional attention to detail and deep understanding of user experience!', 
      date: '2023-10-01' 
    },
    { 
      name: 'Jason Smith',
      Company: 'Sassy',
      rating: '⭐⭐⭐⭐',
      feedback: 'Austina transformed our outdated website into a modern, intuitive experience that drastically improved user engagement. His clean design and thoughtful UX choices made a huge impact on how customers interact with our brand.', 
      date: '2023-09-15' 
    },
    { 
      name: 'Alice sanovich',
      Company: 'Tech-Notion',
      rating: '⭐⭐⭐⭐',
      feedback: 'Austina’s design work is a breath of fresh air! The way he combines aesthetics with functionality is truly impressive. Our users love the new interface, and we’ve seen a significant increase in user satisfaction.', 
      date: '2023-10-05' 
    },
    { 
      name: 'Bob Tate', 
      Company: 'Ulint.io',
      rating: '⭐⭐⭐⭐',
      feedback: 'Austina designed a data-heavy dashboard that somehow feels light, organized, and easy to use. His ability to simplify complex information into a clean and actionable layout is seriously impressive.!', 
      date: '2023-10-10' 
    },
  ];

  return (
    <Box bg="white" borderRadius="xl" p={6} boxShadow="md">
      <Heading fontSize="xl" fontWeight="semibold" mb={4}>
        Feedback
      </Heading>
      <VStack spacing={4}>
        {feedbacks.map((item, i) => (
          <Box
            key={i}
            bg="teal.50"
            borderRadius="lg"
            p={4}
            boxShadow="sm"
            display="flex"
            flexDirection="column"
            gap={2}
            w="full"
          >
            <Flex justify="space-between" fontSize="sm">
              <Text fontSize="lg" color="gray.700">{item.name}</Text>
              <Text color="gray.500">{item.date}</Text>
            </Flex>
            <Flex justify="space-between" fontSize="sm" fontWeight="medium" color="gray.500">
              <Text>{item.Company}</Text>
              <Text>{item.rating}</Text>
            </Flex>
            <Text fontSize="sm" color="gray.900">
              {item.feedback}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Feedback;
