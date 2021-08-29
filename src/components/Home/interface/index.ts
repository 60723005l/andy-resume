import React, {ComponentType} from "react";
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { History } from 'history';

export interface SidebarItem {
    icon: ComponentType<SvgIconProps>;
    title: string,
    action: (history: History) => void
}