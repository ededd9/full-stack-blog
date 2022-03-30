import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.pinimg.com/564x/94/4d/40/944d404c55877524024f2731a2a61262.jpg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates est
        aspernatur, quidem voluptas iste nam earum perspiciatis beatae saepe
        veritatis. Rem consequatur nostrum magni ex unde molestias excepturi
        tempora eius! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Voluptates est aspernatur, quidem voluptas iste nam earum perspiciatis
        beatae saepe veritatis. Rem consequatur nostrum magni ex unde molestias
        excepturi tempora eius! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Voluptates est aspernatur, quidem voluptas iste nam
        earum perspiciatis beatae saepe veritatis. Rem consequatur nostrum magni
        ex unde molestias excepturi tempora eius!
      </p>
    </div>
  );
}

export default Post;
