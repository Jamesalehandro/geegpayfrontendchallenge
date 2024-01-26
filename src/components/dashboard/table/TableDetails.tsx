import { ColumnFlex } from 'components/shared/ColumnFlex';
import { SharedTitle } from 'components/shared/SharedTitle';
import { Table, Thead, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';
import { tableBody, tableHeaders } from 'store/data/table';
import { useState } from 'react';
import { TableModal } from './TableModal';
import { TableItem } from './TableItem';

export const TableDetails = () => {
  const [id, setId] = useState<string>();
  const [addMore, setAddMore] = useState(false);

  const toggleModal = (id?: string) => {
    setId(id);
  };

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

  const renderTableBody = tableBody(addMore).map((item) => {
    return (
      <TableItem
        key={item.id}
        item={item}
        onClick={() => toggleModal(item.id)}
      />
    );
  });

  return (
    <ColumnFlex minH='374px' flex='1' layerStyle='boxed'>
      <SharedTitle
        title='Last Orders'
        isMore={addMore}
        onClick={() => setAddMore(!addMore)}
      />

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>{renderTableHeaders}</Tr>
          </Thead>

          <Tbody>{renderTableBody}</Tbody>
        </Table>
      </TableContainer>

      <TableModal id={id} onClose={toggleModal} isMore={addMore} />
    </ColumnFlex>
  );
};
