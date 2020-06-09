import React from "react";
import styled from "styled-components";

interface Props {
   userName: string;
   repoCount: number;
   totalStars: number;
}

export const UserInfo: React.FC<Props> = (props) => {
   const { userName, repoCount, totalStars } = props;

   return userName ? (
      <Wrapper>
         <UserName>{userName}</UserName>
         <Count>{repoCount} Repositories</Count>
         <Count>{totalStars} Stars</Count>
      </Wrapper>
   ) : (
      <></>
   );
};

const Wrapper = styled.div`
   padding: 12px 0px;
   border-bottom: 1px solid #ced4da;
   margin-bottom: 24px;
`;

const UserName = styled.p`
   font-weight: 300;
   color: #343a40;
   font-size: 42px;
   margin: 0;
`;

const Count = styled.span`
   font-weight: 400;
   color: #343a40;
   font-size: 24px;
   padding-right: 12px;

   & + span {
      border-left: 2px solid #343a40;
      padding-left: 12px;
   }
`;
