import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
      console.log(res);
    }
    getPosts();
  }, []);

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
