const EngineeringTopics = () => {
  const topics = [
    {
      title: "Software Engineering",
      description:
        "Building innovative software solutions for the modern world.",
    },
    {
      title: "Electrical Engineering",
      description: "Powering innovation in electronics and systems.",
    },
    {
      title: "Mechanical Engineering",
      description: "Designing machines and systems that shape the future.",
    },
    {
      title: "Chemical Engineering",
      description: "Advancing processes for a sustainable future.",
    },
  ];

  return (
    <div className="EngineeringTopics">
      <h2>Engineering Topics</h2>
        {topics.map((topic) => (
          <div className="topic">
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
    </div>
  );
};

export default EngineeringTopics;
