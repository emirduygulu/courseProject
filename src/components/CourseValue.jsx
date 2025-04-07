import React from 'react'
import { useSelector } from "react-redux";


function CourseValue() {
  const totalCost = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    let cost = 0;
    for (let course of filteredCourses) {
      cost += course.cost;
    }
    return cost;
  });
  
  
  return (
    <div className='coursePrice'>
      <span>Toplam Tutar: <strong>{totalCost.toLocaleString('tr-TR')} TL</strong></span>
    </div>
  )
}

export default CourseValue;
