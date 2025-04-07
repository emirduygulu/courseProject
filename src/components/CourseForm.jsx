import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCost, changeDescription, changeName } from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlices";

function CourseForm() {
  const dispatch = useDispatch()
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });

  const handleSubmit = () =>{
    event.preventDefault();
    dispatch(addCourse({name, description, cost}))
  };

console.log(name, description, cost);
  return (
    <div className="courseForm panel">
      <h3 className="subtitle is-3">Kurs Ekle</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="laber">Kurs Adı</label>
          <input className="input is-expanded" onChange={(event)=>{dispatch(changeName(event.target.value))}} value={name}/>
        </div>
        <div className="field">
          <label className="label">Kurs Açıklaması</label>
          <input className="input is-expanded" onChange={(event)=>{dispatch(changeDescription(event.target.value))}} value={description}/>
        </div>
        <div className="field">
            <label className="label">Kurs Fiyatı</label>
            <input className="input is-expanded" type="number" onChange={(event)=>{dispatch(changeCost(parseInt(event.target.value)))}} value={cost}/>
          </div>
          <div className="field">
            <button className="button-is-primary">Kaydet</button>
          </div>
      </form>
    </div>
  );
}

export default CourseForm;
