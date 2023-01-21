
import React,{useState} from 'react';
const App = () => {
  const[InputList, setInputList]=useState("");
  const [item,setitem]=useState([]);
  const items=(Event)=>{setInputList(Event.target.value)};
  const itemlist=()=>{
    setitem((olditem)=>{
      return [...olditem,InputList];
    });
    setInputList("");
  };

  const deleteitems=(id)=>{
    console.log('id');
    const updateditems=item.filter((itemvalue,index)=>{
      return index!=id;
    })
    setitem(updateditems);
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>TO-DO  LIST</h1>
        <br/>
        <input type="text" placeholder="add item" value={InputList} onChange={items}/>
        <button onClick={itemlist}> + </button>

        <ol>
          {item.map((itemvalue,index) => {
              return(
                <div className='todo_style' key={index}>
                  <i className='fa fa-times' aria-hidden="true" onClick={()=>deleteitems(index)}/>
                  <li>{itemvalue}</li>
                </div>
              )  
          })}
        </ol>
      </div>
    </div>
  )
}
export default App

