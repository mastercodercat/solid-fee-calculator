import moment from "moment";
import React from "react";
import useItemForm from "../hooks/useItemForm";

const NewItemForm = ({ onSubmit }) => {
  const initialValues = {
    itemType: "-1",
    userType: "-1",
    price: 100,
    endDate: moment().format("YYYY-MM-DD"),
  };
  const form = useItemForm({
    initialValues: initialValues,
    handleSubmit: onSubmit,
  });

  return (
    <form className="New-item-form" onSubmit={form.handleSubmit}>
      <div className="form-group">
        <label htmlFor="userType">You are</label>
        <select
          name="userType"
          className={`form-control ${form.touched.userType && !!form.errors.userType && "error-control"}`}
          id="userType"
          defaultValue="-1"
          value={form.values.userType}
          onChange={form.handleChange}
        >
          <option value="-1">Select</option>
          <option value="0">Person</option>
          <option value="1">Company</option>
        </select>
        <p className="error">{form.errors.userType}</p>
      </div>

      <div className="form-group">
        <label htmlFor="itemType">Item Type</label>
        <select
          name="itemType"
          className={`form-control ${form.touched.itemType && !!form.errors.itemType && "error-control"}`}
          id="itemType"
          defaultValue="-1"
          value={form.values.itemType}
          onChange={form.handleChange}
        >
          <option value="-1">Select</option>
          <option value="0">Auction</option>
          <option value="1">Buy it now</option>
        </select>
        <p className="error">{form.errors.itemType}</p>
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          name="price"
          className={`form-control ${form.touched.price && !!form.errors.price && "error-control"}`}
          type="number"
          value={form.values.price}
          onChange={form.handleChange}
        />
        <p className="error">{form.errors.price}</p>
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End date</label>
        <input
          name="endDate"
          className={`form-control ${form.touched.endDate && !!form.errors.endDate && "error-control"}`}
          type="text"
          value={form.values.endDate}
          onChange={form.handleChange}
        />
        <p className="error">{form.errors.endDate}</p>
      </div>

      <input type="submit" className="btn btn-primary" value="Submit" />
    </form>
  );
};

export default NewItemForm;
