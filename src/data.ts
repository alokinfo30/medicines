export interface Drug {
  code: string;
  genericName: string;
  brandName: string;
  company: string;
  launchDate: string;
}

export interface ProcessedDrug extends Drug {
  uniqueId: number;
  name: string;
}

export interface ColumnConfig {
  id: string;
  header: string;
  key: keyof ProcessedDrug;
}

export interface TableConfig {
  columns: ColumnConfig[];
  initialSort: {
    key: keyof ProcessedDrug;
    direction: 'asc' | 'desc';
  };
}

export const RAW_DATA: Drug[] = [
  {
    code: 'DRO123',
    genericName: 'Drospirenone',
    brandName: 'Yasmin',
    company: 'Bayer',
    launchDate: '2001-05-11'
  },
  {
    code: 'ATO456',
    genericName: 'Atorvastatin',
    brandName: 'Lipitor',
    company: 'Pfizer',
    launchDate: '1997-01-01'
  },
  {
    code: 'MET789',
    genericName: 'Metformin',
    brandName: 'Glucophage',
    company: 'Merck',
    launchDate: '1995-03-15'
  },
  {
    code: 'LIS258',
    genericName: 'Lisdexamfetamine',
    brandName: 'Vyvanse',
    company: 'Shire',
    launchDate: '2007-07-23'
  },
  {
    code: 'SIT369',
    genericName: 'Sitagliptin',
    brandName: 'Januvia',
    company: 'Merck',
    launchDate: '2006-10-16'
  },
  {
    code: 'EMP741',
    genericName: 'Empagliflozin',
    brandName: 'Jardiance',
    company: 'Boehringer Ingelheim',
    launchDate: '2014-08-01'
  },
  {
    code: 'ROS852',
    genericName: 'Rosuvastatin',
    brandName: 'Crestor',
    company: 'AstraZeneca',
    launchDate: '2003-06-12'
  },
  {
    code: 'ESC963',
    genericName: 'Escitalopram',
    brandName: 'Lexapro',
    company: 'Lundbeck',
    launchDate: '2002-08-14'
  },
  {
    code: 'DUL159',
    genericName: 'Duloxetine',
    brandName: 'Cymbalta',
    company: 'Eli Lilly',
    launchDate: '2004-08-03'
  },
  {
    code: 'PREG753',
    genericName: 'Pregabalin',
    brandName: 'Lyrica',
    company: 'Pfizer',
    launchDate: '2004-12-30'
  }
];

export const TABLE_CONFIG: TableConfig = {
  columns: [
    { id: 'uniqueId', header: 'Id', key: 'uniqueId' },
    { id: 'code', header: 'Code', key: 'code' },
    { id: 'name', header: 'Name', key: 'name' },
    { id: 'company', header: 'Company', key: 'company' },
    { id: 'launchDate', header: 'Launch Date', key: 'launchDate' },
  ],
  initialSort: { key: 'launchDate', direction: 'desc' },
};