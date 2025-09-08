import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { InputField, Button } from "@/components";

export const BasicForm = ({ form, onChange, onChangeStep }) => {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState();

  function handleImageChange(e) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
  }

  function goToNext() {
    localStorage.setItem("myForm", "Hello World");

    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else {
      newErrors.email = "Wrong email";
    }

    const mnPhoneRegex = /^\d{8}$/;
    if (mnPhoneRegex.test(form.phone)) {
      newErrors.phone = null;
    } else {
      newErrors.phone = "Wrong number";
    }

    setErrors(newErrors);
    console.log(newErrors);

    if (!newErrors.email && !newErrors.phone) {
      localStorage.setItem("my-form", JSON.stringify(form));
      onChangeStep("image");
    }
  }
  console.log(errors);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.div
        className="m-8 bg-white p-8 rounded-2xl relative"
        initial={{ opacity: 0, right: -30 }}
        animate={{ opacity: 1, right: 0 }}
        exit={{ opacity: 0, right: 30 }}
      >
        <InputField
          label="Email"
          value={form.email}
          onChange={(e) =>
            onChange({
              ...form,
              email: e.target.value,
            })
          }
          error={errors.email}
        />
        <InputField
          label="Phone number"
          value={form.phone}
          onChange={(e) =>
            onChange({
              ...form,
              phone: e.target.value,
            })
          }
          error={errors.phone}
        />

        <div className="my-5 bg-gray-400 h-40 overflow-hidden flex items-center justify-center relative">
          Add image
          {preview && (
            <img
              src={preview}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <input
            type="file"
            className="absolute opacity-0 inset-0"
            onChange={handleImageChange}
          />
        </div>

        <div>
          <Button onClick={goToNext} variant="primary">
            Continue
          </Button>
          <Button variant="secondary">Continue</Button>
          <button
            onClick={goToNext}
            className="bg-sky-800 text-white p-4 rounded-2xl hover:bg-sky-400 hover:text-black"
          >
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
};
