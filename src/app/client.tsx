'use client';
import { Flex } from '@chakra-ui/react';
import { Stats } from 'components/dashboard/Stats';
import { MainChart } from 'components/dashboard/MainChart';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { TableDetails } from 'components/dashboard/table/TableDetails';
import { ListDetails } from 'components/dashboard/ListDetails';

export const DashboardViewClient = () => {
  return (
    <ColumnFlex w='full' flex='1' gap='8'>
      <Flex
        gap='8'
        flexDirection={{ base: 'column-reverse', xl: 'row' }}
        align={{ base: 'stretch', xl: 'flex-start' }}
      >
        <MainChart />
        <Stats />
      </Flex>

      <Flex
        gap='8'
        flexDir={{ base: 'column', xl: 'row' }}
        align={{ base: 'stretch', xl: 'flex-start' }}
      >
        <TableDetails />
        <ListDetails />
      </Flex>
    </ColumnFlex>
  );
};
