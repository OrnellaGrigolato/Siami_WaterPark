import React from 'react';
import './extras.css';

function Extras(props) {
  const [checked, setChecked] = React.useState({
    parking: [false, 15],
    childCare: [false, 19.99],
    photographer: [false, 6.99],
    rental1: [false, 4],
    storage: [false, 2],
    rental2: [false, 1]
  });

  const filter = (obj) => {
    const asArray = Object.entries(obj);
    const filtered = asArray.filter((elem) => elem[1][0] === true);
    return filtered;
  };
  const functionHandler = (data) => {
    props.passExtras(filter(data));
  };

  React.useEffect(() => {
    functionHandler(checked);
  }, [checked]);

  return (
    <>
      <h2>Add confort to your visit with this additional services!</h2>
      <div className="extrasContainer">
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setChecked({ ...checked, parking: [!checked.parking[0], checked.parking[1]] })
            }
          />
          <img src="./car.png"></img>
          <h3>Parking</h3>
          <p>$15</p>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setChecked({ ...checked, childCare: [!checked.childCare[0], checked.childCare[1]] })
            }
          />
          <img src="./childCare.svg"></img>
          <h3>Child care</h3>
          <p>$19.99</p>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setChecked({
                ...checked,
                photographer: [!checked.photographer[0], checked.photographer[1]]
              })
            }
          />
          <img src="./photographer.svg"></img>
          <h3>Professional photographer</h3>
          <p>$6.99</p>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setChecked({ ...checked, rental1: [!checked.rental1[0], checked.rental1[1]] })
            }
          />
          <img src="./umbrella.png"></img>
          <h3>Rental of lounge chairs and umbrellas</h3>
          <p>$4</p>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setChecked({ ...checked, storage: [!checked.storage[0], checked.storage[1]] })
            }
          />
          <img src="./lockers.png"></img>
          <h3>Private storage space</h3>
          <p>$2</p>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setChecked({ ...checked, rental2: [!checked.rental2[0], checked.rental2[1]] })
            }
          />
          <img src="./towel.png"></img>
          <h3>Rental of towels</h3>
          <p>$1</p>
        </div>
      </div>
    </>
  );
}

export default Extras;
