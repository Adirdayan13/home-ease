import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import CarouselComponent from './CarouselComponent';
import { Col, Row } from 'react-bootstrap';
import Map2 from './Map2';
import './App.css';

const fetcher = (url) =>
  fetch(url, {
    headers: { 'X-API-KEY': '' },
  }).then((response) => response.json());

  const generateCol = (title, value, position) => (
    <Col xs={12} md={6} className="p-0">
      <div className={`d-flex justify-content-between mx-1 mb-md-1 mb-sm-2 px-4 py-2 mb-2 row-${position}`}>
        <span className="par2">{title}</span>
        <span className="par2">{value}</span>
      </div>
    </Col>
  );

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWRImmutable(
    `https://api.propstack.de/v1/units/${id}?new=1`,
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
      <div
        style={{
          backgroundColor: 'var(--home-ease-white)',
          paddingTop: 40,
          minHeight: '100vh',
        }}
      >
        <div className="container">
          {data && (
            <div>
              {data.title?.value && (
                <>
                <h1 style={{ color: 'var(--home-ease-teal)' }}>
                {data.title?.value}
              </h1>
              <h3 style={{ color: 'var(--home-ease-black)', margin: '22px 0' }}>
                Wohnung Kauf
              </h3>
                </>
              )}
              <CarouselComponent images={data.images} />
              <h2
                style={{
                  color: 'var(--home-ease-bronze)',
                  marginTop: 80,
                  marginBottom: 32,
                }}
              >
                Objektdaten
              </h2>
              <div className="container">
                <Row className="justify-content-center mt-2">
                  {generateCol('Einheitennummer', (data.hide_address ? data.zip_code : data.address), '1-1')}
                  {generateCol(data.number_of_rooms?.label, data.number_of_rooms?.value, '1-2')}
                  {generateCol('Kategorie', 'Kauf - Wohnung', '2-1')}
                  {generateCol(data.free_from?.label, data.free_from?.value, '2-2')}
                  {generateCol(data.construction_year?.label, data.construction_year?.value, '1-1')}
                  {generateCol(data.courtage?.label, data.courtage?.value, '1-2')}
                  {generateCol(data.condition?.label, data.condition?.value, '2-1')}
                  {generateCol(data.price?.label, data.price?.value, '2-2')}
                  {generateCol(data.building_type?.label, data.building_type?.value, '1-1')}
                  {generateCol(data.interior_quality?.label, data.interior_quality?.value, '1-2')}
                  {generateCol(data.last_refurbishment?.label, data.last_refurbishment?.value, '2-1')}
                  {generateCol(data.number_of_bed_rooms?.label, data.number_of_bed_rooms?.value, '2-2')}
                  {generateCol(data.number_of_bath_rooms?.label, data.number_of_bath_rooms?.value, '1-1')}
                  {generateCol(data.living_space?.label, data.living_space?.value, '1-2')}
                  {generateCol(data.plot_area?.label, data.plot_area?.value, '2-1')}
                  {generateCol(data.summer_residence_practical?.label, data?.summer_residence_practical?.value ? 'Ja' : 'Nein', '2-2')}
                  {generateCol(data.cellar?.label, data?.cellar?.value ? 'Ja' : 'Nein', '1-1')}
                  {generateCol(data.built_in_kitchen?.label, data?.built_in_kitchen?.value ? 'Ja' : 'Nein', '1-2')}
                  {generateCol(data.guest_toilet?.label, data?.guest_toilet?.value ? 'Ja' : 'Nein', '2-1')}
                  {generateCol(data.balcony?.label, data?.balcony?.value ? 'Ja' : 'Nein', '2-2')}
                  {generateCol(data.garden?.label, data?.garden?.value ? 'Ja' : 'Nein', '1-1')}
                  {generateCol(data.winter_garden?.label, data?.winter_garden?.value ? 'Ja' : 'Nein', '1-2')}
                  {generateCol(data.storeroom?.label, data?.storeroom?.value ? 'Ja' : 'Nein', '2-1')}
                  {generateCol(data.chimney?.label, data?.chimney?.value ? 'Ja' : 'Nein', '2-2')}
                  {generateCol(data.swimming_pool?.label, data?.swimming_pool?.value ? 'Ja' : 'Nein', '1-1')}
                  {generateCol(data.sauna?.label, data?.sauna?.value ? 'Ja' : 'Nein', '1-2')}
                  {generateCol(data.alarm_system?.label, data?.alarm_system?.value ? 'Ja' : 'Nein', '2-1')}
                  {generateCol(data.energy_certificate_availability?.label, data?.energy_certificate_availability?.value, '2-2')}
                  {generateCol(data.building_energy_rating_type?.label, data?.building_energy_rating_type?.value, '1-1')}
                  {generateCol(data.energy_certificate_start_date?.label, data?.energy_certificate_start_date?.value, '1-2')}
                  {generateCol(data.energy_certificate_end_date?.label, data?.energy_certificate_end_date?.value, '2-1')}
                  {generateCol(data.thermal_characteristic?.label, data?.thermal_characteristic?.value, '2-2')}
                  {generateCol(data.heating_type?.label, data?.heating_type?.value, '1-1')}
                  {generateCol(data.energy_efficiency_class?.label, data?.energy_efficiency_class?.value, '1-2')}
                  {generateCol(data.equipment_technology_construction_year?.label, data?.equipment_technology_construction_year?.value, '2-1')}
                  {generateCol(data.distance_to_pt?.label, `${data?.distance_to_pt?.value} Min.`, '2-2')}
                  {generateCol(data.distance_to_mrs?.label, `${data?.distance_to_mrs?.value} Min.`, '1-1')}
                  {generateCol(data.distance_to_airport?.label, `${data?.distance_to_airport?.value} Min.`, '1-2')}
                  {generateCol(data.air_conditioning?.label, data?.air_conditioning?.value ? 'Ja' : 'Nein', '2-1')}
                  {generateCol(data.energy_certificate_creation_date?.label, data?.energy_certificate_creation_date?.value, '2-2')}
                </Row>

                <h2
                  style={{
                    color: 'var(--home-ease-bronze)',
                    marginTop: 80,
                    marginBottom: 32,
                  }}
                >
                  {data?.description_note?.label}
                </h2>
                <span className="par2">{data?.description_note?.value}</span>
                <h2
                  style={{
                    color: 'var(--home-ease-bronze)',
                    marginTop: 40,
                    marginBottom: 32,
                  }}
                >
                  {data?.furnishing_note?.label}
                </h2>
                <span className="par2">{data?.furnishing_note?.value}</span>
                <h2
                  style={{
                    color: 'var(--home-ease-bronze)',
                    marginTop: 40,
                    marginBottom: 32,
                  }}
                >
                  {data?.location_note?.label}
                </h2>
                <span className="par2">{data?.location_note?.value}</span>
                <h2
                  style={{
                    color: 'var(--home-ease-bronze)',
                    marginTop: 40,
                    marginBottom: 32,
                  }}
                >
                  {data?.other_note?.label}
                </h2>
                <span className="par2">{data?.other_note?.value}</span>
                <div style={{ marginTop: 40 }}>
                {data?.links.map((el) => (
                  <a href={el?.url} target="_blank" rel="noopener noreferrer" key={el?.id} style={{ display: 'block', width: 'fit-content' }}>
                    <h2 style={{ color: 'var(--home-ease-bronze)' }}>{el?.title}</h2>
                  </a>
                ))}
                </div>
                <h2
                  style={{
                    color: 'var(--home-ease-bronze)',
                    marginTop: 80,
                    marginBottom: 32,
                  }}
                >
                  Karte
                </h2>
                <Col md={12} style={{ height: '250px' }}>
                  <div className="w-100 h-100 bg-secondary text-white d-flex align-items-center justify-content-center">
                    <Map2 data={[data]} singleMarker />
                  </div>
                </Col>
              </div>
            </div>
          )}
          {error && (
            <h1 style={{ color: 'var(--home-ease-teal)', textAlign: 'center' }}>
              Error accured, please try again later.
            </h1>
          )}
        </div>
      </div>
    );
};

export default Details;
