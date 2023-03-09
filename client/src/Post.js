import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, createdAt, author }) {
  return (
    <div className="post">
      {/* <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div> */}
      <div className="texts">
        <Link to={`/edit/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <Link to={`/edit/${_id}`}>
          <h2>{summary}</h2>
        </Link>
        <p className="info">
          <Link to={`/edit/${_id}`} className="author">
            {author.username}
          </Link>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
      </div>
    </div>
  );
}
