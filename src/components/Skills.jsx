

function Skills() {
  const mySkills = [
    { name: 'JavaScript', comfort: 9, frontEnd: true, backend: true },
    { name: 'CSS', comfort: 8, frontEnd: true, backend: false },
    { name: 'HTML', comfort: 10, frontEnd: true, backend: false },
  ];

  const skillStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const itemStyle = {
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    color: 'black'
  };

  return (
    <div>
      <h2>My Skills</h2>
      <ul style={skillStyle}>
        {mySkills.map((skill, index) => (
          <li key={index} style={itemStyle}>
            <strong>{skill.name}</strong> <br />
            Comfort Level: {skill.comfort} <br />
            {skill.frontEnd && <span>Frontend ✅</span>} <br />
            {skill.backend && <span>Backend ✅</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
