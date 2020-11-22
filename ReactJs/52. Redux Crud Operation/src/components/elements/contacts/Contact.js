import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../../actions/contactAction";
import { useDispatch } from "react-redux";
// Destructruing otherwise use (props)
const Contact = ({ contact, selectAll }) => {
  // More destructuring and for id there will be template literals

  const dispatch = useDispatch();
  const { name, phone, email, id } = contact;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            checked={selectAll}
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons ">edit</span>
        </Link>

        <Link to="#">
          <span
            className="material-icons"
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default Contact;
