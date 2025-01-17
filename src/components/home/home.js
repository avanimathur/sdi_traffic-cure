import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Homepage</h1>
      <p style={styles.paragraph}>
        This is a simple React homepage without navigation or a footer. 
        You can customize it to fit your needs.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
    maxWidth: '600px',
  },
};

export default HomePage;
