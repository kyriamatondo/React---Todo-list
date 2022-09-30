import { useState } from "react";
import Item from "./Item/Item";
import { v4 as uuiv4 } from "uuid";

const Form = () => {
  const [dataTask, setDataTask] = useState([
    { txt: "Manger le haricot", id: uuiv4() },
    { txt: "Faire du sport", id: uuiv4() },
    { txt: "Coder avec React", id: uuiv4() },
  ]);

  const [stateInput, setStateInput] = useState();

  const deleteElement = (id) => {
    //console.log(id);
    const filteredState = dataTask.filter((item) => {
      return item.id !== id;
    });
    setDataTask(filteredState);
  };


  const addtodo = e => {
    e.preventDefault();
    const newArr = [...dataTask]

    const newtodo = {};
    newtodo.txt = stateInput;
    newtodo.id = uuiv4();

    newArr.push(newtodo);
    setDataTask(newArr);
    setStateInput('');
  }


  const linkedInput = e => {
    setStateInput(e);
  }


  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={e=>addtodo(e)} className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          Chose à faire
        </label>
        <input value={stateInput} onChange={e => linkedInput(e.target.value)} type="text" className="form-control" id="todo" />
        <button className="mt-2 btn btn-primary d-block">Ajouter</button>
      </form>
      <h2>Liste des choses à faire :</h2>
      <ul className="list-group">
        {dataTask.map((item) => {
          return (
            <Item
              txt={item.txt}
              key={item.id}
              id={item.id}
              delFunc={deleteElement}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Form;
