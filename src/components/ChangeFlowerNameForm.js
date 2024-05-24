import React, { useState } from "react";

const ChangeNameForm = () => {
    const [flower, setFlower] = useState(null);

  return (
    <div>
      <form class="text-center">
        <div class="input-group flex-nowrap my-2">
          <span class="input-group-text" id="addon-wrapping">
            Flower:{" "}
          </span>
          <input
            type="text"
            class="form-control"
            value={flower}
            onChange={(e) => {setFlower(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-primary">
            Choose Flower
        </button>
      </form>
    </div>
  );
};

export default ChangeNameForm;
