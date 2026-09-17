// TODO: Your timer hook goes here
import { useState, useEffect, useRef, useCallback } from 'react';
import type { AgentStep } from '../types/models';

interface UseAgentSimulationResult {
  activeLogs: AgentStep[];
  isSimulating: boolean;
  isComplete: boolean;
  runSimulation: (steps: AgentStep[]) => void;
  resetSimulation: () => void;
}

export function useAgentSimulation(tickSpeedMs: number = 400): UseAgentSimulationResult {
  const [activeLogs, setActiveLogs] = useState<AgentStep[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Track timers and current index in refs so we can clean up if component unmounts
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepIndexRef = useRef(0);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const resetSimulation = useCallback(() => {
    clearTimer();
    setActiveLogs([]);
    setIsSimulating(false);
    setIsComplete(false);
    stepIndexRef.current = 0;
  }, []);

  const runSimulation = useCallback((steps: AgentStep[]) => {
    resetSimulation();
    setIsSimulating(true);

    const tick = () => {
      if (stepIndexRef.current < steps.length) {
        setActiveLogs(prev => [...prev, steps[stepIndexRef.current]]);
        stepIndexRef.current++;
        timerRef.current = setTimeout(tick, tickSpeedMs);
      } else {
        setIsSimulating(false);
        setIsComplete(true);
      }
    };

    // Start the first tick
    timerRef.current = setTimeout(tick, tickSpeedMs);
  }, [resetSimulation, tickSpeedMs]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearTimer();
  }, []);

  return { activeLogs, isSimulating, isComplete, runSimulation, resetSimulation };
}