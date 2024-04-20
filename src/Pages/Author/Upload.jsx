import React from "react";
import { useState } from "react";
import AuthorDetails from "./AuthorDetails";
import PaperDetails from "./PaperDetails";
import ReviewerDetails from "./ReviewerDetails";
import Profile from "./Profile";

const Upload = () => {
  const [step, setStep] = useState(1);
  const [tags, setTags] = useState([]);
  const initialState = {
    name: "",
    email: "",
    designation: "",
    uni: "",
    abstract: "",
    title: "",
    upload:'',
    pdf:'',
    tags: [],
    revName: "",
    revEmail: "",
    // revUni: "",
    // revDesgn: "",
    // tags: [],
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <Profile />
      <h1 className="text-3xl text-blue font-bold text-center mt-24">
        Upload Journal
      </h1>
      <div>
        {step == 1 && (
          <AuthorDetails
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step == 2 && (
          <PaperDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
            tags={tags}
            setTags={setTags}
          />
        )}
        {step == 3 && (
          <ReviewerDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
};

export default Upload;
