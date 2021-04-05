import { TooltipPosition } from '@angular/material/tooltip';

export interface SidebarModel {
    matTooltip: string;
    matTooltipPosition: TooltipPosition;
    routerLink: string[];
    routerLinkActive: string;
    class: string;
    icon: string;
    title: string;
}

export enum ToolTipPosition {
    Left = 'left',
    Right = 'right',
    Above = 'above',
    Below = 'below',
    Before = 'before',
    After = 'after',
}
