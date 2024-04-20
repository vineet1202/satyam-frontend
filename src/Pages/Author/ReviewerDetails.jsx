import React, { useState } from "react";
import { Button } from "../Auth/LoginSignup/LoginSignup";
import styles from "./Author.module.css";

const ReviewerDetails = ({
  nextStep,
  handleChange,
  formData,
  prevStep,
  setFormData,
}) => {
  console.log(formData);
  const { revName, revEmail } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const [reviewers, setReviewers] = useState([]);

  const addReviewer = (e) => {
    e.preventDefault();
    const newReviewer = {
      revName: formData.revName,
      revEmail: formData.revEmail,
    };
    setReviewers([...reviewers, newReviewer]);
    setFormData({ revName: "", revEmail: "" });
  };

  const checkData = () => {
    if (formData.revName !== "" && formData.revEmail !== "") {
      return true;
    } else {
      return false;
    }
  };
  console.log(reviewers.length);

  return (
    <div className="max-w-[1024px] mx-auto mt-16 ">
      <p className="text-3xl">Enter Reviewer Details</p>
      <div className="flex flex-col flex-wrap mt-4 mb-8">
        <label for="name" className="text-xl">
          Name
        </label>
        <input
          type="text"
          name="revName"
          value={revName}
          placeholder="Name"
          className={styles.input}
          onChange={handleChange}
        />
        <label for="name" className="text-xl">
          Email
        </label>
        <input
          type="text"
          name="revEmail"
          value={revEmail}
          placeholder="someone@email.com"
          className={styles.input}
          onChange={handleChange}
        />
      </div>

      {reviewers.length > 0 ? (
        <div className="p-4 my-12 w-3/5">
          <h1 className="text-2xl text-blue font-bold">Reviewers</h1>
          <table className="w-full my-4 text-lg border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>University</th>
              </tr>
            </thead>
            <tbody>
              {reviewers.map((reviewer) => (
                <tr
                  key={reviewer.revName}
                  className="odd:bg-slate-100 border  text-center"
                >
                  <td>{reviewer.revName}</td>
                  <td>{reviewer.revEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl mb-20">No Reviewers Added</p>
      )}

      <div className="border-t-2  border-slate-200 bg-white py-4  ">
        <Button onClick={prevStep} className="mr-4">
          Back
        </Button>
        {checkData() ? (
          <Button onClick={addReviewer}>Add Reviewer</Button>
        ) : (
          <button className={styles.noBtn} disabled>
            Add Reviewer
          </button>
        )}
        {reviewers.length > 0 ? (
          <>
            {" "}
            <Button className="float-end mb-8" onClick={handleSubmit}>
              Finish
            </Button>
            <Button className="float-end mb-8 mr-4">Save as Draft</Button>
          </>
        ) : (
          <button className={`${styles.noBtn} float-end mb-8`} disabled>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewerDetails;
