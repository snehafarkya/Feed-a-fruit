import React, { useState } from "react";

export default function Mango() {
  const [show, setShow] = useState();
  return (
    <>
      <img
        src="https://www.tasteofhome.com/wp-content/uploads/2019/05/mangos-shutterstock_1090910984.jpg?fit=700,700"
        alt=""
        height={200}
        width={300}
      />
      <div className="showmango">
        {show ? (
          <p className="pmn">
            Mangoes are sweet, creamy fruits that have a range of possible
            health benefits. They are highly popular around the world.
          </p>
        ) : null}
      </div>
      <button onClick={() => setShow(!show)}>Know More</button>
    </>
  );
}
