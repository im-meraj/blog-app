import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./home.css";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts"+search);
      setPosts(res.data);
      console.log(res);
    }
    getPosts();
  }, [search]);

    return (
      <>
        <Header />
        <div className="home">
            <Posts posts={posts} />
            <Sidebar/>
        </div>
      </>
    );
}