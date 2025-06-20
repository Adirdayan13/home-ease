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
  { value: ['INVESTMENT', 'INVEST_MULTI_FAMILY_HOUSE'], label: 'Eigentumswohnung' },
  { value: ['INVESTMENT', 'INVEST_SINGLE_FAMILY_HOUSE'], label: 'Einfamilienhaus' },
  { value: ['INVESTMENT', 'INVEST_FREEHOLD_FLAT'], label: 'Mehrfamilienhaus' },
  { value: ['INVESTMENT', 'INVEST_LIVING_BUSINESS_HOUSE'], label: 'Wohn-/Geschäftshaus' },
  { value: ['INVESTMENT', 'INVEST_MICRO_APARTMENTS'], label: 'Micro-Apartments' },
  { value: ['INVESTMENT', 'INVEST_HOUSING_ESTATE'], label: 'Wohnanlage' },
  { value: ['INVESTMENT', 'INVEST_OFFICE_BUILDING'], label: 'Bürohaus' },
  { value: ['INVESTMENT', 'INVEST_COMMERCIAL_BUILDING'], label: 'Geschäftshaus' },
  { value: ['INVESTMENT', 'INVEST_OFFICE_AND_COMMERCIAL_BUILDING'], label: 'Büro- und Geschäftshaus'},
  { value: ['INVESTMENT', 'INVEST_SHOP_SALES_FLOOR'], label: 'Laden/Verkaufsfläche' },
  { value: ['INVESTMENT', 'INVEST_SUPERMARKET'], label: 'Supermarkt' },
  { value: ['INVESTMENT', 'INVEST_SHOPPING_CENTRE'], label: 'Einkaufszentrum' },
  { value: ['INVESTMENT', 'INVEST_RETAIL_PARK'], label: 'Fachmarktzentrum' },
  { value: ['INVESTMENT', 'INVEST_HOTEL'], label: 'Hotel' },
  { value: ['INVESTMENT', 'INVEST_BOARDING_HOUSE'], label: 'Boarding House' },
  { value: ['INVESTMENT', 'INVEST_SURGERY_BUILDING'], label: 'Ärztehaus' },
  { value: ['INVESTMENT', 'INVEST_CLINIC'], label: 'Klinik' },
  { value: ['INVESTMENT', 'INVEST_REHAB_CLINIC'], label: 'Rehaklinik' },
  { value: ['INVESTMENT', 'INVEST_MEDICAL_SERVICE_CENTER'], label: 'MVZ' },
  { value: ['INVESTMENT', 'INVEST_INTEGRATION_ASSISTANCE'], label: 'Eingliederungshilfe' },
  { value: ['INVESTMENT', 'INVEST_DAY_NURSERY'], label: 'Kita' },
  { value: ['INVESTMENT', 'INVEST_DAY_CARE'], label: 'Tagespflege' },
  { value: ['INVESTMENT', 'INVEST_NURSING_HOME'], label: 'Pflegeheim' },
  { value: ['INVESTMENT', 'INVEST_ASSISTED_LIVING'], label: 'Betreutes Wohnen' },
  { value: ['INVESTMENT', 'INVEST_COMMERCIAL_CENTRE'], label: 'Gewerbepark' },
  { value: ['INVESTMENT', 'INVEST_HALL_STORAGE'], label: 'Halle/Logistik' },
  { value: ['INVESTMENT', 'INVEST_INDUSTRIAL_PROPERTY'], label: 'Produktion/Fertigung' },
  { value: ['INVESTMENT', 'INVEST_CAR_PARK'], label: 'Parkhaus' },
  { value: ['INVESTMENT', 'INVEST_PLOT'], label: 'Grundstück' },
  { value: ['INVESTMENT', 'INVEST_COMMERCIAL_UNIT'], label: 'Gewerbeeinheit' },
  { value: ['INVESTMENT', 'INVEST_OTHER'], label: 'Sonstiges' },
];

const STORE = [ // Einzelhandel
  { value: ['STORE', 'SHOWROOM_SPACE'], label: 'Ausstellungsfläche' },
  { value: ['STORE', 'SHOPPING_CENTRE'], label: 'Einkaufszentrum' },
  { value: ['STORE', 'FACTORY_OUTLET'], label: 'Factory Outlet' },
  { value: ['STORE', 'DEPARTMENT_STORE'], label: 'Kaufhaus' },
  { value: ['STORE', 'KIOSK'], label: 'Kiosk' },
  { value: ['STORE', 'STORE'], label: 'Laden' },
  { value: ['STORE', 'SELF_SERVICE_MARKET'], label: 'SB-Markt' },
  { value: ['STORE', 'SALES_AREA'], label: 'Verkaufsfläche' },
  { value: ['STORE', 'SALES_HALL'], label: 'Verkaufshalle' },
];

