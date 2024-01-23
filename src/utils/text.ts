export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const addSuffixes = (
  length: number,
  suffixes: string = 's',
  alt?: string
) => (length > 1 ? suffixes : alt ?? '');
