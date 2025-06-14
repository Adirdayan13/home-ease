export const germanRegions = [
  'Baden-Württemberg',
  'Bayern',
  'Berlin',
  'Brandenburg',
  'Bremen',
  'Hamburg',
  'Hessen',
  'Mecklenburg-Vorpommern',
  'Niedersachsen',
  'Nordrhein-Westfalen',
  'Rheinland-Pfalz',
  'Saarland',
  'Sachsen',
  'Sachsen-Anhalt',
  'Schleswig-Holstein',
  'Thüringen',
];
const INVESTMENT = [ // Anlageobjekt
  { value: 'INVEST_MULTI_FAMILY_HOUSE', label: 'Eigentumswohnung' },
  { value: 'INVEST_SINGLE_FAMILY_HOUSE', label: 'Einfamilienhaus' },
  { value: 'INVEST_FREEHOLD_FLAT', label: 'Mehrfamilienhaus' },
  { value: 'INVEST_LIVING_BUSINESS_HOUSE', label: 'Einfamilienhaus' },
  { value: 'INVEST_LIVING_BUSINESS_HOUSE', label: 'Wohn-/Geschäftshaus' },
  { value: 'INVEST_MICRO_APARTMENTS', label: 'Micro-Apartments' },
  { value: 'INVEST_HOUSING_ESTATE', label: 'Wohnanlage' },
  { value: 'INVEST_OFFICE_BUILDING', label: 'Bürohaus' },
  { value: 'INVEST_COMMERCIAL_BUILDING', label: 'Geschäftshaus' },
  { value: 'INVEST_OFFICE_AND_COMMERCIAL_BUILDING', label: 'Büro- und Geschäftshaus'},
  { value: 'INVEST_SHOP_SALES_FLOOR', label: 'Laden/Verkaufsfläche' },
  { value: 'INVEST_SUPERMARKET', label: 'Supermarkt' },
  { value: 'INVEST_SHOPPING_CENTRE', label: 'Einkaufszentrum' },
  { value: 'INVEST_RETAIL_PARK', label: 'Fachmarktzentrum' },
  { value: 'INVEST_HOTEL', label: 'Hotel' },
  { value: 'INVEST_BOARDING_HOUSE', label: 'Boarding House' },
  { value: 'INVEST_SURGERY_BUILDING', label: 'Ärztehaus' },
  { value: 'INVEST_CLINIC', label: 'Klinik' },
  { value: 'INVEST_REHAB_CLINIC', label: 'Rehaklinik' },
  { value: 'INVEST_MEDICAL_SERVICE_CENTER', label: 'MVZ' },
  { value: 'INVEST_INTEGRATION_ASSISTANCE', label: 'Eingliederungshilfe' },
  { value: 'INVEST_DAY_NURSERY', label: 'Kita' },
  { value: 'INVEST_DAY_CARE', label: 'Tagespflege' },
  { value: 'INVEST_NURSING_HOME', label: 'Pflegeheim' },
  { value: 'INVEST_ASSISTED_LIVING', label: 'Betreutes Wohnen' },
  { value: 'INVEST_COMMERCIAL_CENTRE', label: 'Gewerbepark' },
  { value: 'INVEST_HALL_STORAGE', label: 'Halle/Logistik' },
  { value: 'INVEST_INDUSTRIAL_PROPERTY', label: 'Produktion/Fertigung' },
  { value: 'INVEST_CAR_PARK', label: 'Parkhaus' },
  { value: 'INVEST_PLOT', label: 'Grundstück' },
  { value: 'INVEST_COMMERCIAL_UNIT', label: 'Gewerbeeinheit' },
  { value: 'INVEST_OTHER', label: 'Sonstiges' },
];

const STORE = [ // Einzelhandel
  { value: ['STORE', 'SHOWROOM_SPACE'], label: 'Ausstellungsfläche' },
  { value: 'SHOPPING_CENTRE', label: 'Einkaufszentrum' },
  { value: 'FACTORY_OUTLET', label: 'Factory Outlet' },
  { value: 'DEPARTMENT_STORE', label: 'Kaufhaus' },
  { value: 'KIOSK', label: 'Kiosk' },
  { value: 'STORE', label: 'Laden' },
  { value: 'SELF_SERVICE_MARKET', label: 'SB-Markt' },
  { value: 'SALES_AREA', label: 'Verkaufsfläche' },
  { value: 'SALES_HALL', label: 'Verkaufshalle' },
];

