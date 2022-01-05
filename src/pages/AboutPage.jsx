import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">About this project</div>
      <p>This is a React app to leave feedback for a service</p>
      <p>Version: 1.0.0</p>
      <p>
        <a href="/">Back Home</a>
      </p>
    </Card>
  );
}

export default AboutPage;
