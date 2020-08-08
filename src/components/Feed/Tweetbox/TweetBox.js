import React, { useState } from 'react'
import './TweetBox.css'
import { Button, Avatar } from '@material-ui/core'
import firebase from 'firebase'
import db from '../../../firebase'

const TweetBox = () => {
    const [tweet, setTweet] = useState("");
    const [image, setImage] = useState("");
  
    const sendTweet = (e) => {
      e.preventDefault();
  
      db.collection("posts").add({
        displayName: "Daphnee",
        username: "DaphneeSays",
        verified: true,
        text: tweet,
        image: image,
        avatar: "https://images.unsplash.com/photo-1594683742826-bcdac33bce2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()    
    })
        
        setTweet('')
        setImage('')
    }


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://images.unsplash.com/photo-1594683742826-bcdac33bce2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
                    <input type="text" placeholder="What's happening?" value={tweet} onChange={e => setTweet(e.target.value)} />
                </div>
                <input placeholder="Optional: Enter image" type="text" className="tweetBox__imageInput" value={image} onChange={e => setImage(e.target.value)} />
                <Button className="tweetBox__tweetBtn" onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
