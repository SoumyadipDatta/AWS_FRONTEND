export interface Zone {
  id: string;
  name: string;
  packages: number;
  capacity: number;
  status: 'healthy' | 'overload';
}

export interface Candidate {
  id: string;
  name: string;
  distanceKm: number;
  capacityAdded: number;
  score: number;
}

export interface SimulationResult {
  avgDistanceBefore: number;
  avgDistanceAfter: number;
  zoneLoadBefore: number;
  zoneLoadAfter: number;
  atRiskBefore: number;
  atRiskAfter: number;
  bedrockExplanation: string;
}

export interface AgentStep {
  id: string;
  message: string;
}