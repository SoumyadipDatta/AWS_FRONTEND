import type { Zone, Candidate, SimulationResult } from '../types/models';
import { mockZones, mockCandidates, mockSimulationResult } from '../data/mockData';

// Toggle this to switch between local mock data and real AWS API
export const USE_MOCKS = true;
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Artificial latency helper to make the UI feel real during mock mode
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiClient = {
  getZones: async (): Promise<Zone[]> => {
    if (USE_MOCKS) {
      await delay(500);
      return mockZones;
    }
    const res = await fetch(`${API_BASE_URL}/zones`);
    if (!res.ok) throw new Error('Failed to fetch zones');
    return res.json();
  },

  getCandidates: async (zoneId: string): Promise<Candidate[]> => {
    if (USE_MOCKS) {
      await delay(400);
      return mockCandidates[zoneId] || [];
    }
    const res = await fetch(`${API_BASE_URL}/zones/${zoneId}/candidates`);
    if (!res.ok) throw new Error('Failed to fetch candidates');
    return res.json();
  },

  simulate: async (zoneId: string, candidateId: string): Promise<SimulationResult> => {
    if (USE_MOCKS) {
      // We simulate the API processing time here (Agent Ticker handles UI timing separately)
      await delay(800);
      return mockSimulationResult;
    }
    const res = await fetch(`${API_BASE_URL}/simulate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ zoneId, candidateId }),
    });
    if (!res.ok) throw new Error('Simulation failed');
    return res.json();
  }
};