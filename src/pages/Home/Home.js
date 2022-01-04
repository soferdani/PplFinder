import { useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";


const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);
  const { users, isLoading , setUsers } = usePeopleFetch(pageNumber,isFiltered);
  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} setUsers={setUsers} setPageNumber={setPageNumber} setIsFiltered={setIsFiltered} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
