import React, { useEffect, useState , useContext } from "react";
import Text from "components/Text";  
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import { nanoid } from "nanoid";
import { UserContext } from "UserContext";


export default function User({info, index, reference}) {
    const [isHovered, setIsHovered] = useState();
    const [isLiked, setIsLiked] = useState(false);
    
    const {likedUsers,setLikedUsers } = useContext(UserContext);

    const handleMouseEnter = (index) => { 
        setIsHovered(index);
    };
    
    const handleMouseLeave = () => { 
        setIsHovered();
    };
    

    const handleHartClick = () => {
        setIsLiked((isLiked) => !isLiked);
    }
        
    useEffect(() => { 
        if (isLiked) {
            let newIndex = nanoid()
            let newLikedUsers = { info, isLiked, newIndex };
            setLikedUsers(oldArray => [...oldArray, newLikedUsers]);
            localStorage.setItem(newIndex, JSON.stringify(info));
        } else  {
            let userToRemoveFromLocalStorage = likedUsers.find((user)=> user.info.id === info.id) 
            setLikedUsers(oldArray => oldArray.filter(item => item.info.id !== info.id));
            if (userToRemoveFromLocalStorage) {
                localStorage.removeItem(userToRemoveFromLocalStorage.newIndex);
            }
        }
    }, [isLiked]);

    return (    
        <S.User
            ref={reference ? reference : null}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
        >
                <S.UserPicture src={info?.picture.large} alt="" />
                <S.UserInfo>
                <Text size="22px" bold>
                    {info?.name.title} {info?.name.first} {info?.name.last}
                </Text>
                <Text size="14px">{info?.email}</Text>
                <Text size="14px">
                    {info?.location.street.number} {info?.location.street.name}
                </Text>
                <Text size="14px">
                    {info?.location.city} {info?.location.country}
                </Text>
            </S.UserInfo>
                <S.IconButtonWrapper isVisible={isLiked || index === isHovered}>
                    <IconButton  onClick={handleHartClick}>
                        <FavoriteIcon color="error" />
                    </IconButton>
                </S.IconButtonWrapper>
        </S.User>
    );
}

