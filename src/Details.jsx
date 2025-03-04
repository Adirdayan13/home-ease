import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import CarouselComponent from './CarouselComponent';
import { Col, Row } from 'react-bootstrap';
import Map2 from './Map2';
import { fetcher } from './utils';
import Contact from './Contact';
import './App.css';

const classNames = ["1-1", "1-2", "2-1", "2-2"];
  const generateCol = (title, value, idx) => (
    <Col xs={12} md={6} className="p-0">
      <div className={`d-flex justify-content-between mx-1 mb-md-1 mb-sm-2 px-4 py-2 mb-2 row-${classNames[idx % 4]}`}>
        <span className="par2">{title}</span>
        <span className="par2">{typeof value === 'boolean' ? 'Ja' : value}</span>
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
    };

    const dataToMap = [
      {label: 'Einheitennummer', value: data.zip_code},
      {label: data.number_of_rooms?.label, value: data.number_of_rooms?.value},
      {label: 'Kategorie', value: '****TODO****'},
      {label: 'Unterkategorie', value: data.apartment_type?.value ?? data?.building_type?.value},
      {label: data.free_from?.label, value: data.free_from?.value},
      {label: data.construction_year?.label, value: data.construction_year?.value},
      {label: data.courtage?.label, value: data.courtage?.value},
      {label: data.condition?.label, value: data.condition?.value},
      {label: data.price?.label, value: data.price?.value},
      {label: data.building_type?.label, value: data.building_type?.value},
      {label: data.number_of_bed_rooms?.label, value: data.number_of_bed_rooms?.value},
      {label: data.number_of_bath_rooms?.label, value: data.number_of_bath_rooms?.value},
      {label: data.living_space?.label, value: data.living_space?.value},
      {label: data.plot_area?.label, value: data.plot_area?.value},
      {label: data.energy_certificate_availability?.label, value: data.energy_certificate_availability?.value},
      {label: data.building_energy_rating_type?.label, value: data.building_energy_rating_type?.value},
      {label: data.energy_certificate_start_date?.label, value: data.energy_certificate_start_date?.value},
      {label: data.energy_certificate_end_date?.label, value: data.energy_certificate_end_date?.value},
      {label: data.thermal_characteristic?.label, value: data.thermal_characteristic?.value},
      {label: data.heating_type?.label, value: data.heating_type?.value},
      {label: data.equipment_technology_construction_year?.label, value: data.equipment_technology_construction_year?.value},
      {label: data.distance_to_pt?.label, value: data.distance_to_pt?.value, addMin: true},
      {label: data.distance_to_mrs?.label, value: data.distance_to_mrs?.value, addMin: true},
      {label: data.distance_to_airport?.label, value: data.distance_to_airport?.value, addMin: true},
      {label: data.energy_certificate_creation_date?.label, value: data.energy_certificate_creation_date?.value},
      {label: data.summer_residence_practical?.label, value: data.summer_residence_practical?.value},
      {label: data.cellar?.label, value: data.cellar?.value},
      {label: data.built_in_kitchen?.label, value: data.built_in_kitchen?.value},
      {label: data.guest_toilet?.label, value: data.guest_toilet?.value},
      {label: data.balcony?.label, value: data.balcony?.value},
      {label: data.garden?.label, value: data.garden?.value},
      {label: data.winter_garden?.label, value: data.winter_garden?.value},
      {label: data.storeroom?.label, value: data.storeroom?.value},
      {label: data.chimney?.label, value: data.chimney?.value},
      {label: data.swimming_pool?.label, value: data.swimming_pool?.value},
      {label: data.sauna?.label, value: data.sauna?.value},
      {label: data.alarm_system?.label, value: data.alarm_system?.value},
      {label: data.air_conditioning?.label, value: data.air_conditioning?.value},
    ].filter((el) => el?.value)

    return (
      <div
        style={{
          backgroundColor: 'var(--home-ease-white)',
          paddingTop: 40,
          minHeight: '100vh',
        }}
      >
        <div className="container">
          {error && (
            <h1 style={{ color: 'var(--home-ease-teal)', textAlign: 'center' }}>
              Error accured, please try again later.
            </h1>
          )}
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
                  {dataToMap.map((el, idx) => generateCol(el.label, el.value, idx))}
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
                <Col md={12} style={{ height: '450px' }}>
                  <div className="w-100 h-100 bg-secondary text-white d-flex align-items-center justify-content-center">
                    <Map2 data={[data]} singleMarker />
                  </div>
                </Col>
              </div>
            </div>
          )}
        </div>
        <Contact />
      </div>
    );
};

export default Details;
