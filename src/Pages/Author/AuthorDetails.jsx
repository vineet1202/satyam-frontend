import React, { useState, useEffect } from "react";
import { Button } from "../Auth/LoginSignup/LoginSignup";
import styles from "./Author.module.css";

const AuthorDetails = ({ nextStep, handleChange, formData, setFormData }) => {
  const { name, email, designation, uni } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };
  const [authors, setAuthors] = useState([]);
  // const [data, setData] = useState({
  //   name: " ",
  //   email: " ",
  //   desgination: " ",
  //   uni: " ",
  // });

  const addAuthor = (e) => {
    e.preventDefault();
    //send api request
    // setData({
    //   name,
    //   email,
    //   designation,
    //   uni,
    // });
    const newAuthor = {
      name: formData.name,
      email: formData.email,
      designation: formData.designation,
      uni: formData.uni,
    };
    setAuthors([...authors, newAuthor]);
    setFormData({ name: "", email: "", designation: "", uni: "" });
  };

  // console.log("authors:", authors.length);
  // console.log("authors:", authors);

  const checkData = () => {
    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.designation !== "" &&
      formData.uni !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const save = async () => {
    try {
      const response = await axios.post(
        "https://satyam-frontend.vercel.app/journal/draft",
        formData
      );
      console.log(response);
      if (response.ok) {
        nextStep();
      }
    } catch (err) {
      console.error(err);
    }
  };
  console.log(formData);

  return (
    <div className="max-w-[1024px] mx-auto mt-16" onSubmit={handleSubmit}>
      <p className="text-3xl">Enter Author Details</p>
      {/* <div className="flex flex-col flex-wrap mt-4 mb-8"> */}
      <div className="flex flex-wrap mt-4 mb-8">
        <div className="flex flex-col justify-between w-1/2">
          <label for="name" className={styles.label}>
            Name{" "}
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            className={styles.input}
            onChange={handleChange}
          />
          <label for="name" className={styles.label}>
            Designation
          </label>
          <input
            type="text"
            name="designation"
            value={designation}
            placeholder="Designation"
            className={styles.input}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-between w-1/2">
          <label for="name" className={styles.label}>
            University
          </label>
          <input
            type="text"
            name="uni"
            value={uni}
            placeholder="University"
            className={styles.input}
            onChange={handleChange}
          />
          <label for="name" className={styles.label}>
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            className={styles.input}
            onChange={handleChange}
          />
        </div>
      </div>

      {authors.length > 0 ? (
        <div className="p-4 my-12">
          <h1 className="text-2xl text-blue font-bold">Authors</h1>
          <table className="w-full my-4 text-lg border-separate border-spacing-y-2">
            <th>Name</th>
            <th>University</th>
            <th>Desgination</th>
            <th>Email</th>
            <tbody>
              {authors.map((author) => (
                <tr
                  key={author.name}
                  className="odd:bg-slate-100 border border-white text-center"
                >
                  <td>{author.name}</td>
                  <td>{author.uni}</td>
                  <td>{author.designation}</td>
                  <td>{author.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl mb-20">No Authors Added</p>
      )}

      <div className="border-t-2 border-slate-200  bg-white py-4 ">
        {checkData() ? (
          <Button onClick={addAuthor}>Add Author</Button>
        ) : (
          <button className={styles.noBtn} disabled>
            Add Author
          </button>
        )}
        {authors.length > 0 ? (
          <>
            <Button className="float-end mb-8" onClick={handleSubmit}>
              Continue
            </Button>
            <Button className="float-end mb-8 mr-4">Save as Draft</Button>
          </>
        ) : (
          <button className={`${styles.noBtn} float-end mb-8`} disabled>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthorDetails;
