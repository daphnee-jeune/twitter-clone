import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './Tweetbox/TweetBox'
import Post from './Post/Post'
import db from '../../firebase'
import FlipMove from 'react-flip-move'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
        .orderBy("timestamp", "asc")
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
                <TweetBox />
                <FlipMove>
                    {posts.map(post => (
                        <Post 
                            key={post.username}
                            displayName={post.displayName} 
                            username={post.username} 
                            verified={post.verified} 
                            text={post.text} 
                            avatar={post.avatar} 
                            image={post.image} />
                    ))}
                </FlipMove>
            </div>
        </div>
    )
}

export default Feed