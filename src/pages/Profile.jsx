import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { TopBar } from '../components';

const Profile = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { posts } = useSelector((state) => state.posts);
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false); 

  return (
    <>
    <div>
      <TopBar />
    </div>
    </>
  );
};

export default Profile;
