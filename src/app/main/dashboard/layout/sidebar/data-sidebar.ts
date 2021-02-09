import { ToolTipPosition } from '@theme/models/sidebar.model';

export const dataSidebar = [
    {
        matTooltip: 'SIDEBAR.NAV.DASHBOARD.TITLE',
        matTooltipPosition: ToolTipPosition.Right,
        routerLinkActive: 'active',
        routerLink: ['/dashboard/enterprise'],
        class: 'content-icon-menu py-1',
        icon: 'dashboard',
    },
    {
        matTooltip: 'SIDEBAR.NAV.CALENDAR.TITLE',
        matTooltipPosition: ToolTipPosition.Right,
        routerLinkActive: 'active',
        routerLink: ['/dashboard/apps/calendar'],
        class: 'content-icon-menu py-1',
        icon: 'today',
    },
    {
        matTooltip: 'SIDEBAR.NAV.PROJECT.TITLE',
        matTooltipPosition: ToolTipPosition.Right,
        routerLinkActive: 'active',
        routerLink: ['/dashboard/pages/projects'],
        class: 'content-icon-menu py-1',
        icon: 'assessment',
    },
    {
        matTooltip: 'SIDEBAR.NAV.TIMERS.TITLE',
        matTooltipPosition: ToolTipPosition.Right,
        routerLinkActive: 'active',
        routerLink: ['/dashboard/pages/timers'],
        class: 'content-icon-menu py-1',
        icon: 'hourglass_empty',
    },
    {
        matTooltip: 'SIDEBAR.NAV.USERS.TITLE',
        matTooltipPosition: ToolTipPosition.Right,
        routerLinkActive: 'active',
        routerLink: ['/dashboard/pages/clients'],
        class: 'content-icon-menu py-1',
        icon: 'person',
    },
    {
        matTooltip: 'SIDEBAR.NAV.REPORTS.TITLE',
        matTooltipPosition: ToolTipPosition.Right,
        routerLinkActive: 'active',
        routerLink: ['/dashboard/pages/reports'],
        class: 'content-icon-menu py-1',
        icon: 'assignment',
    },
];
