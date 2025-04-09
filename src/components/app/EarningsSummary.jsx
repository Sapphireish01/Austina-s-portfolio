import React from 'react';
import {
  Box,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Heading,
} from '@chakra-ui/react';
import {
  BiDollarCircle,
  BiUser,
  BiTrendingUp,
  BiSolidCalendarEvent,
} from 'react-icons/bi';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 3800 },
  { month: 'Mar', value: 5200 },
  { month: 'Apr', value: 4800 },
  { month: 'May', value: 5300 },
  { month: 'Jun', value: 5800 },
  { month: 'Jul', value: 6000 },
  { month: 'Aug', value: 6800 },
];

export default function EarningsSummary() {
  const summaryItems = [
    {
      title: 'Total Earnings',
      value: '$42,500',
      icon: BiDollarCircle,
      change: '+12%',
    },
    {
      title: 'Active Clients',
      value: '6',
      icon: BiUser,
      change: '+2',
    },
    {
      title: 'Avg. Project Value',
      value: '$7,080',
      icon: BiTrendingUp,
      change: '+5%',
    },
    {
      title: 'Projects This Month',
      value: '2',
      icon: BiSolidCalendarEvent,
      change: 'On track',
    },
  ];

  return (
    <Box bg="white" borderRadius="xl" p={6} shadow="md" w={{ base: '100%', md: '90%' }}
    maxW="1200px"
    mx="auto" h="fit-content">
      <Heading as="h2" fontSize="xl" mb={4}>
        Earnings Summary
      </Heading>

      {/* Summary Cards */}
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={6}>
        {summaryItems.map((item, i) => (
          <Box
            key={i}
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="lg"
            p={4}
            boxShadow="sm"
          >
            <Flex justify="space-between" fontSize="sm" color="gray.600" mb={1}>
              <Text>{item.title}</Text>
              <Icon as={item.icon} color="cyan.500" boxSize={6} />
            </Flex>
            <Text fontSize="2xl" fontWeight="semibold" color="gray.900">
              {item.value}
            </Text>
            <Text fontSize="sm" color="green.500">
              ↑ {item.change}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Chart */}
      <Box h="64" w="full" >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#14b8a6"
              fillOpacity={1}
              fill="url(#colorEarnings)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
