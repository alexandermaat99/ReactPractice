import React from 'react';
import { Team } from './types';
import './TeamCard.css';

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className="team-card">
      <h2>
        {team.school} {team.name}
      </h2>
      <p>
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
};

export default TeamCard;
