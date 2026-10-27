import "../assets/styles.css";

function AboutPage() {
    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return (
        <main className="about-page">
            <section className="about-card">
                <h1>About</h1>

                <p className="about-description">
                    The Aurora CS Course Scheduler shows the CS Developer Track
                    catalog, tracks which courses you have completed, and shows
                    which courses you are eligible to take next.
                </p>

                <table className="about-table">
                    <tbody>
                    <tr>
                        <td><strong>Author(s)</strong></td>
                        <td>Partner One &amp; Partner Two</td>
                    </tr>

                    <tr>
                        <td><strong>Date</strong></td>
                        <td>{currentDate}</td>
                    </tr>

                    <tr>
                        <td><strong>Version</strong></td>
                        <td>1.0.0</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default AboutPage;