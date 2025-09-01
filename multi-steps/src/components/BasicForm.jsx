export const BasicForm = ({ form, onChange, onChangeStep }) => {
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
      </div>
      <div>
        <button
          onClick={() => onChangeStep("image")}
          className="bg-sky-800 text-white p-4 rounded-2xl hover:bg-sky-400 hover:text-black"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