const SPECIAL_PURPOSE = [ // Spezialgewerbe
  { value: ['SPECIAL_PURPOSE', 'COMMERCIAL_CENTRE'], label: 'Gewerbepark' },
  { value: ['SPECIAL_PURPOSE', 'RESIDENCE'], label: 'Anwesen' },
  { value: ['SPECIAL_PURPOSE', 'FARM'], label: 'Bauernhof' },
  { value: ['SPECIAL_PURPOSE', 'LEISURE_FACILITY'], label: 'Freizeitanlage' },
  { value: ['SPECIAL_PURPOSE', 'COMMERCIAL_UNIT'], label: 'Gewerbeeinheit' },
  { value: ['SPECIAL_PURPOSE', 'INDUSTRIAL_AREA'], label: 'Gewerbefläche' },
  { value: ['SPECIAL_PURPOSE', 'NURSING_HOME'], label: 'Pflegeheim' },
  { value: ['SPECIAL_PURPOSE', 'ASSISTED_LIVING'], label: 'Betreutes Wohnen' },
  { value: ['SPECIAL_PURPOSE', 'REPAIR_SHOP'], label: 'Werkstatt' },
  { value: ['SPECIAL_PURPOSE', 'HORSE_FARM'], label: 'Reiterhof' },
  { value: ['SPECIAL_PURPOSE', 'VINEYARD'], label: 'Weingut' },
  { value: ['SPECIAL_PURPOSE', 'SPECIAL_ESTATE'], label: 'Spezialobjekt' },
];

const INDUSTRY = [ // Halle/Produktion
  { value: ['INDUSTRY', 'SHOWROOM_SPACE'], label: 'Ausstellungsfläche' },
  { value: ['INDUSTRY', 'HALL'], label: 'Halle' },
  { value: ['INDUSTRY', 'HIGH_LACK_STORAGE'], label: 'Hochregallager' },
  { value: ['INDUSTRY', 'INDUSTRY_HALL'], label: 'Industriehalle' },
  {
    value: ['INDUSTRY', 'INDUSTRY_HALL_WITH_OPEN_AREA'],
    label: 'Industriehalle mit Freifläche',
  },
  { value: ['INDUSTRY', 'COLD_STORAGE'], label: 'Kühlhaus' },
  { value: ['INDUSTRY', 'MULTIDECK_CABINET_STORAGE'], label: 'Kühlregallager' },
  { value: ['INDUSTRY', 'STORAGE_WITH_OPEN_AREA'], label: 'Lager mit Freifläche' },
  { value: ['INDUSTRY', 'STORAGE_AREA'], label: 'Lagerfläche' },
  { value: ['INDUSTRY', 'STORAGE_HALL'], label: 'Lagerhalle' },
  { value: ['INDUSTRY', 'SERVICE_AREA'], label: 'Servicefläche' },
  { value: ['INDUSTRY', 'SHIPPING_STORAGE'], label: 'Speditionslager' },
  { value: ['INDUSTRY', 'REPAIR_SHOP'], label: 'Werkstatt' }
];

const GASTRONOMY = [ // Gastronomie/Hotels
  { value: ['GASTRONOMY', 'BAR_LOUNGE'], label: 'Barbetrieb/Lounge' },
  { value: ['GASTRONOMY', 'CAFE'], label: 'Café' },
  { value: ['GASTRONOMY', 'CLUB_DISCO'], label: 'Club/Diskothek' },
  { value: ['GASTRONOMY', 'GUESTS_HOUSE'], label: 'Gästehaus' },
  { value: ['GASTRONOMY', 'TAVERN'], label: 'Gaststätte' },
  { value: ['GASTRONOMY', 'HOTEL'], label: 'Hotel' },
  { value: ['GASTRONOMY', 'HOTEL_RESIDENCE'], label: 'Hotelanwesen' },
  { value: ['GASTRONOMY', 'HOTEL_GARNI'], label: 'Hotel garni' },
  { value: ['GASTRONOMY', 'PENSION'], label: 'Pension' },
  { value: ['GASTRONOMY', 'RESTAURANT'], label: 'Restaurant' },
];

