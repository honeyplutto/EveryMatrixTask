import { FaListUl } from "react-icons/fa";

function createData(id, username, profits, commison, view) {
    return { id, username, profits, commison, view };
}

export const rows = [
    createData(1007, 'Simona', 55, 'Simona', <FaListUl />),
    createData(1008, 'Arian', 45, 'Adelina', <FaListUl />),
    createData(1009, 'Adam', 35, 'Adam', <FaListUl />),
    createData(1010, 'John', 25, 'John', <FaListUl />),
    createData(1011, 'Garry', 15, 'Garry', <FaListUl />),
];

export const name = [
    'Top Affiliates',
    'Signups',
    'Pending Commisons'
]

