import React from 'react';
import Sooraj from '../../assets/sooraj.jpg';

interface ProfileProps {
  size: number,
}

const Profile = ({ size }: ProfileProps) => (
  <div 
    style={{ backgroundImage: `url(${Sooraj.src})` }}
    className={`h-${size} w-${size} bg-cover bg-center bg-no-repeat rounded-full ring-${Math.round(size/4) <=0 ? 1 : Math.round(size/4)} ring-white p-2`}
  />
);

export default Profile;