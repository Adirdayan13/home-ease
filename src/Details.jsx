import { useNavigate, useParams } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import CarouselComponent from './CarouselComponent';
import { Col, Row } from 'react-bootstrap';
import Map2 from './Map';
import { alignChildren, fetcher, formatToCurrency, translate } from './utils';
import Contact from './Contact';
import './App.css';

const classNames = ["1-1", "1-2", "2-1", "2-2"];
const generateCol = (el, idx) => (
  <Col xs={12} md={6} className="p-0" key={el.label}>
    <div className={`d-flex justify-content-between mx-1 mb-md-1 mb-sm-2 px-4 py-2 mb-2 row-${classNames[idx % 4]}`}>
      <span className="par2">{el.label}</span>
      {typeof el.value === 'boolean' && <span className="par2">Ja</span>}
      {typeof el.value !== 'boolean' && (
        <span className="par2">
          {el.value}
          {el.addM2 ? 'm ' : null}
          {el.addM2 ? <sup>2</sup>  : null}
          {el.addKwh ? ' kWh/(m²*a)' : null}
        </span>
      )}
    </div>
  </Col>
);

  
  const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, error, isLoading } = useSWRImmutable(
      `https://api.propstack.de/v1/units/${id}?new=1&locale="de`,
      fetcher
    );

    if (data) {
      const dataToMap = [
        data?.hide_address
          ? {label: 'Einheitennummer', value: data.zip_code}
          : {label: 'Adresse', value: data.short_address},
        {label: 'Kategorie', value: translate(data?.marketing_type)},
        {label: 'Unterkategorie', value: data.apartment_type?.value ?? data?.building_type?.value},
        {label: data.construction_year?.label, value: data.construction_year?.value},
        {label: data.price?.label, value: formatToCurrency(data.price?.value)},
        {label: data.courtage?.label, value: data.courtage?.value},
        {label: data.free_from?.label, value: data.free_from?.value},
        {label: data.condition?.label, value: data.condition?.value},
        {label: data.rent_subsidy?.label, value: formatToCurrency(data.rent_subsidy?.value)},
        {label: data.plot_area?.label, value: data.plot_area?.value, addM2: true},
        {label: data.living_space?.label, value: data.living_space?.value, addM2: true},
        {label: data.number_of_rooms?.label, value: data.number_of_rooms?.value},
        {label: data.number_of_bed_rooms?.label, value: data.number_of_bed_rooms?.value},
        {label: data.number_of_bath_rooms?.label, value: data.number_of_bath_rooms?.value},
        {label: data.energy_certificate_availability?.label, value: data.energy_certificate_availability?.value},
        {label: data.energy_certificate_creation_date?.label, value: data.energy_certificate_creation_date?.value},
        {label: data.building_energy_rating_type?.label, value: data.building_energy_rating_type?.value},
        {label: data.energy_certificate_start_date?.label, value: data.energy_certificate_start_date?.value},
        {label: data.energy_certificate_end_date?.label, value: data.energy_certificate_end_date?.value},
        {label: data.thermal_characteristic?.label, value: data.thermal_characteristic?.value, addKwh: true},
        {label: data.energy_efficiency_class?.label, value: data.energy_efficiency_class?.value},
        {label: data.heating_type?.label, value: data.heating_type?.value},
        {label: data.firing_types?.label, value: data.firing_types?.value},
        {label: data.equipment_technology_construction_year?.label, value: data.equipment_technology_construction_year?.value},
        {label: data.distance_to_pt?.label, value: data.distance_to_pt?.value, addMin: true},
        {label: data.distance_to_mrs?.label, value: data.distance_to_mrs?.value, addMin: true},
        {label: data.distance_to_airport?.label, value: data.distance_to_airport?.value, addMin: true},
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

    const isFloorPlanImages = (bool) => data?.images.filter((el) => bool ? el?.title.toLowerCase()?.includes('grundriss') : !el?.title.toLowerCase()?.includes('grundriss'));

    return (
      <div
        className="he-white-b"
        style={{ paddingTop: 40, minHeight: '100vh' }}
      >
        <div className="container">
          {isLoading && alignChildren(
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {error && alignChildren(<h1 className="he-teal-c text-center">Error accured, please try again later.</h1>)}
          {data && (
            <div>
              <button
                onClick={() => navigate('/')}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 12, marginBottom: 16 }}
              >
                <i className="fa-solid fa-chevron-left"></i> Zurück
              </button>
              {data.title?.value && (
                <>
                <h1 className="he-teal-c">{data.title?.value}</h1>
                <h3 className="he-black-c" style={{ margin: '22px 0' }}>
                  Wohnung Kauf
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
                <h2 className='he-bronze-c' style={{ marginTop: 80, marginBottom: 32 }}>
                  {data?.description_note?.label}
                </h2>
                <span className="par2">{data?.description_note?.value}</span>
                <h2 className='he-bronze-c' style={{ marginTop: 80, marginBottom: 32 }}>
                  {data?.furnishing_note?.label}
                </h2>
                <span className="par2">{data?.furnishing_note?.value}</span>
                <h2 className='he-bronze-c' style={{ marginTop: 80, marginBottom: 32 }}>
                  {data?.location_note?.label}
                </h2>
                <span className="par2">{data?.location_note?.value}</span>
                <h2 className='he-bronze-c' style={{ marginTop: 80, marginBottom: 32 }}>
                  {data?.other_note?.label}
                </h2>
                <span className="par2">{data?.other_note?.value}</span>
                <div style={{ marginTop: 40 }}>
                {data?.links?.map((el) => (
                  <a href={el?.url} target="_blank" rel="noopener noreferrer" key={el?.id} style={{ display: 'block', width: 'fit-content' }}>
                    <h2 className="he-bronze-c">{el?.title}</h2>
                  </a>
                ))}
                </div>
                <h2 className='he-bronze-c' style={{ marginTop: 80, marginBottom: 32 }}>
                  Karte
                </h2>
                <Col md={12} style={{ height: '450px' }}>
                  <div className="w-100 h-100 bg-secondary text-white d-flex align-items-center justify-content-center">
                    <Map2 data={[data]} singleMarker />
                  </div>
                </Col>
                {isFloorPlanImages(true).length > 0 && (
                  <Col sm={12}>
                    <h2 className='he-bronze-c' style={{ marginTop: 80, marginBottom: 32 }}>
                      Ein Grundriss, der neue Maßstäbe setzt
                    </h2>
                    <CarouselComponent images={isFloorPlanImages(true)} />
                  </Col>
                )}
              </div>
            </div>
          )}
        </div>
        <Contact />
      </div>
    );
  };
};
export default Details;
