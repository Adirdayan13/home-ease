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
  { value: ['INVESTMENT', 'INVEST_MULTI_FAMILY_HOUSE'], de: 'Eigentumswohnung', en: 'Condominium' },
  { value: ['INVESTMENT', 'INVEST_SINGLE_FAMILY_HOUSE'], de: 'Einfamilienhaus', en: 'Single-family house' },
  { value: ['INVESTMENT', 'INVEST_FREEHOLD_FLAT'], de: 'Mehrfamilienhaus', en: 'Multi-family house' },
  { value: ['INVESTMENT', 'INVEST_LIVING_BUSINESS_HOUSE'], de: 'Wohn-/Geschäftshaus', en: 'Residential and commercial building' },
  { value: ['INVESTMENT', 'INVEST_MICRO_APARTMENTS'], de: 'Micro-Apartments', en: 'Micro-apartments' },
  { value: ['INVESTMENT', 'INVEST_HOUSING_ESTATE'], de: 'Wohnanlage', en: 'Residential complex' },
  { value: ['INVESTMENT', 'INVEST_OFFICE_BUILDING'], de: 'Bürohaus', en: 'Office building' },
  { value: ['INVESTMENT', 'INVEST_COMMERCIAL_BUILDING'], de: 'Geschäftshaus', en: 'Commercial building' },
  { value: ['INVESTMENT', 'INVEST_OFFICE_AND_COMMERCIAL_BUILDING'], de: 'Büro- und Geschäftshaus', en: 'Office and commercial building' },
  { value: ['INVESTMENT', 'INVEST_SHOP_SALES_FLOOR'], de: 'Laden/Verkaufsfläche', en: 'Retail space' },
  { value: ['INVESTMENT', 'INVEST_SUPERMARKET'], de: 'Supermarkt', en: 'Supermarket' },
  { value: ['INVESTMENT', 'INVEST_SHOPPING_CENTRE'], de: 'Einkaufszentrum', en: 'Shopping center' },
  { value: ['INVESTMENT', 'INVEST_RETAIL_PARK'], de: 'Fachmarktzentrum', en: 'Retail park / Specialty center' },
  { value: ['INVESTMENT', 'INVEST_HOTEL'], de: 'Hotel', en: 'Hotel' },
  { value: ['INVESTMENT', 'INVEST_BOARDING_HOUSE'], de: 'Boarding House', en: 'Boarding house' },
  { value: ['INVESTMENT', 'INVEST_SURGERY_BUILDING'], de: 'Ärztehaus', en: 'Medical center' },
  { value: ['INVESTMENT', 'INVEST_CLINIC'], de: 'Klinik', en: 'Clinic' },
  { value: ['INVESTMENT', 'INVEST_REHAB_CLINIC'], de: 'Rehaklinik', en: 'Rehabilitation clinic' },
  { value: ['INVESTMENT', 'INVEST_MEDICAL_SERVICE_CENTER'], de: 'MVZ', en: 'Medical care center' },
  { value: ['INVESTMENT', 'INVEST_INTEGRATION_ASSISTANCE'], de: 'Eingliederungshilfe', en: 'Integration assistance facility' },
  { value: ['INVESTMENT', 'INVEST_DAY_NURSERY'], de: 'Kita', en: 'Daycare center' },
  { value: ['INVESTMENT', 'INVEST_DAY_CARE'], de: 'Tagespflege', en: 'Daycare (for elderly)' },
  { value: ['INVESTMENT', 'INVEST_NURSING_HOME'], de: 'Pflegeheim', en: 'Nursing home' },
  { value: ['INVESTMENT', 'INVEST_ASSISTED_LIVING'], de: 'Betreutes Wohnen', en: 'Assisted living' },
  { value: ['INVESTMENT', 'INVEST_COMMERCIAL_CENTRE'], de: 'Gewerbepark', en: 'Business park' },
  { value: ['INVESTMENT', 'INVEST_HALL_STORAGE'], de: 'Halle/Logistik', en: 'Warehouse / logistics center' },
  { value: ['INVESTMENT', 'INVEST_INDUSTRIAL_PROPERTY'], de: 'Produktion/Fertigung', en: 'Production / manufacturing facility' },
  { value: ['INVESTMENT', 'INVEST_CAR_PARK'], de: 'Parkhaus', en: 'Multi-storey car park' },
  { value: ['INVESTMENT', 'INVEST_PLOT'], de: 'Grundstück', en: 'Land plot' },
  { value: ['INVESTMENT', 'INVEST_COMMERCIAL_UNIT'], de: 'Gewerbeeinheit', en: 'Commercial unit' },
  { value: ['INVESTMENT', 'INVEST_OTHER'], de: 'Sonstiges', en: 'Other' },
];

