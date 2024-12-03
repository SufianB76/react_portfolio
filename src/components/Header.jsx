

function Header() {
  const name = "Sufian Bhatti";
  const tagline = "Aspiring Junior Software Developer";
  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    borderRadius: '5px',
  };

  return (
    <div style={headerStyle}>
      <h1>{name}</h1>
      <p>{tagline}</p>
    </div>
  );
}

export default Header;
