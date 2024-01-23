'use client';
import { Flex } from '@chakra-ui/react';
import { Stats } from 'components/dashboard/Stats';
import { MainChart } from 'components/dashboard/MainChart';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { TableDetails } from 'components/dashboard/TableDetails';
import { ListDetails } from 'components/dashboard/ListDetails';

export const DashboardViewClient = () => {
  return (
    <ColumnFlex w='full' flex='1' gap='8'>
      <Flex gap='8' flexDirection={{ base: 'column-reverse', xl: 'row' }}>
        <MainChart />
        <Stats />
      </Flex>

      <Flex gap='8' flexDir={{ base: 'column', xl: 'row' }}>
        <TableDetails />

        <ListDetails />
      </Flex>
    </ColumnFlex>
  );
};
