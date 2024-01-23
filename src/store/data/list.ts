import { ListDetails } from 'models/list';
import { nanoid } from 'nanoid';

export const listDetails: ListDetails[] = [
  {
    id: nanoid(6),
    color: '#6160DC',
    percentage: 15,
    price: 25000000,
    title: 'Book Bazaar',
  },
  {
    id: nanoid(6),
    color: '#54C5EB',
    percentage: 10,
    price: 18000000,
    title: 'Artisan Aisle',
  },
  {
    id: nanoid(6),
    color: '#FFB74A',
    percentage: 8,
    price: 12000000,
    title: 'Toy Troop',
  },
];
