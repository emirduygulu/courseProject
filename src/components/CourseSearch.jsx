import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/courseSlices";

function CourseSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=>{
    return state.courses.searchTerm;
  });
  return (
    <div className="listHeader">
      <h2 className="title">Kurslarım</h2>
      <div className="search field is-harizontal">
        <label className="label">Ara</label>
        <input
          className="input"
          onChange={() => {
            dispatch(changeSearchTerm(event.target.value));
          }} value={searchTerm}
        ></input>
      </div>
    </div>
  );
}

export default CourseSearch;