const OFFICE = [ // Büro/Praxis
  { value: ['OFFICE', 'OFFICE_LOFT'], label: 'Loft' },
  { value: ['OFFICE', 'STUDIO'], label: 'Atelier' },
  { value: ['OFFICE', 'OFFICE'], label: 'Büro' },
  { value: ['OFFICE', 'OFFICE_FLOOR'], label: 'Büroetage' },
  { value: ['OFFICE', 'OFFICE_BUILDING'], label: 'Bürohaus' },
  { value: ['OFFICE', 'OFFICE_CENTRE'], label: 'Bürozentrum' },
  { value: ['OFFICE', 'OFFICE_STORAGE_BUILDING'], label: 'Büro-/ Lagergebäude' },
  { value: ['OFFICE', 'SURGERY'], label: 'Praxis' },
  { value: ['OFFICE', 'SURGERY_FLOOR'], label: 'Praxisetage' },
  { value: ['OFFICE', 'SURGERY_BUILDING'], label: 'Praxishaus' },
  { value: ['OFFICE', 'COMMERCIAL_CENTRE'], label: 'Gewerbezentrum' },
  { value: ['OFFICE', 'LIVING_AND_COMMERCIAL_BUILDING'], label: 'Wohn- und Geschäftsgebäude' },
  { value: ['OFFICE', 'OFFICE_AND_COMMERCIAL_BUILDING'], label: 'Büro- und Geschäftsgebäude' },
];

const GARAGE = [ // Garage
  { value: ['GARAGE', 'GARAGE'], label: 'Garage' },
  { value: ['GARAGE', 'STREET_PARKING'], label: 'Außenstellplatz' },
  { value: ['GARAGE', 'CARPORT'], label: 'Carport' },
  { value: ['GARAGE', 'DUPLEX'], label: 'Duplex' },
  { value: ['GARAGE', 'CAR_PARK'], label: 'Parkhaus' },
  { value: ['GARAGE', 'UNDERGROUND_GARAGE'], label: 'Tiefgarage' },
  { value: ['GARAGE', 'DOUBLE_GARAGE'], label: 'Doppelgarage' },
];

const TRADE_SITE = [
  { value: ['TRADE_SITE'], label: 'TRADE_SITE', hide: true }
];

const HOUSE = [ // Haus
  { value: ['HOUSE', 'SINGLE_FAMILY_HOUSE'], label: 'Einfamilienhaus' },
  { value: ['HOUSE', 'TWO_FAMILY_HOUSE'], label: 'Zweifamilienhaus' },
  { value: ['HOUSE', 'TERRACE_HOUSE'], label: 'Reihenhaus' },
  { value: ['HOUSE', 'MID_TERRACE_HOUSE'], label: 'Reihenmittelhaus' },
  { value: ['HOUSE', 'TERRACE_END_HOUSE'], label: 'Reihenendhaus' },
  { value: ['HOUSE', 'END_TERRACE_HOUSE'], label: 'Reiheneckhaus' },
  { value: ['HOUSE', 'MULTI_FAMILY_HOUSE'], label: 'Mehrfamilienhaus' },
  { value: ['HOUSE', 'TOWNHOUSE'], label: 'Stadthaus' },
  { value: ['HOUSE', 'FINCA'], label: 'Finca' },
  { value: ['HOUSE', 'BUNGALOW'], label: 'Bungalow' },
  { value: ['HOUSE', 'FARMHOUSE'], label: 'Bauernhaus' },
  { value: ['HOUSE', 'SEMIDETACHED_HOUSE'], label: 'Doppelhaushälfte' },
  { value: ['HOUSE', 'VILLA'], label: 'Villa' },
  { value: ['HOUSE', 'CASTLE_MANOR_HOUSE'], label: 'Burg/Schloss' },
  { value: ['HOUSE', 'SPECIAL_REAL_ESTATE'], label: 'Besondere Immobilie' },
  { value: ['HOUSE', 'TWIN_SINGLE_FAMILY_HOUSE'], label: 'Doppeleinfamilienhaus' },
  { value: ['HOUSE', 'SUMMER_RESIDENCE'], label: 'Ferienhaus' },
];

const APARTMENT = [ // Wohnung
  { value: ['APARTMENT', 'ROOF_STOREY'], label: 'Dachgeschoss' },
  { value: ['APARTMENT', 'LOFT'], label: 'Loft' },
  { value: ['APARTMENT', 'MAISONETTE'], label: 'Maisonette' },
  { value: ['APARTMENT', 'PENTHOUSE'], label: 'Penthouse' },
  { value: ['APARTMENT', 'TERRACED_FLAT'], label: 'Terrassenwohnung' },
  { value: ['APARTMENT', 'GROUND_FLOOR'], label: 'Erdgeschosswohnung' },
  { value: ['APARTMENT', 'APARTMENT'], label: 'Etagenwohnung' },
  { value: ['APARTMENT', 'RAISED_GROUND_FLOOR'], label: 'Hochparterre' },
  { value: ['APARTMENT', 'HALF_BASEMENT'], label: 'Souterrain' },
  { value: ['APARTMENT', 'ATTIKA'], label: 'Attikawohnung' },
  { value: ['APARTMENT', 'OTHER'], label: 'Sonstige' },
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
    { value: 'net_floor_space', label: 'Vermietbare Fläche (m²)' },
    { value: 'net_floor_space_to', label: 'Vermietbare Fläche bis (m²)' },
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
