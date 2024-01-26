import { CloseIcon } from '@chakra-ui/icons';
import { Flex, Text, UnorderedList, Stack, Divider } from '@chakra-ui/react';
import { IconBtn } from 'components/shared/IconBtn';
import { SharedPortal } from 'components/shared/SharedPortal';
import { ListItemComp } from './ListItem';
import { tableBody } from 'store/data/table';
import { capitalize, truncateText } from 'utils/text';
import { formatTableColor } from 'utils/color';

interface Props {
  id?: string;
  onClose: () => void;
}

export const TableModal = ({ id, onClose }: Props) => {
  const transaction = tableBody.find((item) => item.id === id);
  const show = !!transaction;

  return (
    <SharedPortal
      show={show}
      zIndex={show ? 3000 : 0}
      pr={{ base: 0, md: '70px' }}
      layerStyle='centered'
      onClose={onClose}
    >
      {show && (
        <Stack
          w={{ base: '96%', sm: '400px' }}
          p='24px'
          bg='white'
          boxShadow='sm'
          zIndex={3000}
          border='1px solid #E9EAF3'
          borderRadius='5'
          _dark={{
            bg: '#111',
            border: '1px solid #3F4753',
          }}
        >
          <Flex direction='column' gap='18px'>
            <Flex w='full' align='center'>
              <Text flex='1' textStyle='title'>
                Details
              </Text>

              <IconBtn
                icon={<CloseIcon color='#F04848' />}
                aria-label='close'
                onClick={onClose}
              />
            </Flex>

            <Divider />

            <UnorderedList pl='2' width='full'>
              <ListItemComp mainText='Subscriber' desc={transaction.username} />

              <ListItemComp mainText='Email' desc={transaction.username} />

              <ListItemComp
                mainText='Transaction date'
                desc={transaction.date}
              />

              <ListItemComp
                mainText='Payout due date'
                desc={transaction.date}
              />

              <ListItemComp
                mainText='Status'
                desc={capitalize(transaction.status)}
                color={formatTableColor(transaction.status)}
              />

              <ListItemComp
                mainText='Charged amount'
                desc={`$${transaction.amount.toLocaleString()}`}
              />

              {transaction.status === 'refund' && (
                <ListItemComp
                  mainText='Refunded amount'
                  desc={`$${transaction.amount.toLocaleString()}`}
                />
              )}

              {transaction.status == 'paid' && (
                <>
                  <ListItemComp
                    mainText='Payout amount'
                    desc={`$${transaction.amount.toLocaleString()}`}
                  />

                  <ListItemComp mainText='Service fee' desc='$0' />
                </>
              )}
              <ListItemComp
                mainText='Settlement destination'
                desc='Bank account'
              />

              <ListItemComp
                mainText='Transaction ref'
                desc={truncateText(transaction.ref, 18)}
              />
            </UnorderedList>
          </Flex>
        </Stack>
      )}
    </SharedPortal>
  );
};
