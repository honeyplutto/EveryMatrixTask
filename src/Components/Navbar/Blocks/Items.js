import { BsCheckLg } from "react-icons/bs";
import { TbCashBanknote } from "react-icons/tb";
import { AiFillQuestionCircle, AiOutlineLineChart } from "react-icons/ai";

const items = [
    {
        number: '25',
        symbol: '',
        color: '#249D9F',
        icon: <BsCheckLg style={{color: '#249D9F', fontSize: '22px', marginRight: '5px'}}/>,
        name: 'SIGNUPS',
        id: '1'
    },
    {
        number: '1000',
        symbol: '$',
        color: '#1357be',
        icon: <AiOutlineLineChart style={{color: '#1357be', fontSize: '22px', marginRight: '5px'}}/>,
        name: 'PROFIT',
        id: '2'
    },
    {
        number: '350',
        symbol: '$',
        color: '#f5e050',
        icon: <TbCashBanknote style={{color: '#f5e050', fontSize: '22px', marginRight: '5px'}}/>,
        name: 'COMMISIONS',
        id: '3'
    },
    {
        number: '300',
        symbol: '$',
        color: '#249D9F',
        icon: <AiFillQuestionCircle style={{color: '#249D9F', fontSize: '22px', marginRight: '5px'}}/>,
        name: 'PENDING COMMISION',
        id: '4'
    }
]

export default items;
