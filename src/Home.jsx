import Map2 from './Map2';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import { fetcher } from './utils';
import './App.css';

const Home = () => {
  const [hovered, setHovered] = useState(null);
  const { data, error, isLoading } = useSWRImmutable(
    `https://api.propstack.de/v1/units?status=164134,164042,164043&expand=true`,
    fetcher
  );
  
  if (isLoading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--home-ease-white)' }}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* Map Section (Hidden on md and smaller) */}
        <Col md={6} className="d-none d-md-block p-0 position-fixed h-100">
          <div className="w-100 h-100 bg-secondary text-white d-flex align-items-center justify-content-center">
            <Map2 data={data} hovered={hovered} setHovered={setHovered} />
          </div>
        </Col>

        <Col
          md={6}
          className="offset-md-6 overflow-auto h-100 p-3"
          style={{ background: 'var(--home-ease-dark)' }}
        >
          <Row>
            <h1 style={{ color: 'var(--home-ease-yellow)' }}>
              Unser Immobillenangebot
            </h1>
            {data?.length && (
              <h3 style={{ color: 'var(--home-ease-white)', marginBottom: 16 }}>
                {`${data.length} Immobillien`}
              </h3>
            )}
            {data.map((item) => (
              <Card
                item={item}
                hovered={hovered}
                setHovered={setHovered}
              /> 
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