const STORE = [ // Einzelhandel
  { value: ['STORE', 'SHOWROOM_SPACE'], de: 'Ausstellungsfläche', en: 'Exhibition space' },
  { value: ['STORE', 'SHOPPING_CENTRE'], de: 'Einkaufszentrum', en: 'Shopping center' },
  { value: ['STORE', 'FACTORY_OUTLET'], de: 'Factory Outlet', en: 'Factory outlet' },
  { value: ['STORE', 'DEPARTMENT_STORE'], de: 'Kaufhaus', en: 'Department store' },
  { value: ['STORE', 'KIOSK'], de: 'Kiosk', en: 'Kiosk' },
  { value: ['STORE', 'STORE'], de: 'Laden', en: 'Shop' },
  { value: ['STORE', 'SELF_SERVICE_MARKET'], de: 'SB-Markt', en: 'Self-service market' },
  { value: ['STORE', 'SALES_AREA'], de: 'Verkaufsfläche', en: 'Retail space' },
  { value: ['STORE', 'SALES_HALL'], de: 'Verkaufshalle', en: 'Retail hall' },
];

const SPECIAL_PURPOSE = [ // Spezialgewerbe
  { value: ['SPECIAL_PURPOSE', 'COMMERCIAL_CENTRE'], de: 'Gewerbepark', en: 'Business park' },
  { value: ['SPECIAL_PURPOSE', 'RESIDENCE'], de: 'Anwesen', en: 'Estate' },
  { value: ['SPECIAL_PURPOSE', 'FARM'], de: 'Bauernhof', en: 'Farm' },
  { value: ['SPECIAL_PURPOSE', 'LEISURE_FACILITY'], de: 'Freizeitanlage', en: 'Leisure facility' },
  { value: ['SPECIAL_PURPOSE', 'COMMERCIAL_UNIT'], de: 'Gewerbeeinheit', en: 'Commercial unit' },
  { value: ['SPECIAL_PURPOSE', 'INDUSTRIAL_AREA'], de: 'Gewerbefläche', en: 'Commercial space' },
  { value: ['SPECIAL_PURPOSE', 'NURSING_HOME'], de: 'Pflegeheim', en: 'Nursing home' },
  { value: ['SPECIAL_PURPOSE', 'ASSISTED_LIVING'], de: 'Betreutes Wohnen', en: 'Assisted living' },
  { value: ['SPECIAL_PURPOSE', 'REPAIR_SHOP'], de: 'Werkstatt', en: 'Workshop' },
  { value: ['SPECIAL_PURPOSE', 'HORSE_FARM'], de: 'Reiterhof', en: 'Equestrian estate' },
  { value: ['SPECIAL_PURPOSE', 'VINEYARD'], de: 'Weingut', en: 'Vineyard' },
  { value: ['SPECIAL_PURPOSE', 'SPECIAL_ESTATE'], de: 'Spezialobjekt', en: 'Special-purpose property' },
];

const INDUSTRY = [ // Halle/Produktion
  { value: ['INDUSTRY', 'SHOWROOM_SPACE'], de: 'Ausstellungsfläche', en: 'Exhibition space' },
  { value: ['INDUSTRY', 'HALL'], de: 'Halle', en: 'Hall / Warehouse' },
  { value: ['INDUSTRY', 'HIGH_LACK_STORAGE'], de: 'Hochregallager', en: 'High-bay warehouse' },
  { value: ['INDUSTRY', 'INDUSTRY_HALL'], de: 'Industriehalle', en: 'Industrial hall' },
  {
    value: ['INDUSTRY', 'INDUSTRY_HALL_WITH_OPEN_AREA'],
    de: 'Industriehalle mit Freifläche', en: 'Industrial hall with open yard'
  },
  { value: ['INDUSTRY', 'COLD_STORAGE'], de: 'Kühlhaus', en: 'Cold storage' },
  { value: ['INDUSTRY', 'MULTIDECK_CABINET_STORAGE'], de: 'Kühlregallager', en: 'Cold racking warehouse' },
  { value: ['INDUSTRY', 'STORAGE_WITH_OPEN_AREA'], de: 'Lager mit Freifläche', en: 'Warehouse with open yard' },
  { value: ['INDUSTRY', 'STORAGE_AREA'], de: 'Lagerfläche', en: 'Storage area' },
  { value: ['INDUSTRY', 'STORAGE_HALL'], de: 'Lagerhalle', en: 'Warehouse' },
  { value: ['INDUSTRY', 'SERVICE_AREA'], de: 'Servicefläche', en: 'Service area' },
  { value: ['INDUSTRY', 'SHIPPING_STORAGE'], de: 'Speditionslager', en: 'Logistics warehouse' },
  { value: ['INDUSTRY', 'REPAIR_SHOP'], de: 'Werkstatt', en: 'Workshop' }
];

