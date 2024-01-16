import React from 'react';

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {


  // Function to get initials from the name
  const getInitials = (name: string): string => {
    const nameArray = name.split(' ');
    return nameArray
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div
      className="flex items-center justify-center rounded-full text-white w-5 h-5 bg-pink-500"
    >
      <span className='text-[10px]'>{initials}</span>
    </div>
  );
};

export default Avatar;
