import React, { useEffect, useState } from "react";
const DarkMode = () => {
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {theme ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default DarkMode;
