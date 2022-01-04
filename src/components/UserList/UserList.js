import React, { useEffect, useState , useRef, useCallback, useLayoutEffect} from "react";
import User from "components/User";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import * as S from "./style";


const UserList = ({ users, isLoading, setUsers, setPageNumber, setIsFiltered }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [copyUsers, setCopyUsers] = useState([]);


  const handleCheckBoxClick = (index) => {
    if (selectedLocations.includes(index)) {
      setSelectedLocations(selectedLocations.filter((location) => location !== index));
    } else {
      setSelectedLocations(oldArray => [...oldArray, index]);
    }
  }

  const filterFunc = (user) => {
    if (selectedLocations.includes(user.nat)) {
      return true;
    }
  }


  useLayoutEffect(() => {
    if (selectedLocations.length > 0) {
      setIsFiltered(true);
    } else if (selectedLocations.length === 0) {
      setIsFiltered(false);
    }
  },[selectedLocations]) 


  useEffect(() => {
    if (copyUsers.length === 0) { 
      setCopyUsers(users)
      setUsers(users.filter(filterFunc));
    } else {
      if (selectedLocations.length !== 0) {
        setUsers(copyUsers.filter(filterFunc));
      } else {
        setUsers(copyUsers);
        setCopyUsers([]);
      }
    }
  },[selectedLocations])


  const observer = useRef();
  const lastBookElementRef = useCallback(node => {
    if (isLoading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    })
    if (node) {
      observer.current.observe(node);
    }
  },[isLoading])



  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" label="Brazil" onChange={handleCheckBoxClick}  />
        <CheckBox value="AU" label="Australia" onChange={handleCheckBoxClick} />
        <CheckBox value="CA" label="Canada" onChange={handleCheckBoxClick} />
        <CheckBox value="DE" label="Germany" onChange={handleCheckBoxClick} />
        <CheckBox value="FR" label="France" onChange={handleCheckBoxClick} />
      </S.Filters>
      <S.List>
        {users.map((user, index) => {
          if (users.length === index + 1) {
            return (
              <User reference={lastBookElementRef} info={user} index={index} key={index} />
            )
          } else {
            return (
              <User info={user} index={index} key={index} />
            )
          }
            })}
          {isLoading && (
            <S.SpinnerWrapper>
              <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
            </S.SpinnerWrapper>
          )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
