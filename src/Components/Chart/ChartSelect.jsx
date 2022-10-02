import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAge } from '../../store/root/rootSlice'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ChartSelect = () => {

    const dispatch = useDispatch();

    const { age } = useSelector(state => state.root);
    const handleChange = (e) => dispatch(setAge(e.target.value));

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <p style={{fontSize: '22px', fontWeight: '600', color: '#fff'}}>Medias Staats</p>
            
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                style={{color: '#fff',  boxShadow: 'none', 'MuiOutlinedInputNotchedOutline': { border: 0 }}}
            >
                <MenuItem value={10}>Last Week</MenuItem>
                <MenuItem value={20}>This Week</MenuItem>
                <MenuItem value={30}>Next Week</MenuItem>
            </Select>

        </div>
    )
}

export default ChartSelect