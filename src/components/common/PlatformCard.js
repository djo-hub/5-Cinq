import React from 'react';
import { Monitor, Gamepad2, Smartphone } from 'lucide-react';

const PlatformCard = ({ platform, onClick }) => {
  const icons = {
    PC: <Monitor className="h-12 w-12 text-purple-400" />,
    PlayStation: <Gamepad2 className="h-12 w-12 text-blue-400" />,
    Xbox: <Gamepad2 className="h-12 w-12 text-green-400" />,
    Mobile: <Smartphone className="h-12 w-12 text-pink-400" />
  };

  return (
    <div 
      onClick={() => onClick(platform)}
      className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all cursor-pointer transform hover:scale-105 border border-gray-700 hover:border-purple-500"
    >
      <div className="flex flex-col items-center text-center">
        {icons[platform]}
        <h3 className="text-xl font-semibold mt-4 mb-2">{platform}</h3>
        <p className="text-gray-400">Browse {platform} gaming currency , credits and subscriptions</p>
      </div>
    </div>
  );
};

export default PlatformCard;