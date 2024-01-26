import Image from 'next/image';
import { Tr, Td, Text, useColorModeValue, Box } from '@chakra-ui/react';
import { BrandFlex } from 'components/shared/BrandFlex';
import { formatTableColor } from 'utils/color';
import { StickyNote } from 'lucide-react';
import { TableData } from 'models/table';
import { rgbDataURL } from 'utils/stylesformatter/blur';

interface Props {
  item: TableData;
  onClick?: () => void;
}

export const TableItem = ({ item, onClick }: Props) => {
  const color = useColorModeValue('#0D062D', 'white');

  return (
    <Tr
      _hover={{
        backgroundColor: '#1E2F8908',
        _dark: {
          backgroundColor: '#000',
        },
      }}
      cursor='pointer'
    >
      <Td>
        <BrandFlex gap='3'>
          <Image
            src={item.img}
            alt={item.username}
            width={32}
            height={32}
            blurDataURL={rgbDataURL()}
            placeholder='blur'
            aria-label='User image'
            quality={100}
          />
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
        _dark={{ color: formatTableColor(item.status) }}
        textStyle='body2'
        textTransform='capitalize'
      >
        {item.status}
      </Td>

      <Td isNumeric>
        <Box as='button' cursor='pointer' onClick={onClick}>
          <BrandFlex justify='flex-end' gap='2'>
            <StickyNote size={16} color={color} />
            <Text color={color} textStyle='body2'>
              View
            </Text>
          </BrandFlex>
        </Box>
      </Td>
    </Tr>
  );
};
