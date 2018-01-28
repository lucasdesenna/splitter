// @flow
import type { UserDataType } from 'types/User.type';
import CircleType from 'types/Circle.type';

const aimee: UserDataType = {
  id: 'aimee',
  name: 'Aimeê Ferreira',
  color: '#432',
  memberOf: ['asdasdasd2e1231'],
};

export const lucas: UserDataType = {
  id: 'lucas',
  name: 'Lucas de Senna',
  color: '#234',
  memberOf: ['asdasdasd2e1231'],
};

const polenta: UserDataType = {
  id: 'polenta',
  name: 'Polenta Ferreira Correia',
  color: '#234',
  memberOf: ['asdasdasd2e1231'],
};

const circle: CircleType = new CircleType({
  id: 'asdasdasd2e1231',
  name: 'Fake CircleType',
  users: [aimee, lucas, polenta],
  entries: [
    {
      value: 2,
      userId: 'aimee',
      tags: ['mercado'],
      isoTimestamp: '2017-12-22T02:04:50.343Z',
      currency: 'BRL',
      description: 'Uma compra qualquer',
    },
    {
      value: 3,
      userId: 'aimee',
      tags: ['mercado'],
      currency: 'BRL',
      isoTimestamp: '2017-12-22T02:04:52.343Z',
      description: 'Mais uma compra',
    },
    {
      value: 1,
      userId: 'aimee',
      currency: 'BRL',
      isoTimestamp: '2017-12-22T02:04:54.343Z',
      description: 'Mais uma compra2',
    },
    {
      value: 2,
      userId: 'lucas',
      currency: 'BRL',
      isoTimestamp: '2017-12-22T02:04:51.343Z',
      description: 'Que bela compra',
    },
    {
      value: 4,
      userId: 'lucas',
      currency: 'BRL',
      isoTimestamp: '2017-12-22T02:04:53.323Z',
      description: 'Outra compra',
    },
    {
      value: 3,
      userId: 'polenta',
      tags: ['brinquedo'],
      currency: 'BRL',
      isoTimestamp: '2017-12-22T02:04:51.343Z',
      description: 'Osso de plástico',
    },
  ],
});

export default circle;
