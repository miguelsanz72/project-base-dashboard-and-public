import { TooltipPosition } from '@angular/material/tooltip';

export class SidebarModel {
    matTooltip: string;
    matTooltipPosition: TooltipPosition;
    routerLink: string[];
    routerLinkActive: string;
    class: string;
    icon: string;

    constructor(data: SidebarModel) {
        data = data || {};

        this.matTooltip = data.matTooltip || '';
        this.matTooltipPosition = data.matTooltipPosition || 'above';
        this.routerLink = data.routerLink || [];
        this.routerLinkActive = 'active';
        this.class = data.class || 'content-icon-menu';
        this.icon = data.icon || 'dashboard';
    }
}

export enum ToolTipPosition {
    Left = 'left',
    Right = 'right',
    Above = 'above',
    Below = 'below',
    Before = 'before',
    After = 'after',
}
