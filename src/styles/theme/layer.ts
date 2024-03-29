export const layerStyles = {
  flex: {
    alignItems: 'center',
  },
  spaced: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  start: {
    alignItems: 'flex-start',
  },
  boxed: {
    bg: 'white',
    borderRadius: 14,
    border: '1px solid',
    borderColor: '#EDF2F7',
    gap: '7',
    px: { base: '3', sm: '4' },
    py: { base: '6', xl: '8' },
    _dark: {
      border: '1px solid',
      bg: '#111',
      borderColor: 'whiteAlpha.400',
    },
  },
};
