import React from 'react';

const TeamLogo = ({ teamName }) => {
  const imageName = teamName.replace(/\s/g, '_') + '.png';
  const imagePath = `/assets/images/${imageName}`

  return (
    <div className="flex justify-center items-center h-full">
      <img 
        src={imagePath} 
        alt={teamName} 
        className="w-24 h-24 object-contain" 
      />
    </div>
  );
};

export default TeamLogo;