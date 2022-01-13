import './write.css';

export default function Write() {
    return (
      <div className="write">
        <img
          src="https://images.pexels.com/photos/5554868/pexels-photo-5554868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="writeImg"
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i class="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus="true"
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Write something..."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    );
}
