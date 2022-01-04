import React, { useContext, useEffect } from "react";
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { UserContext } from "UserContext";
import * as S from "./style";


export default function Favorites() {
    
    const {likedUsers,setLikedUsers } = useContext(UserContext);
    

    const handleRemoveLike = (indexOfLikedUser) => {
        setLikedUsers(oldArray => oldArray.filter((likedUser) => likedUser.newIndex !== indexOfLikedUser));
        localStorage.removeItem(indexOfLikedUser);
    }

    useEffect(() => {
        if (likedUsers.length === 0) {
            Object.entries(localStorage).forEach(([key, value]) => {
                let tempLikedUser = {
                    info: JSON.parse(value),
                    isLiked: true,
                    newIndex: key
                }
                setLikedUsers(oldArray => [...oldArray, tempLikedUser]);
            });
        }
    }, []);

    return (
        <S.Favorites>
            <S.Content>
                <S.Header>
                    <Text size="64px" bold>
                        Favorites Page
                    </Text>
                </S.Header>
                <S.UserList>
                <S.List>
                    {likedUsers.map((user, index) => {
                    return (
                        <S.User key={index}>
                            <S.UserPicture src={user.info?.picture.large} alt="" />
                            <S.UserInfo>
                                <Text size="22px" bold>
                                    {user.info?.name.title} {user.info?.name.first} {user.info?.name.last}
                                </Text>
                                <Text size="14px">{user.info?.email}</Text>
                                <Text size="14px">
                                    {user.info?.location.street.number} {user.info?.location.street.name}
                                </Text>
                                <Text size="14px">
                                    {user.info?.location.city} {user.info?.location.country}
                                </Text>
                            </S.UserInfo>
                            <S.IconButtonWrapper isVisible={user.isLiked ? 1 : 0}>
                                <IconButton  onClick={()=>{handleRemoveLike(user.newIndex)}}>
                                    <FavoriteIcon color="error" />
                                </IconButton>
                            </S.IconButtonWrapper>
                        </S.User>
                    )
                })}
                </S.List>
                </S.UserList>
            </S.Content>
        </S.Favorites>
    );
}