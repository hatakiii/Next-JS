"use client";

import { useState } from "react";
import { BasicForm } from "@/components/BasicForm";

export default function Home() {
  const [step, setStep] = useState("basic"); // image, complete
  const [form, setForm] = useState({
    email: "",
    phone: "",
  });

  function submit() {
    setStep("image");
    // 1.Validation
    // 2.Go to next step

    console.log(form);
    //Last:submit to backend
  }
  if (step === "basic") {
    return <BasicForm form={form} onChange={setForm} onChangeStep={setStep} />;
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
          onClick={() => setStep("complete")}
          className="bg-sky-800 text-white p-4 rounded-2xl hover:bg-sky-400 hover:text-black"
        >
          Continue
        </button>
      </div>
    );
  }
  if (step === "complete") {
    return <div>You're all set.</div>;
  }
}
