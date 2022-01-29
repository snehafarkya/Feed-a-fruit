import React from "react";

function cardf() {
  return (
    <div className="mainc">
      <div className="thecardd">
        <div className="frontc">
          <h2 className="h2">Fruit cream</h2>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973__340.jpg"
            alt=""
            height={320}
            width={450}
          />
        </div>
        <div className="backc">
          <h3 className="h3">Ingredients</h3>
          <ul id="ull">
            <li className="lii">Fuits of your choice</li>
            <li className="lii">Yogurt</li>
            <li className="lii">Black Pepper</li>
            <li className="lii">Whipped cream</li>
            <li className="lii">Nuts</li>
          </ul>
          <h3 className="h3">Method</h3>
          <p className="met">
            The most simplest and quickest way to have a healthy breakfast. Just
            chop off fruits and nuts , mix them with yogurt and cream and put it
            in fridge for 10 minutes. Viola! Your fruit cream is ready to eat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default cardf;
