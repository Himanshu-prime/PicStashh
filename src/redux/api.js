import axios from 'axios'

const API = axios.create({baseURL:"https://picstash.vercel.app"});


export const signUp = async (formData) => {
    try {
      const response = await API.post("/api/v1/users/signup", formData);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.error);
    }
  };

  export const signIn = async (formData) => {
    try {
      const response = await API.post("/api/v1/users/login", formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.error);
    }
  };



  export const createPost = async(formData)=>{
    try {
      const response = await API.post("/api/v1/posts/createPost/", formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data
    } catch (error) {
      console.log(error);
    throw new Error(error.response.data.error);
    }
  }

  export const fetchPosts = async()=>{
    try {
      const response = await API.get("/api/v1/posts/getAllPosts/");
      return response.data
    } catch (error) {
      console.log(error);
    throw new Error(error.response.data.error);
    }
  }

  // export const getPost = async(postId)=>{
  //   try {
  //     const response= await API.get("/api/v1/posts/getPost/",postId)
  //     return response.data
  //   } catch (error) {
  //     console.log(error);
  //   throw new Error(error.response.data.error);
  //   }
  // }