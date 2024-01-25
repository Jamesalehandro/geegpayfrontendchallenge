import { ListDetails } from 'models/list';
import { nanoid } from 'nanoid';

export const listDetails: ListDetails[] = [
  {
    id: nanoid(6),
    color: '#6160DC',
    percentage: 50,
    price: 25000000,
    title: 'Book Bazaar',
    increase: 15,
  },
  {
    id: nanoid(6),
    color: '#54C5EB',
    percentage: 40,
    price: 18000000,
    title: 'Artisan Aisle',
    increase: 10,
  },
  {
    id: nanoid(6),
    color: '#FFB74A',
    percentage: 35,
    price: 12000000,
    title: 'Toy Troop',
    increase: 8,
  },
];
