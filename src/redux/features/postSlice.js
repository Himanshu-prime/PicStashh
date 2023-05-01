import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import * as api from "../api";


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.fetchPosts();
        return response; // assuming the server returns an array of posts
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );


export const createPost = createAsyncThunk("post/createpost", async ({
    formData,
    navigate,
    toast
}, {
    rejectWithValue
}) => {
    try {
        const response = await api.createPost(formData);
        toast.success("Post created Successfully!");
        navigate('/')
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
        return rejectWithValue(error)
    }
})

// export const getpost = createAsyncThunk("post/getpost", async({formData},{
//     rejectWithValue
// })=>{
//     const postId = formData.postId;
//     console.log("Slice",postId)
//     try {
//         const response= await api.getPost(postId);
//         console.log(response)
//         return response
//     } catch (error) {
//         console.log(error)
//         return rejectWithValue(error)
//     }
// })

const postSlice = createSlice({
    name: "post",
    initialState: {
        post: {},
        posts: [],
        userposts: [],
        error: "",
        loading: false
    },
    reducers:{
        setUserPosts: (state, action) => {
            state.userposts = action.payload;
            console.log("hello")
          },
    },
    extraReducers:{
        [createPost.pending]:(state,action )=>{
            state.loading= true;
        },
        [createPost.fulfilled]:(state,action )=>{
            state.loading = false;
            console.log(action.payload);
            state.posts.push(action.payload);
            state.userposts.push(action.payload)
        },
        [createPost.rejected]:(state,action )=>{
            state.loading= false;
            state.error= action.payload
            
        },
        [fetchPosts.pending]:(state,action )=>{
            state.loading= true;
        },
        [fetchPosts.fulfilled]:(state,action )=>{
            state.loading = false;
            console.log(action.payload);
            state.posts = action.payload.posts;
        },
        [fetchPosts.rejected]:(state,action )=>{
            state.loading= false;
            state.error= action.payload
            
        },
        // [getpost.pending]:(state,action )=>{
        //     state.loading= true;
        // },
        // [getpost.fulfilled]:(state,action )=>{
        //     state.loading = false;
        //     console.log(action.payload);
        //     state.post = action.payload;
        // },
        // [getpost.rejected]:(state,action )=>{
        //     state.loading= false;
        //     state.error= action.payload
            
        // },
    }
})

export const {setUserPosts}= postSlice.actions 
export default postSlice.reducer;