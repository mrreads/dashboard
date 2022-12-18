import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

export const clientCount = 57;

faker.setLocale('ru');

export interface IClient {
  id: string,
  name: string,
  email: string,
  image: string,
  phone: string,
  register: Date,
  birth: Date,
  company: string
}

let clients: IClient[] = [];
for(let i = 0; i <= clientCount; i++) {
  let generate: IClient = {
    id: nanoid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    image: faker.image.avatar(),
    phone: faker.phone.number('+79##-###-##-##'),
    register: faker.date.between('2021-06-01T00:00:00.000Z', '2022-11-01T00:00:00.000Z'),
    birth: faker.date.birthdate(),
    company: faker.company.bs(),
  };
  clients.push(generate)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IClient[]>
) {
  setTimeout(() => res.status(200).json(clients), 1500)
}
