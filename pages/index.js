import React from 'react';
import AppLayOut from '../components/AppLayOut';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';

const Home = () =>{    
    const { isLoggedIn } = useSelector((state)=>state.user);
    const { mainPost } = useSelector((state)=>state.post);
    return (
        <>
            <AppLayOut>
                { isLoggedIn && <PostForm />}
                { mainPost.map((post)=> <PostCard key={post.id} post={post} /> ) }
            </AppLayOut>
            
        </>
    );
}

export default Home;