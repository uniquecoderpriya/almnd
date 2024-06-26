import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css'; // Import your CSS file for additional styling

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="card-row">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./src/image/full-stack.png" />
          <Card.Body>
            <Card.Title>Full-Stack Development Course</Card.Title>
            <div className="button-group">
              <Button className="btn-ranipink btn-small" size="sm">online</Button>
              <Button className="btn-ranipink btn-small" size="sm">offline</Button>
              <Button className="btn-ranipink btn-small" size="sm">4 months</Button>
            </div>
            <Button className="btn-ranipink btn-view-details" size="md">View Details</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./src/image/Front-end.png" />
          <Card.Body>
            <Card.Title>Front-End Development Course</Card.Title>
            <div className="button-group">
              <Button className="btn-ranipink btn-small" size="sm">online</Button>
              <Button className="btn-ranipink btn-small" size="sm">offline</Button>
              <Button className="btn-ranipink btn-small" size="sm">4 months</Button>
            </div>
            <Button className="btn-ranipink btn-view-details" size="md">View Details</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="card-row">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./src/image/back-end.png" />
          <Card.Body>
            <Card.Title>Back-End Development Course</Card.Title>
            <div className="button-group">
              <Button className="btn-ranipink btn-small" size="sm">online</Button>
              <Button className="btn-ranipink btn-small" size="sm">offline</Button>
              <Button className="btn-ranipink btn-small" size="sm">4 months</Button>
            </div>
            <Button className="btn-ranipink btn-view-details" size="md">View Details</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./src/image/mobile.png" />
          <Card.Body>
            <Card.Title>Mobile App Development Course</Card.Title>
            <div className="button-group">
              <Button className="btn-ranipink btn-small" size="sm">online</Button>
              <Button className="btn-ranipink btn-small" size="sm">offline</Button>
              <Button className="btn-ranipink btn-small" size="sm">4 months</Button>
            </div>
            <Button className="btn-ranipink btn-view-details" size="md">View Details</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Sidebar;
