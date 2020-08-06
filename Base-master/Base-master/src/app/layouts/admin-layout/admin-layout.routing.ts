import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { Db1Component } from '../../db1/db1.component';
import { Db2Component } from '../../db2/db2.component';
import { EventsRegComponent } from '../../events-reg/events-reg.component';
import { EventslistComponent } from '../../eventslist/eventslist.component';
import { EventDetailsComponent } from '../../event-details/event-details.component';
import { EventUpdateComponent } from '../../event-update/event-update.component';
import { RegisterComponent } from '../../register/register.component'

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    //{ path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
	{ path: 'rpa', component: Db1Component },
    { path: 'vr', component: Db2Component },
    { path: 'events-reg', component: EventsRegComponent },
    { path: 'events', component: EventslistComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: 'events/:id/update', component: EventUpdateComponent },
    { path: 'register', component: RegisterComponent },
    //{ path: 'typography',     component: TypographyComponent },
    //{ path: 'icons',          component: IconsComponent },
    //{ path: 'maps',           component: MapsComponent },
    //{ path: 'notifications',  component: NotificationsComponent },
    //{ path: 'upgrade',        component: UpgradeComponent },
];