const SPECIAL_PURPOSE = [ // Spezialgewerbe
  { value: 'RESIDENCE', label: 'Anwesen' },
  { value: 'FARM', label: 'Bauernhof' },
  { value: 'LEISURE_FACILITY', label: 'Freizeitanlage' },
  { value: 'COMMERCIAL_UNIT', label: 'Gewerbeeinheit' },
  { value: 'INDUSTRIAL_AREA', label: 'Gewerbefläche' },
  { value: 'COMMERCIAL_CENTRE', label: 'Gewerbepark' },
  { value: 'NURSING_HOME', label: 'Pflegeheim' },
  { value: 'ASSISTED_LIVING', label: 'Betreutes Wohnen' },
  { value: 'HORSE_FARM', label: 'Reiterhof' },
  { value: 'VINEYARD', label: 'Weingut' },
  { value: 'REPAIR_SHOP', label: 'Werkstatt' },
  { value: 'SPECIAL_ESTATE', label: 'Spezialobjekt' },
];

const INDUSTRY = [ // Halle/Produktion
  { value: 'SHOWROOM_SPACE', label: 'Ausstellungsfläche' },
  { value: 'HALL', label: 'Halle' },
  { value: 'HIGH_LACK_STORAGE', label: 'Hochregallager' },
  { value: 'INDUSTRY_HALL', label: 'Industriehalle' },
  {
    value: 'INDUSTRY_HALL_WITH_OPEN_AREA',
    label: 'Industriehalle mit Freifläche',
  },
  { value: 'COLD_STORAGE', label: 'Kühlhaus' },
  { value: 'MULTIDECK_CABINET_STORAGE', label: 'Kühlregallager' },
  { value: 'STORAGE_WITH_OPEN_AREA', label: 'Lager mit Freifläche' },
  { value: 'STORAGE_AREA', label: 'Lagerfläche' },
  { value: 'STORAGE_HALL', label: 'Lagerhalle' },
  { value: 'SERVICE_AREA', label: 'Servicefläche' },
  { value: 'SHIPPING_STORAGE', label: 'Speditionslager' },
  { value: ['INDUSTRY', 'REPAIR_SHOP'], label: 'Werkstatt' }
];

const GASTRONOMY = [ // Gastronomie/Hotels
  { value: 'BAR_LOUNGE', label: 'Barbetrieb/Lounge' },
  { value: 'CAFE', label: 'Café' },
  { value: 'CLUB_DISCO', label: 'Club/Diskothek' },
  { value: 'GUESTS_HOUSE', label: 'Gästehaus' },
  { value: 'TAVERN', label: 'Gaststätte' },
  { value: 'HOTEL', label: 'Hotel' },
  { value: 'HOTEL_RESIDENCE', label: 'Hotelanwesen' },
  { value: 'HOTEL_GARNI', label: 'Hotel garni' },
  { value: 'PENSION', label: 'Pension' },
  { value: 'RESTAURANT', label: 'Restaurant' },
];

const OFFICE = [ // Büro/Praxis
  { value: 'OFFICE_LOFT', label: 'Loft' },
  { value: 'STUDIO', label: 'Atelier' },
  { value: 'OFFICE', label: 'Büro' },
  { value: 'OFFICE_FLOOR', label: 'Büroetage' },
  { value: 'OFFICE_BUILDING', label: 'Bürohaus' },
  { value: 'OFFICE_CENTRE', label: 'Bürozentrum' },
  { value: 'OFFICE_STORAGE_BUILDING', label: 'Büro-/ Lagergebäude' },
  { value: 'SURGERY', label: 'Praxis' },
  { value: 'SURGERY_FLOOR', label: 'Praxisetage' },
  { value: 'SURGERY_BUILDING', label: 'Praxishaus' },
  { value: ['OFFICE', 'COMMERCIAL_CENTRE'], label: 'Gewerbezentrum' },
  { value: 'LIVING_AND_COMMERCIAL_BUILDING', label: 'Wohn- und Geschäftsgebäude' },
  { value: 'OFFICE_AND_COMMERCIAL_BUILDING', label: 'Büro- und Geschäftsgebäude' },
];

const GARAGE = [ // Garage
  { value: 'GARAGE', label: 'Garage' },
  { value: 'STREET_PARKING', label: 'Außenstellplatz' },
  { value: 'CARPORT', label: 'Carport' },
  { value: 'DUPLEX', label: 'Duplex' },
  { value: 'CAR_PARK', label: 'Parkhaus' },
  { value: 'UNDERGROUND_GARAGE', label: 'Tiefgarage' },
  { value: 'DOUBLE_GARAGE', label: 'Doppelgarage' },
];

const TRADE_SITE = [
  { value: 'TRADE_SITE', label: 'TRADE_SITE', hide: true }
];

