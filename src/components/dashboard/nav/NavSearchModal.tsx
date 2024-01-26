import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { Search } from 'lucide-react';
import { colors } from 'styles/theme/colors';

interface NavSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavSearchModal = ({ isOpen, onClose }: NavSearchModalProps) => {
  const bg = useColorModeValue('white', '#333');
  const color = useColorModeValue('#78828A', colors.brandGreen[50]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xs', lg: 'md' }}>
      <ModalOverlay />

      <ModalContent bg='transparent' minH={{ base: '50px', lg: '68px' }}>
        <ModalBody bg={bg} overflowX='clip' rounded='10'>
          <InputGroup size='lg' w='full'>
            <InputLeftElement pointerEvents='none'>
              <Search color={color} />
            </InputLeftElement>

            <Input
              type='text'
              border='none'
              _focus={{ border: 'none', ring: '0' }}
              placeholder='Search...'
              _placeholder={{
                color: 'brandGray.400',
                _dark: { color: 'whiteAlpha.400' },
              }}
            />
          </InputGroup>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
