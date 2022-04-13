import React, { useState, useEffect } from 'react';
import './style.css';
import apiClient from '../../Interceptor/Interceptor';
import SideBar from '../Authentication/Dashboard/SideBar';
import Header from '../Header/Header';
import AssetForm from './AssetForm';
import AssetCard from './AssetCard';

function Assets() {
  // eslint-disable-next-line no-undef
  const phoneNumber = localStorage.getItem('phone_number');
  const [posts, setPosts] = useState([]);
  // const history = useHistory();
  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);

      apiClient
        .get('Assets?select=*', posts)
        .then((response) => {
          // console.log("hey", response);
          setPosts(response.data);
        })
        .catch((error) => {
          console.log('error during loading dashboard', error);
        });
    };

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="temp">
        <h1>
          <Header />
        </h1>
      </div>
      <div className="container-2">
        <div className="grid-container">
          {posts.map((post) => (
            <div key={post} className="grid-item">
              <AssetCard
                devicename={post.Device_Name}
                model={post.Model}
                serialnumber={post.Serial_No}
                issuedate={post.Issue_Date}
                phoneNumber={phoneNumber}
              />
            </div>
          ))}
        </div>

        <div>
          <div className="form-info">
            <AssetForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
