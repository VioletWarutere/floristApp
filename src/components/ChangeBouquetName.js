import React from 'react'

const ChangeBouquetName = () => {
  return (
    <div>
        <div>
      <form class="text-center">
        <div class="input-group flex-nowrap my-2">
          <span class="input-group-text" id="addon-wrapping">
            Bouquet:{" "}
          </span>
          <input
            type="text"
            class="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
            Choose Bouquet
        </button>
      </form>
    </div>
  );
    </div>
  )
}

export default ChangeBouquetName