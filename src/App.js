import { useState } from "react";
import "./App.css";
import Todolist from "./Components/Todolist";

function App() {
  const [sett, newset] = useState("Mango.");
  const [Valuee, setValue] = useState([]);

  let InputValue = (event) => {
    newset(event.target.value);
  };
  let DeleteItem = ()=>{
    console.log("ganja is betteraaaaaaaaavvvvvvvvvv");
  }
  const ButtonClicked = () => {
    // if (sett=== "") {
    //   setValue("WRONG")
    // }
    setValue((oldItems) => {
      return [...oldItems, sett];
    });
    newset(" ");
  };
  // let DeleteItem = (id)=>{
    // console.log("ganja is better");
    // setValue((oldItems)=>{
    //   return(oldItems.filter((arrElem, index)=>{
    //       return (index !== id );
    //   }))
    // })
        // }
  return (
    <>
      <div className="container bg-slate-100 w-5/6 m-auto py-2 mt-8 rounded-lg items-center text-center lg:w-5/12 ">
        <div className="TodoList">
          <h1 className="MainHeading my-2 py-2 font-bold -tracking-tighter bg-violet-400 m-auto text-white lg:py-4 lg:my-4 lg:text-2xl ">
            ToDo List
          </h1>
        </div>
        <div className=" flex justify-around mt-10 px-2">
          <input
            value={sett}
            title="Add Note Here"
            onChange={InputValue}
            className=" border-none pb-1 text-center w-3/4 ml-2 "
            type="text"
            id="InputNote"
            placeholder="Add a Notes"
          />
          <div className="Plus font-extrabold  ">
            <button
              onClick={ButtonClicked}
              className="Plus p-4 py-2 bg-purple-500 text-white rounded-3xl hover:bg-green-600 text-2xl"
              title="Click Mes"
            >
              +
            </button>
          </div>
        </div>
          {/* <li className="text-purple-600 font-bold text-lg font-cursive">
            {sett}
          </li> */}
          <div className=" text-center " >
          {Valuee.map((ItemVal,index ) => {
            return (
              <>
                <Todolist key={index} id={index} onSelect={DeleteItem } text={ItemVal} />
              </>
            );
          })}
          </div>
          </div>
    </>
  );
}export default App;
