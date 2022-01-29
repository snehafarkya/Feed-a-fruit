import React from "react";

function Popsicle() {
  return (
    <>
      <div className="recipee">
        <div className="mainc">
          <div className="thecardd">
            <div className="frontc">
              <h2 className="h2">Berry Popsicle</h2>
              <img
                src="https://cdn.pixabay.com/photo/2018/07/29/21/28/popsicles-3571086_960_720.jpg"
                alt=""
                height={270}
                width={300}
              />
            </div>
            <div className="backc">
              <h3 className="h3">Ingredients</h3>
              <ul id="ull">
                <li className="lii">Fresh berries</li>
                <li className="lii">Honey</li>
                <li className="lii">Freezer pop moulds</li>
                <li className="lii">Vanila extract</li>
                <li className="lii">Milk</li>
              </ul>
              <h3 className="h3">Method</h3>
              <p className="met">
                In a microwave, warm 1/4 cup milk; stir in honey until blended.
                Stir in remaining 1-1/2 cups milk and vanilla.Divide berries
                among molds; cover with milk mixture. Top molds with holders. If
                using cups, top with foil and insert sticks through foil. Freeze
                until firm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popsicle;
