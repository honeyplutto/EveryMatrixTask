import { FaUser, FaChartArea } from "react-icons/fa";
import { GiSpeedometer, GiStarKey } from "react-icons/gi";
import { HiOutlineSpeakerphone, HiEye } from "react-icons/hi";
import { TbArrowsLeftRight } from "react-icons/tb";
import { VscSettingsGear } from "react-icons/vsc";
import { BsHeartFill } from "react-icons/bs";
import { ImClock } from "react-icons/im";

const menuItems = [
    {
        path:"/page0",
        name:"Speed",
        icon:<GiSpeedometer/>
    },
    {
        path:"/page1",
        name:"Key",
        icon: <GiStarKey/>
    },
    {
        path:"/page2",
        name:"User",
        icon:<FaUser/>
    },
    {
        path:"/page3",
        name:"Speaker",
        icon:<HiOutlineSpeakerphone/>
    },
    {
        path:"/page4",
        name:"Chart",
        icon:<FaChartArea/>
    },
    {
        path:"/page5",
        name:"Arrow",
        icon:<TbArrowsLeftRight/>
    },
    {
        path:"/page6",
        name:"Setting",
        icon:<VscSettingsGear/>
    },
    {
        path:"/page7",
        name:"Heart",
        icon:<BsHeartFill/>
    },
    {
        path:"/page8",
        name:"Clock",
        icon:<ImClock/>
    },
    {
        path:"/page9",
        name:"Eye",
        icon:<HiEye/>
    }
];

export default menuItems;