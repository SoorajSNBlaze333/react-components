import React from 'react';
import Sooraj from '../../assets/sooraj.jpg';

interface ProfileProps {
  size: number,
  ring: number
}

const Profile = ({ size, ring }: ProfileProps) => (
  <div 
    style={{ backgroundImage: `url(${Sooraj.src})`, height: size+"px", width: size+"px" }}
    className={`bg-cover bg-center bg-no-repeat rounded-full ring-${ring} ring-white p-2`}
  />
);

export default Profile;