import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

export const clientCount = 57;

faker.setLocale('ru');

export interface IClient {
  id: string,
  name: string,
  email: string
}

let clients: IClient[] = [];
for(let i = 0; i <= clientCount; i++) {
  let generate: IClient = {
    id: nanoid(),
    name: faker.name.fullName(),
    email: faker.internet.email()
  };
  clients.push(generate)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IClient[]>
) {
  setTimeout(() => res.status(200).json(clients), 1500)
}
