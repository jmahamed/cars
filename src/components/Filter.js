import React from 'react'

const Filter = () => {
  return (
    <div className="filters">
        <h3>Filters</h3>
        <div className="filter">
            <h4>Price</h4>
            <select name="from" id="price-from">
            <option value="from">from</option>
            </select>
            <select name="till" id="price-till">
            <option value="till">till</option>
            </select>
        </div>

        <div className="filter">
            <h4>Year</h4>
            <select name="from" id="year-from">
            <option value="from">from</option>
            </select>
            <select name="till" id="year-till">
            <option value="till">till</option>
            </select>
        </div>

        <div className="filter">
            <h4>Mileage</h4>
            <select name="from" id="mileage-from">
            <option value="from">from</option>
            </select>
            <select name="till" id="mileage-till">
            <option value="till">till</option>
            </select>
        </div>

        <div className="filter">
            <h4>Color</h4>
            <select name="from" id="color">
            <option value="from">select a color</option>
            </select>
        </div>
    </div>
  )
}

export default Filter