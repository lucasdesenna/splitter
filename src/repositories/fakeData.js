export const fakeCircleData = {
  id: '0bd010f641291705095902aaebd41824',
  name: 'Casinha',
  users: [
    'ce502e691b0566d339e5e7ecd3bc0205',
    'dc53fc4f621c80bdc2fa0329a6123708',
  ],
  entries: [
    '0cc175b9c0f1b6a831c399e269772661',
    '92eb5ffee6ae2fec3ad71c777531578f',
    '4a8a08f09d37b73795649038408b5f33',
  ],
  totalValue: 4824.18,
  userValues: {
    ce502e691b0566d339e5e7ecd3bc0205: 2545,
    dc53fc4f621c80bdc2fa0329a6123708: 2279.18,
  },
};

export const fakeEntriesData = [
  {
    id: '0cc175b9c0f1b6a831c399e269772661',
    circleId: '0bd010f641291705095902aaebd41824',
    currency: 'BRL',
    description: 'Aluguel',
    isoTimestamp: '2017-11-20T20:12:59Z',
    userId: 'ce502e691b0566d339e5e7ecd3bc0205',
    value: 2545,
  },
  {
    id: '92eb5ffee6ae2fec3ad71c777531578f',
    circleId: '0bd010f641291705095902aaebd41824',
    currency: 'BRL',
    description: 'Aluguel',
    isoTimestamp: '2017-09-20T05:07:23Z',
    userId: 'dc53fc4f621c80bdc2fa0329a6123708',
    value: 2150,
  },
  {
    id: '4a8a08f09d37b73795649038408b5f33',
    circleId: '0bd010f641291705095902aaebd41824',
    currency: 'BRL',
    description: 'Instalação do fogão',
    isoTimestamp: '2017-10-20T16:26:06Z',
    userId: 'dc53fc4f621c80bdc2fa0329a6123708',
    value: 129.18,
  },
];

export const fakeUsersData = [
  {
    color: '#689F38',
    id: 'ce502e691b0566d339e5e7ecd3bc0205',
    memberOf: ['0bd010f641291705095902aaebd41824'],
    avatarUrl:
      'https://yt3.ggpht.com/-R8NXw9hHRk0/AAAAAAAAAAI/AAAAAAAAAAA/HzrsWT1pfsA/s100-c-k-no-mo-rj-c0xffffff/photo.jpg?sz=64',
    name: 'Aimeê Ferreira',
  },
  {
    color: '#FFA000',
    id: 'dc53fc4f621c80bdc2fa0329a6123708',
    memberOf: ['0bd010f641291705095902aaebd41824'],
    avatarUrl:
      'https://lh5.googleusercontent.com/-AdAuYPgfTpg/AAAAAAAAAAI/AAAAAAAANvA/Wap7TH2odqA/photo.jpg?sz=64',
    name: 'Lucas de Senna',
  },
];
