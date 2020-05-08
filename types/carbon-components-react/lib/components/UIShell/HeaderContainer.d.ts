import * as React from "react";
import { FunctionComponentReturn } from "../../../typings/shared";

export interface HeaderContainerRenderProps {
    isSideNavExpanded: boolean,
    onClickSideNavExpand(): void;
}

export interface HeaderContainerProps<RenderProps = HeaderContainerRenderProps> {
    isSideNavExpanded?: boolean,
    render: React.ComponentType<RenderProps>,
}

declare function HeaderContainer<RenderProps = HeaderContainerRenderProps>(props: HeaderContainerProps<RenderProps>): FunctionComponentReturn;

export default HeaderContainer;
