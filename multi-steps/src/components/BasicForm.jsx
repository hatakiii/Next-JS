import { useState } from "react";

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

    if (form.email === "") {
      newErrors.email = "You must enter your email";
    } else {
      newErrors.email = null;
    }

    if (form.phone === "") {
      newErrors.phone = "You must enter your phone number";
    } else {
      newErrors.phone = null;
    }
    setErrors(newErrors);
    console.log(newErrors);

    if (!newErrors.email && !newErrors.phone) {
      onChangeStep("image");
    }
  }
  console.log(errors);
  return (
    <div className="m-8">
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
    </div>
  );
};
