import frame1 from 'assets/frame1.svg';
import frame2 from 'assets/frame2.svg';
import frame3 from 'assets/frame3.svg';
import frame4 from 'assets/frame4.svg';
import frame5 from 'assets/frame5.svg';
import { TableData } from 'models/table';

export const tableHeaders = ['Name', 'Date', 'Amount', 'Status', 'Invoice'];

export const tableBody = (isMore: boolean): TableData[] => {
  let list: TableData[] = [
    {
      amount: 80000,
      id: '64',
      date: 'Nov 15, 2023',
      img: frame1,
      status: 'paid',
      username: 'Marcus Bergson',
      email: 'vahoube@pik.tn',
      ref: 'f594b2e6-9caa-576f-8e59-1f1b1e181b35',
    },
    {
      amount: 150000,
      id: '98',
      date: 'Nov 15, 2023',
      img: frame2,
      status: 'refund',
      username: 'Jaydon Vaccaro',
      email: 'simare@lu.kr',
      ref: 'd302c2c3-4818-5fa5-bc11-8c5d3b4a9704',
    },
    {
      amount: 87000,
      id: '69',
      date: 'Nov 14, 2023',
      img: frame3,
      status: 'paid',
      username: 'Corey Schleifer',
      email: 'sujsepu@utaudahis.mv',
      ref: '5d96c987-20cd-5915-9268-098d60ff3c2e',
    },
    {
      amount: 100000,
      id: '96',
      date: 'Nov 14, 2023',
      img: frame4,
      status: 'refund',
      username: 'Cooper Press',
      email: 'kakoj@kafkazeb.hk',
      ref: 'e915c039-9807-573f-bb86-73a640d65965',
    },
    {
      amount: 78000,
      id: '79',
      date: 'Nov 13, 2023',
      img: frame5,
      status: 'paid',
      username: 'Philip Lubin',
      email: 'hakgaoko@inu.io',
      ref: '66517e35-83e9-5bf7-bce7-f921bd703eb5',
    },
  ];

  if (isMore) {
    const newList: TableData[] = [
      {
        amount: 75855,
        id: '85',
        date: 'Nov 1, 2023',
        img: 'https://firebasestorage.googleapis.com/v0/b/nestuge-dev1.appspot.com/o/brand%2F2adoBUGoLJIm1mU8vNzg?alt=media&token=81309622-f74c-4226-8a69-0146084c7559',
        status: 'paid',
        username: 'Henrietta Weaver',
        email: 'agake@omu.kg',
        ref: 'f594b2e6-9caa-576f-8e59-1f1b1e181b35',
      },
      {
        amount: 95946,
        id: '77',
        date: 'Oct 15, 2023',
        img: 'https://firebasestorage.googleapis.com/v0/b/nestuge-dev1.appspot.com/o/brand%2FtCiCfLYrEmopCy69mL7G?alt=media&token=d15f9984-a498-477f-b948-d21846c60539',
        status: 'refund',
        username: 'Arthur Dunn',
        email: 'te@zu.vu',
        ref: 'f594b2e6-9caa-576f-8e59-1f1b1e181b35',
      },
      {
        amount: 81084,
        id: '41',
        date: 'Oct 14, 2023',
        img: 'https://bit.ly/kent-c-dodds',
        status: 'refund',
        username: 'Louise Weber',
        email: 'desronho@laf.mg',
        ref: 'f594b2e6-9caa-576f-8e59-1f1b1e181b35',
      },
    ];

    list = [...list, ...newList];
  }

  return list;
};