const HOUSE = [ // Haus
  { value: 'SINGLE_FAMILY_HOUSE', label: 'Einfamilienhaus' },
  { value: 'TWO_FAMILY_HOUSE', label: 'Zweifamilienhaus' },
  { value: 'TERRACE_HOUSE', label: 'Reihenhaus' },
  { value: 'MID_TERRACE_HOUSE', label: 'Reihenmittelhaus' },
  { value: 'TERRACE_END_HOUSE', label: 'Reihenendhaus' },
  { value: 'END_TERRACE_HOUSE', label: 'Reiheneckhaus' },
  { value: 'MULTI_FAMILY_HOUSE', label: 'Mehrfamilienhaus' },
  { value: 'TOWNHOUSE', label: 'Stadthaus' },
  { value: 'FINCA', label: 'Finca' },
  { value: 'BUNGALOW', label: 'Bungalow' },
  { value: 'FARMHOUSE', label: 'Bauernhaus' },
  { value: 'SEMIDETACHED_HOUSE', label: 'Doppelhaushälfte' },
  { value: 'VILLA', label: 'Villa' },
  { value: 'CASTLE_MANOR_HOUSE', label: 'Burg/Schloss' },
  { value: 'SPECIAL_REAL_ESTATE', label: 'Besondere Immobilie' },
  { value: 'TWIN_SINGLE_FAMILY_HOUSE', label: 'Doppeleinfamilienhaus' },
  { value: 'SUMMER_RESIDENCE', label: 'Ferienhaus' },
];

const APARTMENT = [ // Wohnung
  { value: 'ROOF_STOREY', label: 'Dachgeschoss' },
  { value: 'LOFT', label: 'Loft' },
  { value: 'MAISONETTE', label: 'Maisonette' },
  { value: 'PENTHOUSE', label: 'Penthouse' },
  { value: 'TERRACED_FLAT', label: 'Terrassenwohnung' },
  { value: 'GROUND_FLOOR', label: 'Erdgeschosswohnung' },
  { value: 'APARTMENT', label: 'Etagenwohnung' },
  { value: 'RAISED_GROUND_FLOOR', label: 'Hochparterre' },
  { value: 'HALF_BASEMENT', label: 'Souterrain' },
  { value: 'ATTIKA', label: 'Attikawohnung' },
  { value: 'OTHER', label: 'Sonstige' },
];

export const rsTypeLabelMap = {
  APARTMENT: 'Wohnung',
  HOUSE: 'Haus',
  GARAGE: 'Garage',
  OFFICE: 'Büro',
  GASTRONOMY: 'Gastronomie/Hotels',
  INDUSTRIAL: 'Halle/Produktion',
  SPECIAL_PURPOSE: 'Spezialobjekte',
  RETAIL: 'Einzelhandel',
  Anlageobjekt: 'Anlageobjekt',
};

