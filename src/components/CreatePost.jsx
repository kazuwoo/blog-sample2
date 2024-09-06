import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import './CreatePost.css';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  const navigate = useNavigate();

  const createPost = async () => {
    console.log('createPost!');
    await addDoc(collection(db, 'posts'), {
      title: title,
      postText: postText,
      author: {
        username: 'すずきかずを',
        id: '123456',
      },
    });
    navigate('/');
  };

  // ログイン状態をチェック
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            type="text"
            placeholder="投稿を記入"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
