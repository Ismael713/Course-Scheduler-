function CourseCard({course, prerequisiteNumbers})
{
    return (<div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">
                    {course.courseNumber}: {course.title}
                </h5>

                <p className="text-muted mb-2">
                    Credits: {course.credits}
                </p>

                <p className="card-text">
                    {course.description}
                </p>

                <p className="card-text mb-0">
                    <strong>Prerequisites:</strong>{' '}
                    {prerequisiteNumbers.length > 0 ? prerequisiteNumbers.join(', ') : 'None'}
                </p>
            </div>
        </div>);
}
export default CourseCard;