export const categoryFields = {
  APARTMENT: [ // Wohnung
    { value: 'number_of_rooms', label: 'Zimmer' },
    { value: 'number_of_rooms_to', label: 'Zimmer bis' },
    { value: 'living_space', label: 'Wohnfläche (m²)' },
    { value: 'living_space_to', label: 'Wohnfläche bis (m²)' },
    { value: 'lift', label: 'Aufzug', type: 'boolean' },
    { value: 'balcony', label: 'Balkon/Terrasse', type: 'boolean' },
  ],
  HOUSE: [ // Haus
    { value: 'number_of_rooms', label: 'Zimmer' },
    { value: 'number_of_rooms_to', label: 'Zimmer bis' },
    { value: 'living_space', label: 'Wohnfläche (m²)' },
    { value: 'living_space_to', label: 'Wohnfläche bis (m²)' },
    { value: 'plot_area', label: 'Grundstücksfläche (m²)' },
    { value: 'plot_area_to', label: 'Grundstücksfläche bis (m²)' },
  ],
  TRADE_SITE: [
    { value: 'plot_area', label: 'Grundstücksfläche (m²)' },
    { value: 'plot_area_to', label: 'Grundstücksfläche bis (m²)' },
    { value: 'bgf', label: 'BGF (m²)' },
    { value: 'bgf_to', label: 'BGF bis (m²)' },
  ],
  OFFICE: [ // Büro/Praxis
    { value: 'number_of_rooms', label: 'Zimmer' },
    { value: 'number_of_rooms_to', label: 'Zimmer bis' },
    { value: 'living_space', label: 'Wohnfläche (m²)' },
    { value: 'living_space_to', label: 'Wohnfläche bis (m²)' },
    { value: 'plot_area', label: 'Grundstücksfläche (m²)' },
    { value: 'plot_area_to', label: 'Grundstücksfläche bis (m²)' },
    { value: 'lift', label: 'Aufzug', type: 'boolean' },
    { value: 'barrier_free', label: 'Barrierefrei', type: 'boolean' },
    { value: 'balcony', label: 'Balkon/Terrasse', type: 'boolean' },
  ],
  GASTRONOMY: [ // Gastronomie/Hotels
    { value: 'number_of_rooms', label: 'Zimmer' },
    { value: 'number_of_rooms_to', label: 'Zimmer bis' },
    { value: 'living_space', label: 'Wohnfläche (m²)' },
    { value: 'living_space_to', label: 'Wohnfläche bis (m²)' },
    { value: 'plot_area', label: 'Grundstücksfläche (m²)' },
    { value: 'plot_area_to', label: 'Grundstücksfläche bis (m²)' },
    { value: 'lift', label: 'Aufzug', type: 'boolean' },
    { value: 'barrier_free', label: 'Barrierefrei', type: 'boolean' },
    { value: 'balcony', label: 'Balkon/Terrasse', type: 'boolean' },
  ],
  INDUSTRY: [ // Halle/Produktion
   { value: 'number_of_rooms', label: 'Zimmer' },
    { value: 'number_of_rooms_to', label: 'Zimmer bis' },
    { value: 'living_space', label: 'Wohnfläche (m²)' },
    { value: 'living_space_to', label: 'Wohnfläche bis (m²)' },
    { value: 'plot_area', label: 'Grundstücksfläche (m²)' },
    { value: 'plot_area_to', label: 'Grundstücksfläche bis (m²)' },
    { value: 'lift', label: 'Aufzug', type: 'boolean' },
    { value: 'barrier_free', label: 'Barrierefrei', type: 'boolean' },
    { value: 'balcony', label: 'Balkon/Terrasse', type: 'boolean' },
  ],
  STORE: [ // Einzelhandel
   { value: 'number_of_rooms', label: 'Zimmer' },
    { value: 'number_of_rooms_to', label: 'Zimmer bis' },
    { value: 'living_space', label: 'Wohnfläche (m²)' },
    { value: 'living_space_to', label: 'Wohnfläche bis (m²)' },
    { value: 'plot_area', label: 'Grundstücksfläche (m²)' },
    { value: 'plot_area_to', label: 'Grundstücksfläche bis (m²)' },
    { value: 'lift', label: 'Aufzug', type: 'boolean' },
    { value: 'barrier_free', label: 'Barrierefrei', type: 'boolean' },
    { value: 'balcony', label: 'Balkon/Terrasse', type: 'boolean' },
  ],
  SPECIAL_PURPOSE: [ // Spezialgewerbe
    { value: 'number_of_rooms', label: 'Zimmer' },
    { value: 'number_of_rooms_to', label: 'Zimmer bis' },
    { value: 'living_space', label: 'Wohnfläche (m²)' },
    { value: 'living_space_to', label: 'Wohnfläche bis (m²)' },
    { value: 'plot_area', label: 'Grundstücksfläche (m²)' },
    { value: 'plot_area_to', label: 'Grundstücksfläche bis (m²)' },
    { value: 'lift', label: 'Aufzug', type: 'boolean' },
    { value: 'barrier_free', label: 'Barrierefrei', type: 'boolean' },
    { value: 'balcony', label: 'Balkon/Terrasse', type: 'boolean' },
  ],
  
  INVESTMENT: [ // Anlageobjekt
    { value: 'living_space', label: 'Wohnfläche (m²)' },
    { value: 'living_space_to', label: 'Wohnfläche bis (m²)' },
    { value: 'total_floor_space', label: 'Vermietbare Fläche (m²)' },
    { value: 'total_floor_space_to', label: 'Vermietbare Fläche bis (m²)' },
    { value: 'plot_area', label: 'Grundstücksfläche (m²)' },
    { value: 'plot_area_to', label: 'Grundstücksfläche bis (m²)' },
    { value: 'number_of_apartments', label: 'Wohnungseinheiten' },
    { value: 'number_of_apartments_to', label: 'Wohnungseinheiten bis' },
    { value: 'number_of_commercials', label: 'Gewerbeeinheiten' },
    { value: 'number_of_commercials_to', label: 'Gewerbeeinheiten bis' },
  ],
};

export const rsTypeToCategories = {
  APARTMENT: APARTMENT, // Wohnung
  HOUSE: HOUSE, // Haus
  TRADE_SITE: TRADE_SITE,
  GARAGE: GARAGE,// Garage
  OFFICE: OFFICE, // Büro/Praxis
  GASTRONOMY: GASTRONOMY, // Gastronomie/Hotels
  INDUSTRY: INDUSTRY, // Halle/Produktion
  STORE: STORE, // Einzelhandel
  SPECIAL_PURPOSE: SPECIAL_PURPOSE, // Spezialgewerbe
  INVESTMENT: INVESTMENT, // Anlageobjekt
};
