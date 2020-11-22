import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllContact,
  selectAllContact,
  deleteAllContact,
} from "../../../actions/contactAction";
import Contact from "./Contact";
const Contacts = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contact.contacts);
  const selectedContact = useSelector(
    (state) => state.contact.selectedContacts
  );

  console.log(contacts);

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);
  return (
    <div>
      {selectedContact.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => deleteAllContact()}
        >
          delete all
        </button>
      ) : null}
      <table className="table bg-dark text-white">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="selectAll"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact
              contact={contact}
              key={contact.id}
              selectAll={setSelectAll}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
