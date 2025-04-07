import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlices";

function CourseList() {
  const dispatch = useDispatch();
  const {courses} = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return{
      courses : filteredCourses
    };
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);

  useEffect(() => {
    // Toplam slide sayısını hesapla
    const slidesNeeded = Math.max(0, Math.ceil(courses.length / 3) - 1);
    setMaxSlides(slidesNeeded);
  }, [courses]);

  const handlePrev = () => {
    setCurrentSlide((curr) => Math.max(curr - 1, 0));
  };

  const handleNext = () => {
    setCurrentSlide((curr) => Math.min(curr + 1, maxSlides));
  };

  // Kurs listesi boşsa
  if (courses.length === 0) {
    return (
      <div className="empty-courses">
        <div className="empty-icon">📚</div>
        <p>Kurs oluşturulmamıştır</p>
      </div>
    );
  }

  const renderedCourses = courses.map((course) => {
    return (
      <div key={course.id} className="listPanel">
        <div className="content">
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          <p>{course.cost} TL</p>
        </div>
        <button
          onClick={() => {
            dispatch(removeCourse(course.id));
          }}
          className="button"
        >
          Sil
        </button>
      </div>
    );
  });

  return (
    <div className="courseList-container">
      {maxSlides > 0 && (
        <button
          className="slider-button prev"
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          &#8592;
        </button>
      )}

      <div
        className="courseList"
        style={{
          transform: `translateX(calc(-${currentSlide * 100}% - ${
            currentSlide * 1.5
          }rem))`,
        }}
      >
        {renderedCourses}
      </div>

      {maxSlides > 0 && (
        <button
          className="slider-button next"
          onClick={handleNext}
          disabled={currentSlide === maxSlides}
        >
          &#8594;
        </button>
      )}
    </div>
  );
}

export default CourseList;
