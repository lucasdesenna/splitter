export const fakeCircleData = {
  id: '0bd010f641291705095902aaebd41824',
  name: 'Casinha',
  users: ['ce502e691b0566d339e5e7ecd3bc0205', 'F4KGv14igDaKYQBl0K51GCpWKMt2'],
  entries: [
    '-LDy_Sm2meXSzyhAoSAg',
    '-LDy_SopSBp-qdRp5PMJ',
    '-LDy_Sr_gf90SNpQEBwV',
    '-LDy_SuKB2bNLS_nOd6E',
    '-LDy_Sx9zDelJex6sq_E',
  ],
  totalValue: 4824.18,
  userValues: {
    ce502e691b0566d339e5e7ecd3bc0205: 2545,
    F4KGv14igDaKYQBl0K51GCpWKMt2: 2279.18,
  },
};

export const fakeEntriesData = {
  '-LDy_Sm2meXSzyhAoSAg': {
    id: '-LDy_Sm2meXSzyhAoSAg',
    circleId: '0bd010f641291705095902aaebd41824',
    currency: 'BRL',
    description: 'Aluguel',
    unixTimestamp: 1527910882596,
    userId: 'ce502e691b0566d339e5e7ecd3bc0205',
    value: 2135,
  },
  '-LDy_SopSBp-qdRp5PMJ': {
    id: '-LDy_SopSBp-qdRp5PMJ',
    unixTimestamp: 1527910882774,
    circleId: '0bd010f641291705095902aaebd41824',
    currency: 'BRL',
    description: 'IPTU 2017',
    tags: ['iptu'],
    userId: 'ce502e691b0566d339e5e7ecd3bc0205',
    value: 106.58,
  },
  '-LDy_Sr_gf90SNpQEBwV': {
    id: '-LDy_Sr_gf90SNpQEBwV',
    unixTimestamp: 1527910882950,
    circleId: '0bd010f641291705095902aaebd41824',
    currency: 'BRL',
    description: 'Condomínio set/2017',
    tags: ['condominio'],
    userId: 'ce502e691b0566d339e5e7ecd3bc0205',
    value: 643.2,
  },
  '-LDy_SuKB2bNLS_nOd6E': {
    id: '-LDy_SuKB2bNLS_nOd6E',
    unixTimestamp: 1527910883126,
    circleId: '0bd010f641291705095902aaebd41824',
    currency: 'BRL',
    description: 'Mercado',
    tags: ['mercado'],
    userId: 'ce502e691b0566d339e5e7ecd3bc0205',
    value: 904.17,
  },
  '-LDy_Sx9zDelJex6sq_E': {
    id: '-LDy_Sx9zDelJex6sq_E',
    unixTimestamp: 1527910883307,
    circleId: '0bd010f641291705095902aaebd41824',
    currency: 'BRL',
    description: 'Mercado',
    tags: ['mercado'],
    userId: 'ce502e691b0566d339e5e7ecd3bc0205',
    value: 877.53,
  },
};

export const fakeUsersData = {
  ce502e691b0566d339e5e7ecd3bc0205: {
    color: '#689F38',
    id: 'ce502e691b0566d339e5e7ecd3bc0205',
    memberOf: ['0bd010f641291705095902aaebd41824'],
    avatarUrl:
      'https://yt3.ggpht.com/-R8NXw9hHRk0/AAAAAAAAAAI/AAAAAAAAAAA/HzrsWT1pfsA/s100-c-k-no-mo-rj-c0xffffff/photo.jpg?sz=64',
    name: 'Aimeê Ferreira',
  },
  F4KGv14igDaKYQBl0K51GCpWKMt2: {
    avatarUrl:
      'https://lh5.googleusercontent.com/-AdAuYPgfTpg/AAAAAAAAAAI/AAAAAAAANvA/Wap7TH2odqA/photo.jpg',
    createdAt: '1528077898000',
    email: 'lucasdesenna@gmail.com',
    id: 'F4KGv14igDaKYQBl0K51GCpWKMt2',
    lastLoginAt: '1528077898000',
    name: 'Lucas de Senna',
  },
};
