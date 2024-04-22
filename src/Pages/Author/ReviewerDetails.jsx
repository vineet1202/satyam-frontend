import React, { useState } from "react";
import Button from "./Button";

import styles from "./Author.module.css";

const ReviewerDetails = ({
  nextStep,
  handleChange,
  handleReviewers,
  formData,
  prevStep,
  setFormData,
}) => {
  const { reviewers } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const [allReviewers, setReviewers] = useState([]);

  const addReviewer = (e) => {
    e.preventDefault();
    const newReviewer = {
      name: formData.reviewers.name,
      email: formData.reviewers.email,
    };
    setReviewers([...allReviewers, newReviewer]);

    setFormData({
      reviewers: {
        name: "",
        email: "",
      },
    });
  };

  const checkData = () => {
    if (formData.reviewers.name !== "" && formData.reviewers.email !== "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="max-w-[1024px] mx-auto mt-16 ">
      <p className="text-3xl">Enter Reviewer Details</p>
      <div className="flex flex-col flex-wrap mt-4 mb-8">
        <label for="name" className="text-xl">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={reviewers.name}
          placeholder="Name"
          className={styles.input}
          onChange={handleReviewers}
        />
        <label for="name" className="text-xl">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={reviewers.email}
          placeholder="someone@email.com"
          className={styles.input}
          onChange={handleReviewers}
        />
      </div>

      {allReviewers.length > 0 ? (
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
              {allReviewers.map((reviewer) => (
                <tr
                  key={reviewer.name}
                  className="odd:bg-slate-100 border  text-center"
                >
                  <td>{reviewer.name}</td>
                  <td>{reviewer.email}</td>
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
        {allReviewers.length > 0 ? (
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
