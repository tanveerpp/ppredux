const initialstate=5;
const sqcube=(state=initialstate,action)=>{
if(action.type==="SQUARE")
{
    state=state**2;
    return state;
}else if(action.type==="CUBE")
{
    state=state**3;
    return state;
}
else{
    return state;
}
}
export default sqcube;