import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const BasicForm = ({ form, onChange, onChangeStep }) => {
  const [errors, setErrors] = useState({});
  function goToNext() {
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
        <div className="mb-4">
          Email <br />
          <input
            className="border bg-amber-400"
            value={form.email}
            onChange={(e) =>
              onChange({
                ...form,
                email: e.target.value,
              })
            }
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
        </div>
        <div className="mb-4">
          Phone number <br />
          <input
            className="border bg-amber-400"
            value={form.phone}
            onChange={(e) =>
              onChange({
                ...form,
                phone: e.target.value,
              })
            }
          />
          {errors.phone && <div className="text-red-500">{errors.phone}</div>}
        </div>
        <div>
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
