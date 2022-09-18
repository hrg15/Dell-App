import "../../Sass/styles/posts.scss";
import pic from "../../Assets/images/post1.jpg";

const Posts = () => {
  return (
    <div className="posts">
      <h1>post title</h1>
      <div className="post-img">
        <img src={pic} alt="dd" />
      </div>
    </div>
  );
};

export default Posts;
