import React from "react";
import './menu-item.styles.scss'
import { withRouter } from "react-router-dom";
import { MenuItemContainer, BackgroundImageContainer, ContentTitle, ContentSubtitle, ContentContainer } from './menu-item.styles'
const MenuItem = ({ id, title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer imageUrl={imageUrl} />
    <ContentContainer >
      <ContentTitle >{title}</ContentTitle>
      <ContentSubtitle >SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
