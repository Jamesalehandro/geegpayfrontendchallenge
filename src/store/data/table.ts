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
    email: 'vahoube@pik.tn',
    ref: 'f594b2e6-9caa-576f-8e59-1f1b1e181b35',
  },
  {
    amount: 150000,
    id: nanoid(6),
    date: 'Nov 15, 2023',
    img: frame2,
    status: 'refund',
    username: 'Jaydon Vaccaro',
    email: 'simare@lu.kr',
    ref: 'd302c2c3-4818-5fa5-bc11-8c5d3b4a9704',
  },
  {
    amount: 87000,
    id: nanoid(6),
    date: 'Nov 14, 2023',
    img: frame3,
    status: 'paid',
    username: 'Corey Schleifer',
    email: 'sujsepu@utaudahis.mv',
    ref: '5d96c987-20cd-5915-9268-098d60ff3c2e',
  },
  {
    amount: 100000,
    id: nanoid(6),
    date: 'Nov 14, 2023',
    img: frame4,
    status: 'refund',
    username: 'Cooper Press',
    email: 'kakoj@kafkazeb.hk',
    ref: 'e915c039-9807-573f-bb86-73a640d65965',
  },
  {
    amount: 78000,
    id: nanoid(6),
    date: 'Nov 13, 2023',
    img: frame5,
    status: 'paid',
    username: 'Philip Lubin',
    email: 'hakgaoko@inu.io',
    ref: '66517e35-83e9-5bf7-bce7-f921bd703eb5',
  },
];
