import { useNavigate } from 'react-router-dom';
import CarouselComponent from './CarouselComponent';
import { Col, Row } from 'react-bootstrap';
import Map2 from '../home/Map';
import Contact from '../contact/Contact';
import AlignChildren from '../AlignChildren';
import { useDetails } from './useDetails';
import { translate } from '../utils';
import '../App.css';

  
  const Details = ({ brokers }) => {
    const navigate = useNavigate();
    const {
      data,
      isLoading,
      error,
      isFloorPlanImages,
      dataToMap,
      generateCol,
      showLabelAndValue
    } = useDetails();

    if (isLoading) {
      return (
        <AlignChildren>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </AlignChildren>
      )
    }
    if (error) {
      return (
        <AlignChildren>
          <h1 className="he-teal-c text-center">Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</h1>
        </AlignChildren>
      )
    }

    const broker = brokers?.find((el) => el?.id === data?.broker?.id);

    return (
      <div className="he-white-b min-vh-100 pt-5">
        <div className="container">
          {data && (
            <div>
              <button
                className='he-dark-c p-0'
                onClick={() => navigate('/')}
                style={{ textDecoration: 'none', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 12, marginBottom: 16 }}
              >
                <i className="fa-solid fa-chevron-left"></i> Zurück
              </button>
              {data?.title?.value && (
                <>
                <h1 className="he-teal-c">{data.title.value}</h1>
                <h3 className="he-black-c" style={{ margin: '22px 0' }}>
                  {translate(data?.rs_type)} {translate(data?.marketing_type)}
                </h3>
                </>
              )}
              <CarouselComponent images={isFloorPlanImages(false)} />
              <h2 className="he-bronze-c" style={{ marginTop: 80, marginBottom: 32 }}>
                Objektdaten
              </h2>
              <div className="container">
                <Row className="justify-content-center mt-2">
                  {dataToMap?.map((el, idx) => el?.value ? generateCol(el, idx) : null)}
                </Row>
                {showLabelAndValue(data?.description_note?.label, data?.description_note?.value)}
                {showLabelAndValue(data?.furnishing_note?.label, data?.furnishing_note?.value)}
                {showLabelAndValue(data?.location_note?.label, data?.location_note?.value)}
                {showLabelAndValue(data?.other_note?.label, data?.other_note?.value)}
                {data?.links?.length > 0 && (
                  <div style={{ marginTop: 40 }}>
                    {data.links.map((el) => (
                      <a href={el?.url} target="_blank" rel="noopener noreferrer" key={el?.id} style={{ display: 'block', width: 'fit-content' }}>
                        <h2 className="he-bronze-c">{el?.title}</h2>
                      </a>
                    ))}
                  </div>
                )}
                <h2 className='he-bronze-c' style={{ marginTop: 80, marginBottom: 32 }}>
                  Karte
                </h2>
                <Col md={12} style={{ height: '450px' }}>
                  <div className="w-100 h-100 bg-secondary text-white d-flex align-items-center justify-content-center">
                    <Map2 data={[data]} singleMarker />
                  </div>
                </Col>
                {isFloorPlanImages(true)?.length > 0 && (
                  <Col sm={12}>
                    <h2 className='he-bronze-c' style={{ marginTop: 80, marginBottom: 32 }}>
                      Grundriss
                    </h2>
                    <CarouselComponent images={isFloorPlanImages(true)} />
                  </Col>
                )}
              </div>
            </div>
          )}
        </div>
        <Contact broker={broker} />
      </div>
    );
};
export default Details;
