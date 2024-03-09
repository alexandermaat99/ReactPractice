import React, { useState, useEffect } from 'react';
import data from './CollegeBasketballTeams.json';
import TeamList from './TeamList';
import Heading from './Heading';
import { Team } from './types';

function App() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    setTeams(data.teams); // Adjusted to extract the "teams" array from the JSON data
  }, []);

  return (
    <div className="App">
      <Heading />
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
