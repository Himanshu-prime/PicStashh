import {React, useEffect, useState} from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import {getpost} from '../redux/features/postSlice'
const SingleImage = () => {
  const {_id} = useParams();
  const [postId, setPostId]= useState("")
  const dispatch= useDispatch();
  const {post, loading, error}= useSelector((state)=> ({...state.post}))
  useEffect(() => {
    if (_id) {
      const formData = new FormData();
      formData.append("postId", _id)
      // dispatch(getpost(formData))
    }
  }, [_id,dispatch]);
  
  // useEffect(() => {
  //   if (postId) {
  //     console.log("hello");
  //     console.log(postId);
  //     dispatch(getpost(postId));
  //   }
  // }, [postId, dispatch]);
  // console.log(post)
  return (
    <div className='container'>
    <MDBCard className='mb-3'>
        <MDBCardImage position='top' src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </div>
  )
}

export default SingleImage