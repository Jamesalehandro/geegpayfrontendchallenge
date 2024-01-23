import frame1 from 'assets/frame1.svg';
import frame2 from 'assets/frame2.svg';
import frame3 from 'assets/frame3.svg';
import frame4 from 'assets/frame4.svg';
import frame5 from 'assets/frame5.svg';
import { TableData } from 'models/table';
import { nanoid } from 'nanoid';

export const tableHeaders = ['Name', 'Date', 'Amount', 'Status', 'Invoice'];

export const tableBody: TableData[] = [
  {
    amount: 80000,
    id: nanoid(6),
    date: 'Nov 15, 2023',
    img: frame1,
    status: 'paid',
    username: 'Marcus Bergson',
  },
  {
    amount: 150000,
    id: nanoid(6),
    date: 'Nov 15, 2023',
    img: frame2,
    status: 'refund',
    username: 'Jaydon Vaccaro',
  },
  {
    amount: 87000,
    id: nanoid(6),
    date: 'Nov 14, 2023',
    img: frame3,
    status: 'paid',
    username: 'Corey Schleifer',
  },
  {
    amount: 100000,
    id: nanoid(6),
    date: 'Nov 14, 2023',
    img: frame4,
    status: 'refund',
    username: 'Cooper Press',
  },
  {
    amount: 78000,
    id: nanoid(6),
    date: 'Nov 13, 2023',
    img: frame5,
    status: 'paid',
    username: 'Philip Lubin',
  },
];
