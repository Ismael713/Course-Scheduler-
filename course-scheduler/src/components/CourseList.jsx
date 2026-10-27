import useFetch from '../hooks/useFetch';
import CourseCard from './CourseCard';

function CourseList()
{
    const {
        data: courses, isPending, error
    } = useFetch('/courses');

    if (isPending)
    {
        return (<div className="text-center my-5">
                <div
                    className="spinner-border text-primary"
                    role="status"
                >
                    <span className="visually-hidden">
                        Loading...
                    </span>
                </div>
                <p className="mt-2">Loading courses...</p>
            </div>);
    }

    if (error)
    {
        return (<div className="alert alert-danger" role="alert">
                Failed to load courses: {error}
            </div>);
    }

    if (!Array.isArray(courses))
    {
        return (<div className="alert alert-warning" role="alert">
                The course data is not in the expected format.
            </div>);
    }

    const coursesById = new Map(courses.map(course => [String(course.id), course]));

    return (<section>
            <h2 className="mb-4">All Courses</h2>

            {courses.length === 0 ? (<p>No courses found.</p>) : (<div className="row g-4">
                    {courses.map(course =>
                    {
                        const prerequisiteNumbers = (course.prerequisites ?? [])
                            .map(id => coursesById.get(String(id)))
                            .filter(Boolean)
                            .map(prerequisite => prerequisite.courseNumber);

                        return (<div
                                className="col-12 col-md-6 col-lg-4"
                                key={course.id}
                            >
                                <CourseCard
                                    course={course}
                                    prerequisiteNumbers={prerequisiteNumbers}
                                />
                            </div>);
                    })}
                </div>)}
        </section>);
}

export default CourseList;
