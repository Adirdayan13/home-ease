import Map from './Map';
import Card from './Card';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { fetcher } from '../utils';
import useSWRImmutable from 'swr/immutable';
import AlignChildren from '../AlignChildren';
import '../App.css';

const Home = () => {
  const [hovered, setHovered] = useState(null);
  const { data, error, isLoading } = useSWRImmutable(
    `https://api.propstack.de/v1/units?status=164134,164042,164043&expand=true`,
    fetcher
  );

  if (isLoading) {
    return (
      <AlignChildren>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </AlignChildren>
    );
  }
  if (error) {
    return <AlignChildren><h1>Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</h1></AlignChildren>
  }

  return (
    <Container fluid className="vh-100 he-white-b">
      {data && (
        <Row className="h-100">
          {/* Map Section (Hidden on md and smaller) */}
          <Col md={6} className="d-none d-md-block p-0 position-fixed h-100">
            <div className="w-100 h-100 bg-secondary text-white d-flex align-items-center justify-content-center">
              <Map data={data} hovered={hovered} setHovered={setHovered} />
            </div>
          </Col>

          <Col md={6} className="offset-md-6 overflow-auto h-100 p-3 he-dark-b">
            <Row>
              <h1 className="he-yellow-c">Unser Immobillenangebot</h1>
              {data?.length > 0 && (
                <h3 className="he-white-c mb-3">
                  {`${data.length} Immobillien`}
                </h3>
              )}
              {data.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  hovered={hovered}
                  setHovered={setHovered}
                /> 
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
