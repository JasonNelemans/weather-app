export interface CountryStateTypes {
  countries: Country[];
  countriesApiUrl: string;
  country: string;
}

export interface Country {
  code: string;
  flag: string;
}
