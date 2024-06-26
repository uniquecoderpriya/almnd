import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css'; // Import your CSS file for additional styling

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-content">
        <img src='./src/image/medium.png' alt="Experience Image" className="experience-image" />
        <Card style={{ width: '18rem', backgroundColor: 'blue', color: 'white' }}>
          <Card.Body>
            <Card.Title>Experience The Workshop for Free</Card.Title>
            <Card.Text>
              Discover the realm of Graphic Design, Manual Testing, and Full Stack Development in 
              our free workshop. Join experts as they unveil the art of coding, design, and innovation. 
              Whether you're a beginner or an enthusiast, dive into live demos, real projects, and a 
              world of possibilities. Reserve your spot today, 
              next workshop starting on 29th March 2024, from 9:00AM To 1:00PM.
            </Card.Text>
            <Button className="btn-black" size="md" style={{ backgroundColor: 'black', color: 'white' }}>Join Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Experience;
