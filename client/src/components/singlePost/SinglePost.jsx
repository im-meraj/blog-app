import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './singlePost.css';

export const SinglePost = () => {
  const PF = "http://localhost:4000/images/";

  const location = useLocation();
  const postId = location.pathname.split('/')[2];

  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
      console.log(res);
    }
    getPost();
  }, [postId]);

    return (
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo ? (
            <img src={PF + post.photo} alt="postCoverImg" className="singlePostImg" />
          ) : (
            <img
              src="https://images.pexels.com/photos/2825384/pexels-photo-2825384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="singlePostImg"
            />
          )}
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i class="singlePostIcon far fa-edit"></i>
              <i class="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author:
              <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
              </Link>
            </span>
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          <p className="singlePostDesc">{post.desc}</p>
        </div>
      </div>
    );
}
