import type { Zone, Candidate, SimulationResult, AgentStep } from '../types/models';

export const mockZones: Zone[] = [
  { id: 'zone-1', name: 'Sector 4 - Downtown', packages: 1840, capacity: 1200, status: 'overload' },
  { id: 'zone-2', name: 'Sector 7 - Tech Park', packages: 720, capacity: 1100, status: 'healthy' },
  { id: 'zone-3', name: 'Sector 9 - Industrial', packages: 1490, capacity: 950, status: 'overload' },
];

export const mockCandidates: Record<string, Candidate[]> = {
  'zone-1': [
    { id: 'c1', name: 'Old Post Warehouse B', distanceKm: 1.1, capacityAdded: 550, score: 94 },
    { id: 'c2', name: 'Metro Parking Level -1', distanceKm: 2.4, capacityAdded: 400, score: 81 },
  ],
  'zone-3': [
    { id: 'c3', name: 'Rail Yard Shed 04', distanceKm: 0.8, capacityAdded: 600, score: 96 },
  ]
};

export const mockSimulationResult: SimulationResult = {
  avgDistanceBefore: 4.6,
  avgDistanceAfter: 2.8,
  zoneLoadBefore: 153,
  zoneLoadAfter: 88,
  atRiskBefore: 640,
  atRiskAfter: 0,
  bedrockExplanation: "Rerouting 520 excess parcels to the selected micro-hub absorbs sector overflow, reducing average delivery transit time while preventing late-window SLA breaches."
};

export const mockAgentSteps: AgentStep[] = [
  { id: 's1', message: 'Ingesting real-time routing telemetry...' },
  { id: 's2', message: 'Evaluating spatial capacity for candidate...' },
  { id: 's3', message: 'Calculating multi-hop reroute cost & delivery SLA...' },
  { id: 's4', message: 'Querying Amazon Bedrock for trade-off synthesis...' }
];