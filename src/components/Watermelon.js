import React, { useState } from "react";

export default function Watermelon() {
  const [dis, setDis] = useState();
  return (
    <>
      <img
        src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/watermelon-1.jpg?quality=82&strip=1&resize=640%2C360"
        alt=""
        height={200}
        width={300}
      />
      <div className="showwatermelon">
        {dis ? (
          <p className="pwt">
            Watermelon is a sweet and refreshing low calorie summer snack. It
            provides hydration and also essential nutrients, including vitamins,
            minerals, and antioxidants.
          </p>
        ) : null}
      </div>
      <button onClick={() => setDis(!dis)}>Know More</button>
    </>
  );
}
