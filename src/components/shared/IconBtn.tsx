import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { DEFAULT_STYLES } from 'styles/globalStyles';

interface Props extends IconButtonProps {}

export const IconBtn = ({ icon, ...rest }: Props) => {
  return (
    <IconButton
      icon={icon}
      transition={DEFAULT_STYLES.transition}
      _active={{
        transform: 'scale(0.99)',
        bg: 'transparent',
      }}
      _hover={{
        bg: 'transparent',
      }}
      bg='transparent'
      size='sm'
      {...rest}
    />
  );
};
