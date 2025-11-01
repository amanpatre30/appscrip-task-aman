import { useState } from "react";
import "./index.css";

const Filters = (props) => {
  const [idealFor, setIdealFor] = useState("");
  const [occasion, setOccasion] = useState("");
  const [work, setWork] = useState("");
  const [fabric, setFabric] = useState("");
  const [segment, setSegment] = useState("");
  const [suitableFor, setSuitableFor] = useState("");
  const [rawMaterial, setRawMaterial] = useState("");
  const [pattern, setPattern] = useState("");
  const { isVisible } = props;
  const idealForOptions = ["Men", "Women", "Baby & Kids"];
  const occasionOptions = [
    "Rainy Season",
    "Casual",
    "Wedding",
    "Party",
    "Regular",
  ];
  const workOptions = ["French Knot", "Zardosi", "Fancy", "Embroidery"];
  const fabricOptions = [
    "Muslin",
    "Satin Blend",
    "Satin",
    "Tericoat",
    "Linen",
    "Raw Silk",
    "Cotton",
    "Silk",
    "Cotton Silk",
  ];
  const segmentOptions = ["Silver", "Ethnic", "Contemporary"];
  const suitableForOptions = ["Formal Wear", "Western Wear", "Casual Wear"];
  const rawMaterialOptions = [
    "Wool",
    "Silk",
    "Leather",
    "Cotton",
    "Cellulosic Fibers",
  ];
  const patternOptions = [
    "Windowpane",
    "Pinstripes",
    "Solid",
    "Chalk Stripes",
    "Slim Fit",
    "Tartan",
  ];

  return (
    <div className="filter-container">
      {/* Customised Checkbox */}

      {/* IDEAL FOR Dropdown */}
      {isVisible && (
        <div>
          <div className="input-customised-container">
            <input type="checkbox" id="customised" className="checkbox" />
            <label htmlFor="customised" className="customised-text">
              CUSTOMISED
            </label>
          </div>
          <div className="different-filter-section">
            <label className="dropdown-label">IDEAL FOR</label>
            <select
              className="ideal-for-select"
              onChange={(e) => setIdealFor(e.target.value)}
              defaultValue=""
            >
              <option value="All">All</option>
              {idealForOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {idealFor && <div className="selected-option">{idealFor}</div>}
            <hr />
          </div>

          <div className="different-filter-section">
            <label className="dropdown-label">OCCASION</label>
            <select
              className="ideal-for-select"
              onChange={(e) => setOccasion(e.target.value)}
              defaultValue=""
            >
              <option value="All">All</option>
              {occasionOptions.map((option, idx) => (
                <option key={idx} value={option} className="input-field">
                  {option}
                </option>
              ))}
            </select>

            {idealFor && <div className="selected-option">{occasion}</div>}
            <hr />
          </div>
          <div className="different-filter-section">
            <label className="dropdown-label">WORK</label>
            <select
              className="ideal-for-select"
              onChange={(e) => setWork(e.target.value)}
              defaultValue=""
            >
              <option value="All">All</option>
              {workOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {idealFor && <div className="selected-option">{work}</div>}
            <hr />
          </div>
          <div className="different-filter-section">
            <label className="dropdown-label">FEBRIC</label>
            <select
              className="ideal-for-select"
              onChange={(e) => setFabric(e.target.value)}
              defaultValue=""
            >
              <option value="All">All</option>
              {fabricOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {idealFor && <div className="selected-option">{fabric}</div>}
            <hr />
          </div>
          <div className="different-filter-section">
            <label className="dropdown-label">SEGEMENT</label>
            <select
              className="ideal-for-select"
              onChange={(e) => setSegment(e.target.value)}
              defaultValue=""
            >
              <option value="All">All</option>
              {segmentOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {idealFor && <div className="selected-option">{segment}</div>}
            <hr />
          </div>
          <div className="different-filter-section">
            <label className="dropdown-label">SUITABLE FOR</label>
            <select
              className="ideal-for-select"
              onChange={(e) => setSuitableFor(e.target.value)}
              defaultValue=""
            >
              <option value="All">All</option>
              {suitableForOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {idealFor && <div className="selected-option">{suitableFor}</div>}
            <hr />
          </div>
          <div className="different-filter-section">
            <label className="dropdown-label">RAW MATERIAL</label>
            <select
              className="ideal-for-select"
              onChange={(e) => setRawMaterial(e.target.value)}
              defaultValue=""
            >
              <option value="All">All</option>
              {rawMaterialOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {idealFor && <div className="selected-option">{rawMaterial}</div>}
            <hr />
          </div>
          <div className="different-filter-section">
            <label className="dropdown-label">PATTERN</label>
            <select
              className="ideal-for-select"
              onChange={(e) => setPattern(e.target.value)}
              defaultValue=""
            >
              <option value="All">All</option>
              {patternOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {idealFor && <div className="selected-option">{pattern}</div>}
            <hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
