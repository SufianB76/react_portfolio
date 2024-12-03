

function About() {
  const aboutText = "I am a passionate software developer with skills in React, JavaScript, and more. Excited to build and contribute to amazing projects.";
  const aboutStyle = {
    margin: '20px 0',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    color: 'black',
  };

  return (
    <div style={aboutStyle}>
      <h2>About Me</h2>
      <p>{aboutText}</p>
    </div>
  );
}

export default About;
