import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useSelector,useDispatch} from 'react-redux';
import sqcube from './reducer/sqcube';
import {square,cube} from './action/Squarecube';
import Appdata from './Appdata'
import RecipeReviewCard from './Card'
function App() {
  const idata=useSelector((state)=>state.sqcube);
  return (
    <>
    <h1>App component is runnig</h1>
      <RecipeReviewCard />
    <h1>data in store{idata}</h1>
    <Appdata/>
    </>
  )
}
export default App;
