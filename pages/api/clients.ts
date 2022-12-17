import { nanoid } from 'nanoid'
const { faker } = require('@faker-js/faker');
import type { NextApiRequest, NextApiResponse } from 'next'

export interface IClient {
  id: string,
  name: string,
  email: string
}

let clients: IClient[] = [];
for(let i = 0; i <= 50; i++) {
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
