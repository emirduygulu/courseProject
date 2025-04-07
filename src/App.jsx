import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseSearch from './components/CourseSearch';
import CourseValue from './components/CourseValue';

function App() {
  return (
    <div className="app-container">
      <CourseForm />
      <div className="courses-container">
        <CourseSearch />
        <CourseList />
      </div>
      <CourseValue />
    </div>
  )
}

export default App
