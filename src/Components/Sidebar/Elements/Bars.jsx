import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../../store/root/rootSlice'
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import '../Sidebar.css'

const Bars = () => {

  const dispath = useDispatch();
  const { isOpen } = useSelector(state => state.root);

  const toggle = () => dispath(setOpen(!isOpen));

  return (
    <div className="bars">
        <button onClick={toggle} style={{cursor: 'pointer'}}>
            {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
    </div>
  )
}

export default Bars