const GASTRONOMY = [ // Gastronomie/Hotels
  { value: ['GASTRONOMY', 'BAR_LOUNGE'], de: 'Barbetrieb/Lounge', en: 'Bar / Lounge' },
  { value: ['GASTRONOMY', 'CAFE'], de: 'Cafe', en: 'Café' },
  { value: ['GASTRONOMY', 'CLUB_DISCO'], de: 'Club/Diskothek', en: 'Club / Nightclub' },
  { value: ['GASTRONOMY', 'GUESTS_HOUSE'], de: 'Gästehaus', en: 'Guesthouse' },
  { value: ['GASTRONOMY', 'TAVERN'], de: 'Gaststätte', en: 'Restaurant / Pub' },
  { value: ['GASTRONOMY', 'HOTEL'], de: 'Hotel', en: 'Hotel' },
  { value: ['GASTRONOMY', 'HOTEL_RESIDENCE'], de: 'Hotelanwesen', en: 'Hotel estate' },
  { value: ['GASTRONOMY', 'HOTEL_GARNI'], de: 'Hotel garni', en: 'Bed & breakfast' },
  { value: ['GASTRONOMY', 'PENSION'], de: 'Pension', en: 'Guesthouse / Inn' },
  { value: ['GASTRONOMY', 'RESTAURANT'], de: 'Restaurant', en: 'Restaurant' },
];

const OFFICE = [ // Büro/Praxis
  { value: ['OFFICE', 'OFFICE_LOFT'], de: 'Loft', en: 'Loft' },
  { value: ['OFFICE', 'STUDIO'], de: 'Atelier', en: 'Studio / Atelier' },
  { value: ['OFFICE', 'OFFICE'], de: 'Büro', en: 'Office' },
  { value: ['OFFICE', 'OFFICE_FLOOR'], de: 'Büroetage', en: 'Office floor' },
  { value: ['OFFICE', 'OFFICE_BUILDING'], de: 'Bürohaus', en: 'Office building' },
  { value: ['OFFICE', 'OFFICE_CENTRE'], de: 'Bürozentrum', en: 'Office center' },
  { value: ['OFFICE', 'OFFICE_STORAGE_BUILDING'], de: 'Büro-/ Lagergebäude', en: 'Office / warehouse building' },
  { value: ['OFFICE', 'SURGERY'], de: 'Praxis', en: 'Medical practice' },
  { value: ['OFFICE', 'SURGERY_FLOOR'], de: 'Praxisetage', en: 'Medical floor' },
  { value: ['OFFICE', 'SURGERY_BUILDING'], de: 'Praxishaus', en: 'Medical building' },
  { value: ['OFFICE', 'COMMERCIAL_CENTRE'], de: 'Gewerbezentrum', en: 'Business center' },
  { value: ['OFFICE', 'LIVING_AND_COMMERCIAL_BUILDING'], de: 'Wohn- und Geschäftsgebäude', en: 'Residential and commercial building' },
  { value: ['OFFICE', 'OFFICE_AND_COMMERCIAL_BUILDING'], de: 'Büro- und Geschäftsgebäude', en: 'Office and commercial building' },
];

const GARAGE = [ // Garage
  { value: ['GARAGE', 'GARAGE'], de: 'Garage', en: 'Garage' },
  { value: ['GARAGE', 'STREET_PARKING'], de: 'Außenstellplatz', en: 'Outdoor parking space' },
  { value: ['GARAGE', 'CARPORT'], de: 'Carport', en: 'Carport' },
  { value: ['GARAGE', 'DUPLEX'], de: 'Duplex', en: 'Duplex parking system' },
  { value: ['GARAGE', 'CAR_PARK'], de: 'Parkhaus', en: 'Multi-storey car park' },
  { value: ['GARAGE', 'UNDERGROUND_GARAGE'], de: 'Tiefgarage', en: 'Underground garage' },
  { value: ['GARAGE', 'DOUBLE_GARAGE'], de: 'Doppelgarage', en: 'Double garage' },
];

