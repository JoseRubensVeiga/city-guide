import React from 'react';

import {
  Container,
  ColumnList,
  ColumnContainer,
  ColumnTitle,
  ColumnItem,
  FooterText,
} from './styles';

export default function Footer() {
  return (
    // <FooterContainer className="main-footer">
    //   <div className="footer-middle">
    //     <div className="container">
    //       <div className="row">
    //         {/* Column 1 */}
    //         <div className="col-md-3 col-sm-6">
    //           <h4>Lorem ipsum</h4>
    //           <ul className="list-unstyled">
    //             <li>Lorem ipsum</li>
    //             <li>Lorem ipsum</li>
    //             <li>Lorem ipsum</li>
    //             <li>Lorem ipsum</li>
    //           </ul>
    //         </div>

    //         {/* Column 2 */}
    //         <div className="col-md-3 col-sm-6">
    //           <h4>Lorem ipsum</h4>
    //           <ul className="list-unstyled">
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //           </ul>
    //         </div>

    //         {/* Column 3 */}
    //         <div className="col-md-3 col-sm-6">
    //           <h4>Lorem ipsum</h4>
    //           <ul className="list-unstyled">
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //           </ul>
    //         </div>

    //         {/* Column 4 */}
    //         <div className="col-md-3 col-sm-6">
    //           <h4>Lorem ipsum</h4>
    //           <ul className="list-unstyled">
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //             <li>
    //               <a href="/">Lorem ipsum</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       {/* Footer Bottom */}
    //       <div className="footer-bottom">
    //         <p className="text-xs-center">
    //           &copy;{new Date().getFullYear()} City Guide App - All Rights
    //           Reserved
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </FooterContainer>
    <Container>
      <ColumnList>
        <ColumnContainer>
          <ColumnTitle>Lorem Ipsum</ColumnTitle>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
        </ColumnContainer>
        <ColumnContainer>
          <ColumnTitle>Lorem Ipsum</ColumnTitle>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
        </ColumnContainer>
        <ColumnContainer>
          <ColumnTitle>Lorem Ipsum</ColumnTitle>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
        </ColumnContainer>
        <ColumnContainer>
          <ColumnTitle>Lorem Ipsum</ColumnTitle>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
          <ColumnItem to="/">Lorem Ipsum</ColumnItem>
        </ColumnContainer>
      </ColumnList>
      <FooterText>©2020 City Guide App - All Rights Reserved</FooterText>
    </Container>
  );
}
