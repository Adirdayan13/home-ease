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

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWRImmutable(
    `https://api.propstack.de/v1/units/${id}?new=1`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (data)
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
              <h1 style={{ color: 'var(--home-ease-teal)' }}>
                {data?.title?.value}
              </h1>
              <h3 style={{ color: 'var(--home-ease-black)', margin: '22px 0' }}>
                Wohnung Kauf
              </h3>
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
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">Einheitennummer</span>
                      <span className="par2">
                        {data?.hide_address ? data?.zip_code : data.address}
                      </span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.number_of_rooms?.label}
                      </span>
                      <span className="par2">
                        {data?.number_of_rooms?.value}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.number_of_rooms?.label}
                      </span>
                      <span className="par2">
                        {data?.number_of_rooms?.value}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* Third Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      {/* TODO - Check kategorie*/}
                      <span className="par2">Kategorie</span>
                      <span className="par2">Kauf - Wohnung</span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">Kategorie</span>
                      <span className="par2">Kauf - Wohnung</span>
                    </div>
                  </Col>

                  {/* Fourth Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.free_from?.label}</span>
                      <span className="par2">{data?.free_from?.value}</span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.construction_year?.label}
                      </span>
                      <span className="par2">
                        {data?.construction_year?.value}
                      </span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.courtage?.label}</span>
                      <span className="par2">{data?.courtage?.value}</span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.courtage?.label}</span>
                      <span className="par2">{data?.courtage?.value}</span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* Third Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.condition?.label}</span>
                      <span className="par2">{data?.condition?.value}</span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.condition?.label}</span>
                      <span className="par2">{data?.condition?.value}</span>
                    </div>
                  </Col>

                  {/* Fourth Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.price?.label}</span>
                      <span className="par2">{data?.price?.value}</span>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.building_type?.label}</span>
                      <span className="par2">{data?.building_type?.value}</span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.interior_quality?.label}
                      </span>
                      <span className="par2">
                        {data?.interior_quality?.value}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.interior_quality?.label}
                      </span>
                      <span className="par2">
                        {data?.interior_quality?.value}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* Third Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.last_refurbishment?.label}
                      </span>
                      <span className="par2">
                        {data?.last_refurbishment?.value}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.last_refurbishment?.label}
                      </span>
                      <span className="par2">
                        {data?.last_refurbishment?.value}
                      </span>
                    </div>
                  </Col>

                  {/* Fourth Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.number_of_bed_rooms?.label}
                      </span>
                      <span className="par2">
                        {data?.number_of_bed_rooms?.value}
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.number_of_bath_rooms?.label}
                      </span>
                      <span className="par2">
                        {data?.number_of_bath_rooms?.value}
                      </span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.living_space?.label}</span>
                      <span className="par2">{data?.living_space?.value}</span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.living_space?.label}</span>
                      <span className="par2">{data?.living_space?.value}</span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* Third Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.plot_area?.label}</span>
                      <span className="par2">{data?.plot_area?.value}</span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.plot_area?.label}</span>
                      <span className="par2">{data?.plot_area?.value}</span>
                    </div>
                  </Col>

                  {/* Fourth Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.summer_residence_practical?.label}
                      </span>
                      <span className="par2">
                        {data?.summer_residence_practical?.value}
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.cellar?.label}</span>
                      <span className="par2">
                        {data?.cellar?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.built_in_kitchen?.label}
                      </span>
                      <span className="par2">
                        {data?.built_in_kitchen?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.built_in_kitchen?.label}
                      </span>
                      <span className="par2">
                        {data?.built_in_kitchen?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* Third Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.guest_toilet?.label}</span>
                      <span className="par2">
                        {data?.guest_toilet?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.guest_toilet?.label}</span>
                      <span className="par2">
                        {data?.guest_toilet?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>

                  {/* Fourth Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.balcony?.label}</span>
                      <span className="par2">
                        {data?.balcony?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.garden?.label}</span>
                      <span className="par2">
                        {data?.garden?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.winter_garden?.label}</span>
                      <span className="par2">
                        {data?.winter_garden?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.winter_garden?.label}</span>
                      <span className="par2">
                        {data?.winter_garden?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* Third Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.storeroom?.label}</span>
                      <span className="par2">
                        {data?.storeroom?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.storeroom?.label}</span>
                      <span className="par2">
                        {data?.storeroom?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>

                  {/* Fourth Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.chimney?.label}</span>
                      <span className="par2">
                        {data?.chimney?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.swimming_pool?.label}</span>
                      <span className="par2">
                        {data?.swimming_pool?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.sauna?.label}</span>
                      <span className="par2">
                        {data?.sauna?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.sauna?.label}</span>
                      <span className="par2">
                        {data?.sauna?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* Third Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.alarm_system?.label}</span>
                      <span className="par2">
                        {data?.alarm_system?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.alarm_system?.label}</span>
                      <span className="par2">
                        {data?.alarm_system?.value ? 'Ja' : 'Nein'}
                      </span>
                    </div>
                  </Col>

                  {/* Fourth Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.energy_certificate_availability?.label}
                      </span>
                      <span className="par2">
                        {data?.energy_certificate_availability?.value}
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.building_energy_rating_type?.label}
                      </span>
                      <span className="par2">
                        {data?.building_energy_rating_type?.value}
                      </span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.energy_certificate_start_date?.label}
                      </span>
                      <span className="par2">
                        {data?.energy_certificate_start_date?.value}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.energy_certificate_start_date?.label}
                      </span>
                      <span className="par2">
                        {data?.energy_certificate_start_date?.value}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* Third Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.energy_certificate_end_date?.label}
                      </span>
                      <span className="par2">
                        {data?.energy_certificate_end_date?.value}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.energy_certificate_end_date?.label}
                      </span>
                      <span className="par2">
                        {data?.energy_certificate_end_date?.value}
                      </span>
                    </div>
                  </Col>

                  {/* Fourth Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.thermal_characteristic?.label}
                      </span>
                      <span className="par2">
                        {data?.thermal_characteristic?.value}
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.heating_type?.label}</span>
                      <span className="par2">{data?.heating_type?.value}</span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">{data?.firing_types?.label}</span>
                      <span className="par2">{data?.firing_types?.value}</span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">{data?.firing_types?.label}</span>
                      <span className="par2">{data?.firing_types?.value}</span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* Third Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.energy_efficiency_class?.label}
                      </span>
                      <span className="par2">
                        {data?.energy_efficiency_class?.value}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.energy_efficiency_class?.label}
                      </span>
                      <span className="par2">
                        {data?.energy_efficiency_class?.value}
                      </span>
                    </div>
                  </Col>

                  {/* Fourth Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.equipment_technology_construction_year?.label}
                      </span>
                      <span className="par2">
                        {data?.equipment_technology_construction_year?.value}
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.distance_to_pt?.label}
                      </span>
                      <span className="par2">
                        {data?.distance_to_pt?.value} Min.
                      </span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.distance_to_mrs?.label}
                      </span>
                      <span className="par2">
                        {data?.distance_to_mrs?.value} Min.
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.distance_to_mrs?.label}
                      </span>
                      <span className="par2">
                        {data?.distance_to_mrs?.value} Min.
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* Third Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.distance_to_airport?.label}
                      </span>
                      <span className="par2">
                        {data?.distance_to_airport?.value} Min.
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.distance_to_airport?.label}
                      </span>
                      <span className="par2">
                        {data?.distance_to_airport?.value} Min.
                      </span>
                    </div>
                  </Col>

                  {/* Fourth Column (Bronze on Desktop, Light on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.equipment_technology_construction_year?.label}
                      </span>
                      <span className="par2">
                        {data?.equipment_technology_construction_year?.value}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  {/* First Column (Light on Both Desktop & Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-md-0 mb-sm-2 px-4 py-2"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.air_conditioning?.label}
                      </span>
                      <span className="par2">
                        {data?.air_conditioning?.value}
                      </span>
                    </div>
                  </Col>

                  {/* Second Column (Light on Desktop, Bronze on Mobile) */}
                  <Col xs={12} md={6} className="p-0">
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-flex d-none"
                      style={{ background: 'var(--home-ease-light)' }}
                    >
                      <span className="par2">
                        {data?.energy_certificate_creation_date?.label}
                      </span>
                      <span className="par2">
                        {data?.energy_certificate_creation_date?.value}
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between mx-1 mb-0 mb-sm-1 px-4 py-2 d-md-none"
                      style={{ background: 'var(--home-ease-bronze)' }}
                    >
                      <span className="par2">
                        {data?.energy_certificate_creation_date?.label}
                      </span>
                      <span className="par2">
                        {data?.energy_certificate_creation_date?.value}
                      </span>
                    </div>
                  </Col>
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
                    <Map2 data={[data]} centerFromData />
                  </div>
                </Col>
              </div>
            </div>
          )}
          {error && (
            <h1 style={{ color: 'var(--home-ease-teal)', textAlign: 'center' }}>
              Error accured
            </h1>
          )}
        </div>
      </div>
    );
};

export default Details;