const TRADE_SITE = [
  { value: ['TRADE_SITE'], label: 'TRADE_SITE', hide: true }
];

const HOUSE = [ // Haus
  { value: ['HOUSE', 'SINGLE_FAMILY_HOUSE'], de: 'Einfamilienhaus', en: 'Single-family house' },
  { value: ['HOUSE', 'TWO_FAMILY_HOUSE'], de: 'Zweifamilienhaus', en: 'Two-family house' },
  { value: ['HOUSE', 'TERRACE_HOUSE'], de: 'Reihenhaus', en: 'Row house' },
  { value: ['HOUSE', 'MID_TERRACE_HOUSE'], de: 'Reihenmittelhaus', en: 'Mid-row house' },
  { value: ['HOUSE', 'TERRACE_END_HOUSE'], de: 'Reihenendhaus', en: 'End-row house' },
  { value: ['HOUSE', 'END_TERRACE_HOUSE'], de: 'Reiheneckhaus', en: 'Corner row house' },
  { value: ['HOUSE', 'MULTI_FAMILY_HOUSE'], de: 'Mehrfamilienhaus', en: 'Multi-family house' },
  { value: ['HOUSE', 'TOWNHOUSE'], de: 'Stadthaus', en: 'Townhouse' },
  { value: ['HOUSE', 'FINCA'], de: 'Finca', en: 'Country estate / finca' },
  { value: ['HOUSE', 'BUNGALOW'], de: 'Bungalow', en: 'Bungalow' },
  { value: ['HOUSE', 'FARMHOUSE'], de: 'Bauernhaus', en: 'Farmhouse' },
  { value: ['HOUSE', 'SEMIDETACHED_HOUSE'], de: 'Doppelhaushälfte', en: 'Semi-detached house' },
  { value: ['HOUSE', 'VILLA'], de: 'Villa', en: 'Villa' },
  { value: ['HOUSE', 'CASTLE_MANOR_HOUSE'], de: 'Burg/Schloss', en: 'Castle / Palace' },
  { value: ['HOUSE', 'SPECIAL_REAL_ESTATE'], de: 'Besondere Immobilie', en: 'Special property' },
  { value: ['HOUSE', 'TWIN_SINGLE_FAMILY_HOUSE'], de: 'Doppeleinfamilienhaus', en: 'Dual single-family house' },
  { value: ['HOUSE', 'SUMMER_RESIDENCE'], de: 'Ferienhaus', en: 'Holiday home / Vacation house' },
];

const APARTMENT = [ // Wohnung
  { value: ['APARTMENT', 'ROOF_STOREY'], de: 'Dachgeschoss', en: 'Top floor apartment' },
  { value: ['APARTMENT', 'LOFT'], de: 'Loft', en: 'Loft' },
  { value: ['APARTMENT', 'MAISONETTE'], de: 'Maisonette', en: 'Maisonette' },
  { value: ['APARTMENT', 'PENTHOUSE'], de: 'Penthouse', en: 'Penthouse' },
  { value: ['APARTMENT', 'TERRACED_FLAT'], de: 'Terrassenwohnung', en: 'Apartment with terrace' },
  { value: ['APARTMENT', 'GROUND_FLOOR'], de: 'Erdgeschosswohnung', en: 'Ground floor apartment' },
  { value: ['APARTMENT', 'APARTMENT'], de: 'Etagenwohnung', en: 'Standard floor apartment' },
  { value: ['APARTMENT', 'RAISED_GROUND_FLOOR'], de: 'Hochparterre', en: 'Raised ground floor apartment' },
  { value: ['APARTMENT', 'HALF_BASEMENT'], de: 'Souterrain', en: 'Sublevel apartment' },
  { value: ['APARTMENT', 'ATTIKA'], de: 'Attikawohnung', en: 'Attic apartment' },
  { value: ['APARTMENT', 'OTHER'], de: 'Sonstige', en: 'Other' },
];

