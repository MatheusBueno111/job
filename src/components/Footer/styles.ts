import styled from "styled-components"

export const FooterContainer = styled.footer `
  
  display: flex;
  margin-top: 12rem;
  flex-direction: column;
  gap: 20px;
  padding-top: 6.25rem;
  background-color: #B4A5A5;
  height: 18.75rem;
  align-items: center; 

  ul {

    display: flex;
    width: fit-content;
    gap: 20px;
  }

  a {

    img{
      height: 40px;
      width: 40px;


      :hover {
      transform: translateY(-8px);
    }
    }
    

    :visited {
      color: none
    }
  }
`

