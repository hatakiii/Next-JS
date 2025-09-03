export const Button = ({ children, variant, onClick }) => {
  let classes = "p-5 border ";
  if (variant === "primary") {
    classes += "bg-black text-white";
  } else if (variant === "secondary") {
    classes += "bg-white";
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

// onClick={goToNext}
