import { ListDetails } from 'models/list';
import { nanoid } from 'nanoid';

export const listDetails = (addMore: boolean): ListDetails[] => {
  let list: ListDetails[] = [
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
    {
      id: nanoid(6),
      color: '#FF4A55',
      percentage: 15,
      price: 10000000,
      title: 'X Store',
      increase: 3,
    },
  ];

  if (addMore) {
    const newList: ListDetails[] = [
      {
        id: nanoid(6),
        color: '#cbe0af',
        percentage: 33,
        price: 1930070,
        title: 'Cards',
        increase: 16,
      },
      {
        id: nanoid(6),
        color: '#9463d8',
        percentage: 23,
        price: 1352070,
        title: 'Truth Box',
        increase: 3,
      },
      {
        id: nanoid(6),
        color: '#4a4c6f',
        percentage: 40,
        price: 1126700,
        title: 'Parlor tricks',
        increase: 5,
      },
    ];

    list = [...list, ...newList];
  }

  return list;
};
