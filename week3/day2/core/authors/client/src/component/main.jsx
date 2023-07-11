import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const Main = (props) => {
  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // const [errors, setErrors] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => {
        setAuthor(res.data);
        setLoaded(true);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, [loaded]);
  //<Button className="bg-green-600 rounded-md py-1 px-4...">Create Repository</Button>

  const removeFromDom = (productId) => {
    setAuthor(author.filter((product) => product._id !== productId));
  };

  const Delete = (productId) => {
    axios
      .delete("http://localhost:8000/api/author/" + productId)
      .then((res) => {
        removeFromDom(productId);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h1>favorite authors</h1>
      <h4>
        <Link to={`/author/create`}>create</Link>
      </h4>
      <h4>we have quotes by:</h4>
      <div>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Action available</th>
            </tr>
          </thead>
          <tbody>
            {author.map((author) => (
              <tr key={author._id}>
                <td> {author.name}</td>
                <td>
                  <button className="btn btn-primary"
                    onClick={(e) => {
                      Delete(author._id);
                    }}
                  >
                    Delete
                  </button>

                  <Link
                    className="btn btn-primary"
                    to={"/author/edit/" + author._id}
                  >
                    edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Main;
