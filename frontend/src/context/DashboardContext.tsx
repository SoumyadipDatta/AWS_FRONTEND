import  { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface DashboardState {
  selectedZoneId: string | null;
  selectedCandidateId: string | null;
  isLoading: boolean;
  errorState: string | null;
  selectZone: (id: string | null) => void;
  selectCandidate: (id: string | null) => void;
  setLoading: (status: boolean) => void;
  setError: (msg: string | null) => void;
}

const DashboardContext = createContext<DashboardState | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<string | null>(null);

  const selectZone = (id: string | null) => {
    setSelectedZoneId(id);
    setSelectedCandidateId(null); // Reset candidate when zone changes
    setErrorState(null);
  };

  const selectCandidate = (id: string | null) => {
    setSelectedCandidateId(id);
  };

  return (
    <DashboardContext.Provider value={{
      selectedZoneId,
      selectedCandidateId,
      isLoading,
      errorState,
      selectZone,
      selectCandidate,
      setLoading: setIsLoading,
      setError: setErrorState,
    }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error('useDashboard must be used within DashboardProvider');
  return context;
};