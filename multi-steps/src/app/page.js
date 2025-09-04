"use client";

import { useState } from "react";
import { BasicForm } from "@/components/BasicForm";
import ReactiveButton from "reactive-button";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [step, setStep] = useState("basic"); // image, complete
  const localForm =
    typeof window !== "undefined" ? localStorage.getItem("my-form") : null;
  const [form, setForm] = useState(
    localForm
      ? JSON.parse(localForm)
      : {
          email: "",
          phone: "",
        }
  );

  function submit() {
    setStep("image");
    // 1.Validation
    // 2.Go to next step

    console.log(form);
    //Last:submit to backend
  }
  const gotoNext = () => {
    setStep("complete");
  };
  if (step === "basic") {
    return (
      <AnimatePresence>
        {step === "basic" && (
          <BasicForm form={form} onChange={setForm} onChangeStep={setStep} />
        )}
        ;
      </AnimatePresence>
    );
  }
  if (step === "image") {
    return (
      <div>
        Image
        <button
          onClick={() => setStep("basic")}
          className="bg-sky-800 text-white p-4 rounded-2xl hover:bg-sky-400 hover:text-black"
        >
          Back
        </button>
        <button
          onClick={gotoNext}
          className="bg-sky-800 text-white p-4 rounded-2xl hover:bg-sky-400 hover:text-black"
        >
          Continue
        </button>
        <ReactiveButton
          idleText="Submit"
          loadingText="Loading"
          successText="Done"
          onClick={gotoNext}
        />
      </div>
    );
  }
  if (step === "complete") {
    return <div>You're all set.</div>;
  }
}
