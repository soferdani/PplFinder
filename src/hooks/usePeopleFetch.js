import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = (pageNumber,isFiltered) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [pageNumber]);

  async function fetchUsers() {
    if (!isFiltered) {
      setIsLoading(true);
      const response = await axios.get(`https://randomuser.me/api/?results=25&page=${pageNumber}`);
      setIsLoading(false);
      if (pageNumber > 1) {
        setUsers([...users, ...response.data.results]);
      } else {
        setUsers(response.data.results);
      }
    }
  }
  return { users, isLoading, fetchUsers , setUsers};
};
