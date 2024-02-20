
import { useParams, useNavigate } from 'react-router-dom';
import './Blog.css';

interface BlogPost {
    id: string;
    title: string;
    content: string;
    date: string;
  }
  
interface Blog {
  posts: BlogPost[];
}
  
const Blog: React.FC<Blog> = ({ posts }) => {
  const { postId } = useParams<{ postId: string }>(); // Specify the type of `postId`
  const navigate = useNavigate(); // Hook to navigate between routes
  const post = posts.find(post => post.id === postId); // Find the post by ID

  if (!post) {
    return <div>Post not found</div>; // Handle case where post is not found
  }

  return (
      <div className="background-container">
          <div className="blog-post-container">
              <header className="blog-header">
              <h1>{post.title}</h1>
              <p className="blog-date">{post.date}</p>
              </header>
              <article className="blog-content">
              <p>{post.content}</p>
              </article>
              <button className="back-button" onClick={() => navigate("/reviews")}>Go Back</button>
          </div>
    </div>
  );
};

export default Blog;