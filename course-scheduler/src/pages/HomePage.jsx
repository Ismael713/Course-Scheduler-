import CourseList from "../components/CourseList.jsx";

function HomePage() {
    return (
        <div>
            <h1 className="mb-4">Course Scheduler</h1>
            <CourseList />
        </div>
    );
}

export default HomePage;