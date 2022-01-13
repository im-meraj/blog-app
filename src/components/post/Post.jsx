import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
    return (
      <div className="post">
        <img
          src="https://images.unsplash.com/photo-1639134501889-66bc86217baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=669&q=80"
          alt="city"
          className="postImg"
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <Link className="link" to="/post/:id">
          <span className="postTitle">Lorem ipsum, dolor sit amet</span>
          </Link>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a temporibus enim in itaque consequuntur eius! Fugit, error, vitae doloremque aliquid laborum id exercitationem similique, adipisci unde maxime dolorem repudiandae!
        Blanditiis facere voluptatem architecto dolor. Dolor possimus illum aspernatur delectus harum voluptates hic? Quod facilis ex obcaecati aut odio, iure, officiis sint, nobis recusandae distinctio reiciendis voluptas iste! Iure, blanditiis.
        Consequuntur dolores earum, numquam quibusdam dolore commodi quasi sed harum nobis ducimus doloribus omnis nihil pariatur autem nostrum, a asperiores? At alias est aliquid corporis iure praesentium, aliquam ullam facilis.</p>
      </div>
    );
}
