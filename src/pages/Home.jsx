import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/features/postSlice';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,MDBCardFooter
} from 'mdb-react-ui-kit';
const Home = () => {
  const dispatch = useDispatch();
  const {posts,loading} = useSelector((state) => ({ ...state.post }));
  

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div
   className='container'
    style={{backgroundColor:"blue"}}
  >
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      {posts.map((post) => 
      (
        
        <MDBCol key={post._id}>
          <MDBCard>
            {/* <MDBCardImage src={post.imageKey} alt={post.title} position='top' /> */}
            <MDBCardTitle>{post.imageKey}</MDBCardTitle>
            <MDBCardBody>
              <MDBCardTitle>{post.userId}</MDBCardTitle>
              <MDBCardText>{post.caption}</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
          <button><Link to={`/posts/${post._id}`}>View</Link></button>
        </MDBCardFooter>
          </MDBCard>
        </MDBCol>
          
        
      ))}
    </MDBRow>
  </div>
  )
}

export default Home
