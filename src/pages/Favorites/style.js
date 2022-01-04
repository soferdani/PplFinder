import styled from "styled-components";

export const Favorites = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-block-start: 100px;
`;

export const Header = styled.div`
    display: flex;
`;


export const UserList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 500px;
    height: calc(100vh - 270px);
    margin-block-start: 30px;
    overflow-y: auto;
`;

export const User = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-height: 128px;
    gap: 2px;
    overflow: hidden;
`;

export const UserPicture = styled.img`
    border-radius: 45%;
`;


export const IconButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
`;
