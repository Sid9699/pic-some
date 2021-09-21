import React from "react";

export const MainContent: React.FC = (props) => {
    return <main data-testid="ps-main-content">{props.children}</main>;
}