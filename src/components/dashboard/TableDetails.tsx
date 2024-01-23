import Image from 'next/image';
import { ColumnFlex } from 'components/shared/ColumnFlex';
import { SharedTitle } from 'components/shared/SharedTitle';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { tableBody, tableHeaders } from 'store/data/table';
import { BrandFlex } from 'components/shared/BrandFlex';
import { formatTableColor } from 'utils/color';
import { StickyNote } from 'lucide-react';

export const TableDetails = () => {
  const color = useColorModeValue('#0D062D', 'white');

  const renderTableHeaders = tableHeaders.map((item, i) => {
    const isLastIndex = i === tableHeaders.length - 1;
    return (
      <Td
        key={item + i}
        isNumeric={isLastIndex}
        color='#9CA4AB;'
        fontWeight={500}
      >
        {item}
      </Td>
    );
  });

  const renderTableBody = tableBody.map((item) => {
    return (
      <Tr key={item.id}>
        <Td>
          <BrandFlex gap='3'>
            <Image src={item.img} alt={item.username} />
            <Text color='#3A3F51' fontWeight={500} textStyle='body2'>
              {item.username}
            </Text>
          </BrandFlex>
        </Td>

        <Td color='brandGray.500' textStyle='body2'>
          {item.date}
        </Td>

        <Td color={color} textStyle='body2' fontWeight={500}>
          ${item.amount.toLocaleString()}
        </Td>

        <Td
          color={formatTableColor(item.status)}
          textStyle='body2'
          textTransform='capitalize'
        >
          {item.status}
        </Td>

        <Td isNumeric>
          <BrandFlex justify='flex-end' gap='2' cursor='pointer'>
            <StickyNote size={16} color={color} />
            <Text color={color} textStyle='body2'>
              View
            </Text>
          </BrandFlex>
        </Td>
      </Tr>
    );
  });

  return (
    <ColumnFlex minH='374px' flex='1' layerStyle='boxed'>
      <SharedTitle title='Last Orders' />

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>{renderTableHeaders}</Tr>
          </Thead>

          <Tbody>{renderTableBody}</Tbody>
        </Table>
      </TableContainer>
    </ColumnFlex>
  );
};
