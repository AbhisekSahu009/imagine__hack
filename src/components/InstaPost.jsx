import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import profilePic from '../assets/Rectangle 167.png';
import profilePic1 from '../assets/unsplash_QdAAasrZhdk.png';
import profilePic2 from '../assets/bottom_bar.png';
import '../App.css';

const InstaPost = () => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(2000);

    const toggleLike = () => {
        setLiked(!liked);
        setLikeCount(prev => (liked ? prev - 1 : prev + 1));
    };

    return (
        <div className="wrap">
            <div className="insta-post">
                <div className="post-header">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="gap">
                        <h4>Sambit Pradhan</h4>
                        <p>📅 Published: September 15, 2024 08:19 PM</p>
                    </div>
                </div>

                <p className="post-caption">
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
                    libero.
                </p>

                <img
                    src={profilePic1}
                    alt="Post"
                    className="post-image"
                />

                <div className="post-actions">
                    <button onClick={toggleLike} className="action-button">
                        <FaHeart color={liked ? 'red' : 'gray'}/> {likeCount}
                    </button>
                    <button className="action-button">
                        <FaComment/> 25
                    </button>
                    <button className="action-button">
                        <FaShare/> 6
                    </button>
                </div>
            </div>


            <div className="insta-post">
                <div className="post-header">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="gap">
                        <h4>Sambit Pradhan</h4>
                        <p>📅 Published: September 15, 2024 08:19 PM</p>
                    </div>
                </div>

                <p className="post-caption">
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
                    libero.
                </p>

                <img
                    src={profilePic1}
                    alt="Post"
                    className="post-image"
                />

                <div className="post-actions">
                    <button onClick={toggleLike} className="action-button">
                        <FaHeart color={liked ? 'red' : 'gray'}/> {likeCount}
                    </button>
                    <button className="action-button">
                        <FaComment/> 25
                    </button>
                    <button className="action-button">
                        <FaShare/> 6
                    </button>
                </div>
            </div>


            <div className="insta-post">
                <div className="post-header">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="gap">
                        <h4>Sambit Pradhan</h4>
                        <p>📅 Published: September 15, 2024 08:19 PM</p>
                    </div>
                </div>

                <p className="post-caption">
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
                    libero.
                </p>

                <img
                    src={profilePic1}
                    alt="Post"
                    className="post-image"
                />

                <div className="post-actions">
                    <button onClick={toggleLike} className="action-button">
                        <FaHeart color={liked ? 'red' : 'gray'}/> {likeCount}
                    </button>
                    <button className="action-button">
                        <FaComment/> 25
                    </button>
                    <button className="action-button">
                        <FaShare/> 6
                    </button>
                </div>

            </div>


            <div className="insta-post">


                <div className="post-header">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="gap">
                        <h4>Sambit Pradhan</h4>
                        <p>📅 Published: September 15, 2024 08:19 PM</p>
                    </div>
                </div>

                <p className="post-caption">
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
                    libero.
                </p>

                <img
                    src={profilePic1}
                    alt="Post"
                    className="post-image"
                />

                <div className="post-actions">
                    <button onClick={toggleLike} className="action-button">
                        <FaHeart color={liked ? 'red' : 'gray'}/> {likeCount}
                    </button>
                    <button className="action-button">
                        <FaComment/> 25
                    </button>
                    <button className="action-button">
                        <FaShare/> 6
                    </button>
                </div>


            </div>


            <div className="insta-post">


                <div className="post-header">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="gap">
                        <h4>Sambit Pradhan</h4>
                        <p>📅 Published: September 15, 2024 08:19 PM</p>
                    </div>
                </div>

                <p className="post-caption">
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
                    libero.
                </p>

                <img
                    src={profilePic1}
                    alt="Post"
                    className="post-image"
                />

                <div className="post-actions">
                    <button onClick={toggleLike} className="action-button">
                        <FaHeart color={liked ? 'red' : 'gray'}/> {likeCount}
                    </button>
                    <button className="action-button">
                        <FaComment/> 25
                    </button>
                    <button className="action-button">
                        <FaShare/> 6
                    </button>
                </div>


            </div>


            <div className="insta-post">


                <div className="post-header">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="profile-pic"
                    />
                    <div className="gap">
                        <h4>Sambit Pradhan</h4>
                        <p>📅 Published: September 15, 2024 08:19 PM</p>
                    </div>
                </div>

                <p className="post-caption">
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
                    libero.
                </p>

                <img
                    src={profilePic1}
                    alt="Post"
                    className="post-image"
                />

                <div className="post-actions">
                    <button onClick={toggleLike} className="action-button">
                        <FaHeart color={liked ? 'red' : 'gray'}/> {likeCount}
                    </button>
                    <button className="action-button">
                        <FaComment/> 25
                    </button>
                    <button className="action-button">
                        <FaShare/> 6
                    </button>
                </div>


            </div>


            <div className="insta-post">
                <img
                    src={('src/assets/bottom_bar.png')}
                    alt="Example"
                    style={{
                        width: '100%',  // Adjust width
                        height: '100px', // Adjust height

                    }}
                />
            </div>

        </div>


    );
};

export default InstaPost;
