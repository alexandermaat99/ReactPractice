import React from 'react';
import TeamCard from './TeamCard';
import { Team } from './types';
import './TeamList.css';

interface TeamListProps {
  teams: Team[];
}

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    <div>
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </div>
  );
};

export default TeamList;
