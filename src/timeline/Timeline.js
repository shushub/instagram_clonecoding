import React, { useState } from 'react';
import './Timeline.css';
import Suggestion from './Suggestion';
import Post from './Post';

const Timeline = () => {

    const [posts, setPosts] = useState([
        {
            user: "haely",
            postImage: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
            likes: 12,
            timestamp: "2d",
        },
        {
            user: "mars",
            postImage: "https://image.petmd.com/files/styles/978x550/public/dog-allergies.jpg",
            likes: 10,
            timestamp: "12h",
        },
        {
            user: "david",
            postImage: "https://images.immediate.co.uk/production/volatile/sites/23/2023/01/Giant-panda-c2c51b8.jpg?quality=90&resize=980,654",
            likes: 40,
            timestamp: "15min",
        },
        {
            user: "tom",
            postImage: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/discover-the-secret-language-of-flowers-2022-hero.jpeg",
            likes: 2,
            timestamp: "2sec",
        },
    ]);

    return (
        <div className='timeline'>
            <div className='timeline__left'> 
                <div className='timeline__posts'>
                    {posts.map ((post) => (
                        <Post 
                            user={post.user} 
                            postImage={post.postImage} 
                            likes={post.likes} 
                            timestamp={post.timestamp}
                        />
                    ))}
                </div>
            </div>
            <div className='timeline__right'>
                <Suggestion />
            </div>
        </div>
    );
};

export default Timeline;