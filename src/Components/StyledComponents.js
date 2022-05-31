import styled from "styled-components";
import { Divider, Menu, PageHeader,Image, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import p from './About'
// const StyledBody= styled(body)`
// scroll-behavior: smooth;
// `
 const StyledTitle = styled(PageHeader)`
  && .ant-page-header-heading-extra{
    margin-top:35px
  }
  && .ant-page-header-heading-extra{
    margin: 4px 10px;
  }
`;
 const StyledDivider = styled(Divider)`
 &&.ant-divider-horizontal {
   margin: auto;
   width: 95%;
   min-width: 87%;
   margin-top:-18px;
}
 &&.ant-divider{

  border-top: 4px solid black;
}
`

const StyledMenu=styled(Menu)`

&&.ant-menu-horizontal{
  border-bottom:0px solid transparent;
  margin-left: 612px; 
}
&&.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after{
  border-bottom:2px solid white
}
`
// const StyledImage=styled(Image)`
// // width: 130%;
// && .ant-image{
//   background-color:red
//   width: 130%;
// }

// `

const StyledContent=styled(Content)`
  &&{
    margin:15px 0px 0px 51px;
  }
 `

 const StyledDiv=styled.div`
   &&{
     background-color:black;
     color:white;
     height:30%;
     width:100%;
     display:inline;
   }
 `

 const StyledPara= styled.p`
 
 padding: 13px 10px;
 margin: 81px 9px 4px 30px;
 font-size: x-large;
 `
const StyledRow=styled(Row)`
padding: 32px 250px;

`
const StyledParagraph =styled.div`

margin: -15px 617px;
    inline-size: 349px;
    overflow-wrap: break-word;
    font-size: 18px !important;
    padding: 0px 0px 30px;
    height: auto;
    max-width: 100%;
}
`

export {
  StyledContent,
  StyledMenu,
  StyledDivider,
  StyledTitle,
  // StyledImage,
  StyledDiv,
  StyledPara,
  // StyledBody,
  StyledRow,
  StyledParagraph,
}


