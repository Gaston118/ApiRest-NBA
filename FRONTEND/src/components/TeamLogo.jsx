import React from 'react';

const TeamLogo = ({ teamName, onClick}) => {
  const imageName = teamName.replace(/\s/g, '_') + '.png';
  const imagePath = `/assets/images/${imageName}`

  return (
    <div>
    <img src={imagePath} alt={teamName} onClick={() => onClick(teamName)}/>
    </div>

  );
};

export default TeamLogo;
