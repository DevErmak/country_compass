export interface CountrySlice {
  data: Array<DataCountries>;
  isLoading: boolean;
}

export interface DataCountries {
  [key: string | number | symbol]: any;
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Gini {
  '2016'?: number;
  '2018'?: number;
  '2017'?: number;
  '2011'?: number;
  '2019'?: number;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Translations {
  ara: Cnr;
  bre: Cnr;
  ces: Cnr;
  cym: Cnr;
  deu: Cnr;
  est: Cnr;
  fin: Cnr;
  fra: Cnr;
  hrv: Cnr;
  hun: Cnr;
  ita: Cnr;
  jpn?: Cnr;
  kor: Cnr;
  nld: Cnr;
  per: Cnr;
  pol: Cnr;
  por: Cnr;
  rus: Cnr;
  slk: Cnr;
  spa: Cnr;
  srp: Cnr;
  swe: Cnr;
  tur: Cnr;
  urd: Cnr;
  zho: Cnr;
}

export interface Languages {
  cnr?: string;
  pol?: string;
  ell?: string;
  tur?: string;
  nor?: string;
  deu?: string;
  fra?: string;
  ltz?: string;
  sqi?: string;
  swe?: string;
  ita?: string;
  lat?: string;
  lav?: string;
  mkd?: string;
  eng?: string;
  nrf?: string;
  spa?: string;
  mlt?: string;
  dan?: string;
  cat?: string;
  rus?: string;
  srp?: string;
  slk?: string;
  lit?: string;
  fao?: string;
  nld?: string;
  isl?: string;
  bos?: string;
  hrv?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  fin?: string;
  ron?: string;
  slv?: string;
  bul?: string;
  de?: string;
  gle?: string;
  ces?: string;
  bel?: string;
  hun?: string;
  glv?: string;
  ukr?: string;
  gsw?: string;
  roh?: string;
  nfr?: string;
  est?: string;
  por?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Currencies {
  EUR?: EUR;
  PLN?: EUR;
  NOK?: EUR;
  ALL?: EUR;
  SEK?: EUR;
  MKD?: EUR;
  GBP?: EUR;
  JEP?: EUR;
  DKK?: EUR;
  GIP?: EUR;
  RUB?: EUR;
  RSD?: EUR;
  FOK?: EUR;
  ISK?: EUR;
  BAM?: BAM;
  MDL?: EUR;
  BGN?: EUR;
  CZK?: EUR;
  RON?: EUR;
  BYN?: EUR;
  HUF?: EUR;
  IMP?: EUR;
  UAH?: EUR;
  CHF?: EUR;
  GGP?: EUR;
}

export interface BAM {
  name: string;
}

export interface EUR {
  name: string;
  symbol: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  cnr?: Cnr;
  pol?: Cnr;
  ell?: Cnr;
  tur?: Cnr;
  nor?: Cnr;
  deu?: Cnr;
  fra?: Cnr;
  ltz?: Cnr;
  sqi?: Cnr;
  swe?: Cnr;
  ita?: Cnr;
  lat?: Cnr;
  lav?: Cnr;
  mkd?: Cnr;
  eng?: Cnr;
  nrf?: Cnr;
  spa?: Cnr;
  mlt?: Cnr;
  dan?: Cnr;
  cat?: Cnr;
  rus?: Cnr;
  srp?: Cnr;
  slk?: Cnr;
  lit?: Cnr;
  fao?: Cnr;
  nld?: Cnr;
  isl?: Cnr;
  bos?: Cnr;
  hrv?: Cnr;
  nno?: Cnr;
  nob?: Cnr;
  smi?: Cnr;
  fin?: Cnr;
  ron?: Cnr;
  slv?: Cnr;
  bul?: Cnr;
  bar?: Cnr;
  gle?: Cnr;
  ces?: Cnr;
  bel?: Cnr;
  hun?: Cnr;
  glv?: Cnr;
  ukr?: Cnr;
  gsw?: Cnr;
  roh?: Cnr;
  nfr?: Cnr;
  est?: Cnr;
  por?: Cnr;
}

export interface Cnr {
  official: string;
  common: string;
}
