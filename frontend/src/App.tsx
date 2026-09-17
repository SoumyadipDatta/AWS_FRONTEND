import { MainLayout } from './components/layout/MainLayout';
import { ZoneGrid } from './components/zones/ZoneGrid';
import { CandidateList } from './components/zones/CandidateList';
import { AgentFeed } from './components/impact/AgentFeed';
import { ImpactDiff } from './components/impact/ImpactDiff';

export default function App() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div><ZoneGrid /><CandidateList /></div>
        <div><AgentFeed /><ImpactDiff /></div>
      </div>
    </MainLayout>
  );
}