export type DistrictRecord = {
  district: string; short: string; x: number; y: number;
  heatExposure: number; planReadiness: number; coolingAccess: number;
  solar: number; wind: number; totalCapacity: number;
};

// All records below are synthetic demonstration values, not official statistics.
export const districts: DistrictRecord[] = [
  { district: 'Mumbai', short: 'MUM', x: 20, y: 71, heatExposure: 82, planReadiness: 76, coolingAccess: 71, solar: 1.8, wind: 0.2, totalCapacity: 2.0 },
  { district: 'Pune', short: 'PUN', x: 37, y: 60, heatExposure: 73, planReadiness: 81, coolingAccess: 68, solar: 2.6, wind: 0.8, totalCapacity: 3.4 },
  { district: 'Nashik', short: 'NSK', x: 38, y: 35, heatExposure: 69, planReadiness: 64, coolingAccess: 52, solar: 2.1, wind: 1.2, totalCapacity: 3.3 },
  { district: 'Nagpur', short: 'NGP', x: 78, y: 43, heatExposure: 91, planReadiness: 59, coolingAccess: 44, solar: 1.6, wind: 0.3, totalCapacity: 1.9 },
  { district: 'Solapur', short: 'SOL', x: 54, y: 77, heatExposure: 88, planReadiness: 52, coolingAccess: 39, solar: 3.1, wind: 1.4, totalCapacity: 4.5 },
  { district: 'Jalgaon', short: 'JLG', x: 53, y: 27, heatExposure: 84, planReadiness: 57, coolingAccess: 47, solar: 2.4, wind: 0.6, totalCapacity: 3.0 },
  { district: 'Kolhapur', short: 'KOL', x: 34, y: 86, heatExposure: 61, planReadiness: 79, coolingAccess: 73, solar: 1.2, wind: 1.0, totalCapacity: 2.2 },
  { district: 'Amravati', short: 'AMR', x: 68, y: 30, heatExposure: 86, planReadiness: 62, coolingAccess: 46, solar: 2.0, wind: 0.4, totalCapacity: 2.4 },
  { district: 'Chandrapur', short: 'CHD', x: 84, y: 61, heatExposure: 89, planReadiness: 55, coolingAccess: 42, solar: 1.5, wind: 0.2, totalCapacity: 1.7 },
  { district: 'Chhatrapati Sambhajinagar', short: 'CSN', x: 60, y: 52, heatExposure: 78, planReadiness: 66, coolingAccess: 54, solar: 2.7, wind: 0.7, totalCapacity: 3.4 }
];

export type DatasetKey = 'heat' | 'energy';
export const datasetInfo = {
  heat: {
    id: 'BN-CLM-DEMO-01', title: 'District Heat Readiness', category: 'CLIMATE ADAPTATION',
    description: 'An illustrative index combining heat exposure, plan readiness and cooling access across selected Maharashtra districts.',
    unit: 'Index points · 0–100', file: '/data/district-heat-readiness-demo.csv', readme: '/data/district-heat-readiness-README.txt',
    fields: [
      { key: 'heatExposure', label: 'Heat exposure', unit: 'Index' },
      { key: 'planReadiness', label: 'Plan readiness', unit: 'Index' },
      { key: 'coolingAccess', label: 'Cooling access', unit: 'Index' }
    ]
  },
  energy: {
    id: 'BN-ENR-DEMO-02', title: 'Renewable Capacity Snapshot', category: 'ENERGY TRANSITION',
    description: 'An illustrative view of installed solar and wind capacity across selected Maharashtra districts.',
    unit: 'Illustrative GW', file: '/data/district-renewables-demo.csv', readme: '/data/district-renewables-README.txt',
    fields: [
      { key: 'solar', label: 'Solar capacity', unit: 'GW' },
      { key: 'wind', label: 'Wind capacity', unit: 'GW' },
      { key: 'totalCapacity', label: 'Total capacity', unit: 'GW' }
    ]
  }
} as const;