export const rsTypeLabelMap = {
  de: {
    APARTMENT: 'Wohnungen',
    HOUSE: 'Häuser',
    TRADE_SITE: 'Grundstück',
    GARAGE: 'Garagen & Stellplätze',
    OFFICE: 'Büro / Praxis',
    GASTRONOMY: 'Gastronomie & Hotels',
    INDUSTRY: 'Halle/Produktion',
    SPECIAL_PURPOSE: 'Spezialobjekte',
    STORE: 'Einzelhandel',
    INVESTMENT: 'Anlageobjekt',
  },
  en: {
    APARTMENT: 'Apartments',
    HOUSE: 'Houses',
    TRADE_SITE: 'Land plot',
    GARAGE: 'Garages & Parking',
    OFFICE: 'Office & Practice',
    GASTRONOMY: 'Hospitality',
    INDUSTRY: 'Industrial & Production',
    SPECIAL_PURPOSE: 'Special Commercial',
    STORE: 'Retail',
    INVESTMENT: 'Investment properties',
  }
};

export const categoryFields = {
  APARTMENT: [ // Wohnung
    { value: 'number_of_rooms', de: 'Zimmer', en: 'Rooms' },
    { value: 'number_of_rooms_to', de: 'Zimmer bis', en: 'Rooms' },
    { value: 'living_space', de: 'Wohnfläche (m²)', en: 'Living area' },
    { value: 'living_space_to', de: 'Wohnfläche bis (m²)', en: 'Living area' },
    { value: 'lift', de: 'Aufzug', en: 'Elevator', type: 'boolean' },
    { value: 'balcony', de: 'Balkon/Terrasse', en: 'Balcony/Terrace', type: 'boolean' },
  ],
  HOUSE: [ // Haus
    { value: 'number_of_rooms', de: 'Zimmer', en: 'Rooms' },
    { value: 'number_of_rooms_to', de: 'Zimmer bis', en: 'Rooms' },
    { value: 'living_space', de: 'Wohnfläche (m²)', en: 'Living area' },
    { value: 'living_space_to', de: 'Wohnfläche bis (m²)', en: 'Living area' },
    { value: 'plot_area', de: 'Grundstücksfläche (m²)', en: 'Plot area' },
    { value: 'plot_area_to', de: 'Grundstücksfläche bis (m²)', en: 'Plot area' },
  ],
  TRADE_SITE: [
    { value: 'plot_area', de: 'Grundstücksfläche (m²)', en: 'Plot area' },
    { value: 'plot_area_to', de: 'Grundstücksfläche bis (m²)', en: 'Plot area' },
    { value: 'bgf', de: 'BGF (m²)', en: 'Gross floor area (GFA)' },
    { value: 'bgf_to', de: 'BGF bis (m²)', en: 'Gross floor area (GFA)' },
  ],
  OFFICE: [ // Büro/Praxis
    { value: 'number_of_rooms', de: 'Zimmer', en: 'Rooms' },
    { value: 'number_of_rooms_to', de: 'Zimmer bis', en: 'Rooms' },
    { value: 'living_space', de: 'Wohnfläche (m²)', en: 'Living area' },
    { value: 'living_space_to', de: 'Wohnfläche bis (m²)', en: 'Living area' },
    { value: 'plot_area', de: 'Grundstücksfläche (m²)', en: 'Plot area' },
    { value: 'plot_area_to', de: 'Grundstücksfläche bis (m²)', en: 'Plot area' },
    { value: 'lift', de: 'Aufzug', en: 'Elevator', type: 'boolean' },
    { value: 'barrier_free', de: 'Barrierefrei', en: 'Barrier-free', type: 'boolean' },
    { value: 'balcony', de: 'Balkon/Terrasse', en: 'Balcony/Terrace', type: 'boolean' },
  ],
  GASTRONOMY: [ // Gastronomie/Hotels
    { value: 'number_of_rooms', de: 'Zimmer', en: 'Rooms' },
    { value: 'number_of_rooms_to', de: 'Zimmer bis', en: 'Rooms' },
    { value: 'living_space', de: 'Wohnfläche (m²)', en: 'Living area' },
    { value: 'living_space_to', de: 'Wohnfläche bis (m²)', en: 'Living area' },
    { value: 'plot_area', de: 'Grundstücksfläche (m²)', en: 'Plot area' },
    { value: 'plot_area_to', de: 'Grundstücksfläche bis (m²)', en: 'Plot area' },
    { value: 'lift', de: 'Aufzug', en: 'Elevator', type: 'boolean' },
    { value: 'barrier_free', de: 'Barrierefrei', en: 'Barrier-free', type: 'boolean' },
    { value: 'balcony', de: 'Balkon/Terrasse', en: 'Balcony/Terrace', type: 'boolean' },
  ],
  INDUSTRY: [ // Halle/Produktion
    { value: 'number_of_rooms', de: 'Zimmer', en: 'Rooms' },
    { value: 'number_of_rooms_to', de: 'Zimmer bis', en: 'Rooms' },
    { value: 'living_space', de: 'Wohnfläche (m²)', en: 'Living area' },
    { value: 'living_space_to', de: 'Wohnfläche bis (m²)', en: 'Living area' },
    { value: 'plot_area', de: 'Grundstücksfläche (m²)', en: 'Plot area' },
    { value: 'plot_area_to', de: 'Grundstücksfläche bis (m²)', en: 'Plot area' },
    { value: 'lift', de: 'Aufzug', en: 'Elevator', type: 'boolean' },
    { value: 'barrier_free', de: 'Barrierefrei', en: 'Barrier-free', type: 'boolean' },
    { value: 'balcony', de: 'Balkon/Terrasse', en: 'Balcony/Terrace', type: 'boolean' },
  ],
  STORE: [ // Einzelhandel
    { value: 'number_of_rooms', de: 'Zimmer', en: 'Rooms' },
    { value: 'number_of_rooms_to', de: 'Zimmer bis', en: 'Rooms' },
    { value: 'living_space', de: 'Wohnfläche (m²)', en: 'Living area' },
    { value: 'living_space_to', de: 'Wohnfläche bis (m²)', en: 'Living area' },
    { value: 'plot_area', de: 'Grundstücksfläche (m²)', en: 'Plot area' },
    { value: 'plot_area_to', de: 'Grundstücksfläche bis (m²)', en: 'Plot area' },
    { value: 'lift', de: 'Aufzug', en: 'Elevator', type: 'boolean' },
    { value: 'barrier_free', de: 'Barrierefrei', en: 'Barrier-free', type: 'boolean' },
    { value: 'balcony', de: 'Balkon/Terrasse', en: 'Balcony/Terrace', type: 'boolean' },
  ],
  SPECIAL_PURPOSE: [ // Spezialgewerbe
    { value: 'number_of_rooms', de: 'Zimmer', en: 'Rooms' },
    { value: 'number_of_rooms_to', de: 'Zimmer bis', en: 'Rooms' },
    { value: 'living_space', de: 'Wohnfläche (m²)', en: 'Living area' },
    { value: 'living_space_to', de: 'Wohnfläche bis (m²)', en: 'Living area' },
    { value: 'plot_area', de: 'Grundstücksfläche (m²)', en: 'Plot area' },
    { value: 'plot_area_to', de: 'Grundstücksfläche bis (m²)', en: 'Plot area' },
    { value: 'lift', de: 'Aufzug', en: 'Elevator', type: 'boolean' },
    { value: 'barrier_free', de: 'Barrierefrei', en: 'Barrier-free', type: 'boolean' },
    { value: 'balcony', de: 'Balkon/Terrasse', en: 'Balcony/Terrace', type: 'boolean' },
  ],
  
  INVESTMENT: [ // Anlageobjekt
    { value: 'number_of_rooms', de: 'Zimmer', en: 'Rooms' },
    { value: 'number_of_rooms_to', de: 'Zimmer bis', en: 'Rooms' },
    { value: 'living_space', de: 'Wohnfläche (m²)', en: 'Living area' },
    { value: 'living_space_to', de: 'Wohnfläche bis (m²)', en: 'Living area' },
    { value: 'plot_area', de: 'Grundstücksfläche (m²)', en: 'Plot area' },
    { value: 'plot_area_to', de: 'Grundstücksfläche bis (m²)', en: 'Plot area' },
    { value: 'number_of_apartments', de: 'Wohnungseinheiten', en: 'residential units' },
    { value: 'number_of_apartments_to', de: 'Wohnungseinheiten bis', en: 'residential units' },
    { value: 'number_of_commercials', de: 'Gewerbeeinheiten', en: 'Commercial units' },
    { value: 'number_of_commercials_to', de: 'Gewerbeeinheiten bis', en: 'Commercial units' },
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
