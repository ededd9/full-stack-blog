import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://i.pinimg.com/564x/94/4d/40/944d404c55877524024f2731a2a61262.jpg"
          alt=""
          className="singlePostImage"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum, dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Edward</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quibusdam vitae nobis neque adipisci nam provident, dignissimos et
          quas ad blanditiis maxime esse reprehenderit reiciendis, tenetur,
          ullam error. Itaque, explicabo? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda quibusdam vitae nobis neque adipisci nam
          provident, dignissimos et quas ad blanditiis maxime esse reprehenderit
          reiciendis, tenetur, ullam error. Itaque, explicabo? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Assumenda quibusdam vitae nobis
          neque adipisci nam provident, dignissimos et quas ad blanditiis maxime
          esse reprehenderit reiciendis, tenetur, ullam error. Itaque,
          explicabo?
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
