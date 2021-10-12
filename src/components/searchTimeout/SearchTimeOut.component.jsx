import React, { useState, useEffect } from "react";
import data from "../../constant/data.json";
import { userFilter } from "../../handler/userFilter.helper";
import { filterUsers } from "../../Context/actions/user.action";
import { useGlobalDispatch } from "../../Context/Provider";

function SearchTimeOut({ setCurrentPage }) {
  const [searchInput, setSearchInput] = useState("");
  const { userDispatch: dispatch } = useGlobalDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentPage(0);
      const users = userFilter(data.results, searchInput, "email");
      dispatch(filterUsers({ users }));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchInput]);
  return (
    <>
      <div className="d-flex justify-content-center py-5">
        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.currentTarget.value)}
          placeholder="جستجو براساس نام کاربر"
          style={{ padding: "2px 10px", borderRadius: " 5px" }}
        />
      </div>
    </>
  );
}

export default SearchTimeOut;
