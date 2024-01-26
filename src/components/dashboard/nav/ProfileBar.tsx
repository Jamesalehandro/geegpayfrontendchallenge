import {
  Circle,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { BrandFlex } from 'components/shared/BrandFlex';
import { BrandHeading } from 'components/shared/BrandHeading';
import { useDefaultContext } from 'context/DefaultContext';
import { useScroll } from 'hooks/useScroll';
import { textStyles } from 'styles/theme/text';
import {
  Bell,
  CalendarDays,
  AlignJustify,
  Search,
  SearchIcon,
} from 'lucide-react';
import { IconBtn } from 'components/shared/IconBtn';
import { UserCard } from '../UserCard';
import { NavSearchModal } from './NavSearchModal';
import { useEffect } from 'react';

export function ProfileBar() {
  const scroll = useScroll(20);
  const color = useColorModeValue('#0D062D', 'white');
  const { updateDefaultProps } = useDefaultContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (e.ctrlKey && e.key === 'k') {
        onOpen();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrandFlex
      w='full'
      pos='fixed'
      zIndex={2}
      minH='70px'
      maxH='80px'
      top='0'
      justify='space-between'
      shadow={scroll ? '0px 1px 15px 0px #0000000D' : 'none'}
      backdropFilter={scroll ? 'saturate(200%) blur(30px)' : 'none'}
      bg='brandGray.50'
      pl={{ base: '2', xl: '24' }}
      pr='2'
      py='5'
      borderBottom='1px solid'
      borderColor='gray.200'
      _dark={{
        bg: '#111',
        borderBottom: '1px solid',
        borderColor: 'whiteAlpha.400',
      }}
    >
      <BrandFlex>
        <IconBtn
          icon={<AlignJustify fontSize='25' />}
          onClick={() => {
            updateDefaultProps(true, 'media');
          }}
          aria-label='Open Menu'
          display={{ base: 'inline-block', xl: 'none' }}
        />

        <BrandHeading {...textStyles.title}>Dashboard</BrandHeading>
      </BrandFlex>

      <BrandFlex gap={{ base: '3', lg: '8' }}>
        <IconButton
          aria-label='Search dashboard'
          onClick={onOpen}
          icon={<SearchIcon />}
          bg='transparent'
          display={{ lg: 'none' }}
          _active={{
            bg: 'transparent',
            transform: 'scale(0.91)',
          }}
          _hover={{
            bg: 'transparent',
          }}
        />

        <InputGroup
          w='349px'
          rounded='24'
          bg='white'
          _dark={{ bg: '#222' }}
          mr={{ xl: '5' }}
          display={{ base: 'none', lg: 'inline-block' }}
        >
          <InputLeftElement pointerEvents='none' ml='1'>
            <Search size={16} color='#78828A' />
          </InputLeftElement>

          <Input
            type='text'
            isReadOnly
            rounded='24'
            placeholder='Search...'
            _placeholder={{
              color: 'brandGray.400',
              _dark: { color: 'whiteAlpha.400' },
              fontSize: '14px',
            }}
            onClick={onOpen}
          />
        </InputGroup>

        <NavSearchModal isOpen={isOpen} onClose={onClose} />

        <BrandFlex
          display={{ base: 'none', md: 'flex' }}
          gap='8'
          flexShrink={0}
        >
          <BrandFlex gap='2'>
            <CalendarDays size='20' />
            <Text
              textStyle='body2'
              color='#26282C'
              _dark={{ color: 'white' }}
              fontWeight={500}
            >
              {new Date().toDateString()}
            </Text>
          </BrandFlex>

          <Menu autoSelect={false} isLazy>
            <MenuButton
              w='max-content'
              px='2'
              rounded='28'
              py='2'
              bg='transparent'
            >
              <Circle
                minW='2rem'
                minH='2rem'
                border='1px solid'
                borderColor='#DADDDD'
                p='1.5'
                cursor='pointer'
              >
                <Bell color={color} size='20' />
              </Circle>
            </MenuButton>
            <MenuList
              textStyle='body2'
              _dark={{
                bg: '#222',
              }}
            >
              <MenuItem
                color='red'
                _dark={{
                  bg: 'transparent',
                }}
              >
                You have no new notification
              </MenuItem>
            </MenuList>
          </Menu>
        </BrandFlex>

        <Menu isLazy>
          {({ isOpen }) => (
            <>
              <MenuButton
                w='max-content'
                px='2'
                rounded='28'
                py='2'
                bg='transparent'
                border='1px solid #DADDDD'
              >
                <UserCard isExpanded={isOpen} />
              </MenuButton>
              <MenuList
                textStyle='body2'
                _dark={{
                  bg: '#222',
                }}
              >
                <MenuItem
                  color='red'
                  _dark={{
                    bg: 'transparent',
                  }}
                >
                  Log out
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </BrandFlex>
    </BrandFlex>
  );
}
