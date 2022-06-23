import { useContext, useState } from 'react';
import './write.css';
import axios from 'axios';
import { Context} from '../../context/Context';

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    }
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);  
    } catch (error) {
      console.log(error);
    } 
  }

    return (
      <div className="write">
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="CoverImg"
            className="writeImg"
          />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput" className="labelGroup">
              <i className="writeIcon fas fa-plus"></i>
              <p className="add-text">Add<br/>Image</p>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>{setFile(e.target.files[0])}}/>
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus="true"
              onChange={(e) => {setTitle(e.target.value)}}
            />
          </div>
          <div className="writeFormGroup textArea">
            <textarea
              placeholder="Write something..."
              type="text"
              className="writeInput writeText"
              onChange={(e) => {setDesc(e.target.value)}}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    );
}