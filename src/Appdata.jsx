import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useSelector,useDispatch} from 'react-redux';
import sqcube from './reducer/sqcube';
import {square,cube} from './action/Squarecube';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
function Appdata() {
  const idata=useSelector((state)=>state.sqcube);
  const dispatch=useDispatch();
  return (
    <>
    <h1>appdata is running</h1>
    <Tooltip title="Square">
    <Button variant="contained" onClick={()=>dispatch(square())}>Square</Button>
    </Tooltip>
    <input type="number" name="num" value={idata} />
    <button className="btn btn-primary" onClick={()=>dispatch(cube())}>Cube</button>
    </>
  )
}

export default Appdata;
