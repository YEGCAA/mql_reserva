
import React from 'react';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
};

export default App;
