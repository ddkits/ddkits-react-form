import React, { Fragment, useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const List = ({ field, fieldChanged }) => {
  const [options, setoptions] = useState([]);
  const setoptionsandstate = async () => {
    let final = [];
    await field.options.map((option) =>
      final.push({ value: option.value, label: option.label })
    );
    setoptions(final);
  };
  useEffect(() => {
    if (field.options.length > 0) {
      setoptionsandstate();
    }
  }, []);
  const setValuesOnChange = (e) => {
    if (field.multiple === true) {
      fieldChanged(field.name, e.map((x) => x.value).toString());
    } else {
      fieldChanged(field.name, e.value);
    }
  };
  if (field.multiple === true) {
    return (
      <Fragment>
        <div>{field.label}</div>
        {options.length > 0 && (
          <Select
            options={options}
            isMulti
            isClearable
            closeMenuOnSelect={false}
            components={animatedComponents}
            style={{ zIndex: "50" }}
            onChange={(e) => setValuesOnChange(e)}
          />
        )}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div>{field.label}</div>
        {options.length > 0 && (
          <Select
            options={options}
            isClearable
            closeMenuOnSelect={false}
            components={animatedComponents}
            style={{ zIndex: "50" }}
            onChange={(e) => setValuesOnChange(e)}
          />
        )}
      </Fragment>
    );
  }
};

export default List;
