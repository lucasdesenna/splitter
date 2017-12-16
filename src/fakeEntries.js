import type { UserType } from 'UserType';
import type { EntryType } from './features/Entrylist/Entry.type';

const aimee: UserType = {
    name: 'Aimeê Ferreira',
    color: '#432'
};

const lucas: UserType = {
    name: 'Lucas de Senna',
    color: '#234'
};

const entries: EntryType[] = [
    {
        value: 50,
        owner: aimee,
        tags: ['sem categoria'],
        currencySymbol: 'R$',
        description: 'Uma compra qualquer'
    },
    {
        value: 20,
        owner: lucas,
        tags: ['sem categoria'],
        currencySymbol: 'R$',
        description: 'Outra compra'
    },
    {
        value: 10,
        owner: aimee,
        tags: ['sem categoria'],
        currencySymbol: 'R$',
        description: 'Mais uma compra'
    }
];

export default entries;
