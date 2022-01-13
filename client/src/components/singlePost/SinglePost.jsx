import './singlePost.css';

export const SinglePost = () => {
    return (
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            src="https://images.pexels.com/photos/5554868/pexels-photo-5554868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet
            <div className="singlePostEdit">
              <i class="singlePostIcon far fa-edit"></i>
              <i class="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor">
                  Author: <b>Meraj</b>
              </span>
              <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore pariatur magnam eaque, tempore necessitatibus repellat, minima obcaecati quisquam omnis ducimus, voluptates ipsam maiores tempora et! Quaerat vitae quia dolores eos?
          Error, odit harum eligendi, fugiat consequatur voluptatibus mollitia perferendis dolor dolore ad modi quisquam aspernatur libero hic! Neque aut architecto numquam, pariatur possimus reiciendis commodi, modi eaque quod repellendus quam.
          Totam, fugit quidem, consequuntur perspiciatis laudantium obcaecati, molestiae sapiente deserunt tempora corrupti doloribus numquam. Rem pariatur tenetur minima sint? Sunt temporibus quia sapiente eligendi minus eveniet illum magni? Nisi, accusamus!
          Quam deserunt, explicabo quae aliquam dignissimos excepturi veritatis ex dolorum fugiat facilis perspiciatis voluptatem minus ipsa nemo eveniet. Dolorem beatae magnam provident soluta tenetur dolore doloremque debitis asperiores iure omnis.
          Eaque, dolorem corrupti eveniet ipsam voluptas nemo maxime nihil. Culpa nesciunt voluptatum necessitatibus inventore ipsum quibusdam unde expedita. Maiores molestiae minima ratione dicta nisi quidem deserunt id exercitationem ipsam vitae?
          Id, excepturi veniam natus assumenda eaque vero mollitia eos eligendi et doloremque quibusdam fuga architecto labore, ipsum nesciunt explicabo laboriosam molestias vel omnis unde autem maiores? Optio cumque magni qui!
          Inventore quam ad architecto itaque nobis voluptates labore aliquid laborum laboriosam, tempora, aliquam quo quod quis minima facilis adipisci! Ipsum praesentium, enim minima doloremque corporis sit eius et inventore alias?</p>
        </div>
      </div>
    );
}
