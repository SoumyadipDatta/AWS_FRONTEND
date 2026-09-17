const fs = require('fs');
const path = require('path');

const directories = [
  'src/types', 'src/api', 'src/context', 'src/hooks', 'src/data',
  'src/components/layout', 'src/components/zones', 'src/components/impact'
];

const files = {
  'src/api/client.ts': '// TODO: Your API wrappers go here',
  'src/context/DashboardContext.tsx': '// TODO: Your state provider goes here',
  'src/hooks/useAgentSimulation.ts': '// TODO: Your timer hook goes here',
  'src/data/mockData.ts': '// TODO: Your mock JSON goes here',
  'src/types/models.ts': '// TODO: TypeScript models go here',
  
  'src/components/layout/MainLayout.tsx': 'export const MainLayout = ({children}: {children: React.ReactNode}) => <div className="min-h-screen bg-[#0d1117] text-white p-6">{children}</div>;',
  'src/components/zones/ZoneGrid.tsx': 'export const ZoneGrid = () => <div className="p-4 border border-slate-800 rounded-xl">Zone Grid Here</div>;',
  'src/components/zones/CandidateList.tsx': 'export const CandidateList = () => <div className="p-4 border border-slate-800 rounded-xl mt-4">Candidates Here</div>;',
  'src/components/impact/AgentFeed.tsx': 'export const AgentFeed = () => <div className="p-4 border border-slate-800 rounded-xl">Agent Ticker Here</div>;',
  'src/components/impact/ImpactDiff.tsx': 'export const ImpactDiff = () => <div className="p-4 border border-slate-800 rounded-xl mt-4">Before/After Diff Here</div>;',
  
  'src/App.tsx': `import { MainLayout } from './components/layout/MainLayout';\nimport { ZoneGrid } from './components/zones/ZoneGrid';\nimport { CandidateList } from './components/zones/CandidateList';\nimport { AgentFeed } from './components/impact/AgentFeed';\nimport { ImpactDiff } from './components/impact/ImpactDiff';\n\nexport default function App() {\n  return (\n    <MainLayout>\n      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">\n        <div><ZoneGrid /><CandidateList /></div>\n        <div><AgentFeed /><ImpactDiff /></div>\n      </div>\n    </MainLayout>\n  );\n}`
};

directories.forEach(dir => fs.mkdirSync(path.join(__dirname, dir), { recursive: true }));
Object.entries(files).forEach(([file, content]) => fs.writeFileSync(path.join(__dirname, file), content));

console.log('✅ Base project fully scaffolded!');