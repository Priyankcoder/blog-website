import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import { firebaseDb } from "../firebase";
import { Link } from "react-router-dom";
import loadimg from "../images/loadimg.svg";

const Contacts = () => {
  var [currentId, setCurrentId] = useState("");
  var [blogObjects, setblogObjects] = useState({});
  let [pending, setPending] = useState(true);
  //Once components load complete
  useEffect(() => {
    firebaseDb.child("blogs").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setblogObjects({
          ...snapshot.val(),
        });
        // console.log(snapshot.val());
        setPending(false);
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    const d = new Date(2010, 7, 5);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    const timeStamp = `${mo} ${da}, ${ye}`;
    console.log(timeStamp);
    obj.timeStamp = timeStamp;
    if (currentId == "")
      firebaseDb.child("blogs").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else {
      obj.timeStamp += " Updated";
      firebaseDb.child(`blogs/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      firebaseDb.child(`blogs/${id}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };
  if (pending) {
    return (
      <div className="pending">
        <img src={loadimg} alt="loading-image" />
      </div>
    );
  }
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container" style={{ display: "flex" }}>
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <h1 className="display-4 text-center">DashBoard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...{ currentId, blogObjects, addOrEdit }}></ContactForm>
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(blogObjects).map((key) => (
                <tr key={key}>
                  <td>{blogObjects[key].firstName}</td>
                  <td>{blogObjects[key].lastName}</td>
                  <td>{blogObjects[key].title}</td>
                  {/* <td>{blogObjects[key].content}</td> */}
                  <td className="bg-light">
                    <a
                      className="btn text-primary"
                      onClick={() => {
                        setCurrentId(key);
                      }}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a
                      className="btn text-danger"
                      onClick={() => {
                        onDelete(key);
                      }}
                    >
                      <i className="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
