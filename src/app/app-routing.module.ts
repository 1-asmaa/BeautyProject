import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/Guards/auth.guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { BeautProviderManagementpageComponent } from './PagesDashboard/beaut-provider-managementpage/beaut-provider-managementpage.component';
import { BeautproviderComponent } from './PagesDashboard/beautprovider/beautprovider.component';
import { CategoriesManagementpageComponent } from './PagesDashboard/categories-managementpage/categories-managementpage.component';
import { CitymanagementpageComponent } from './PagesDashboard/citymanagementpage/citymanagementpage.component';
import { CommentandratingpageComponent } from './PagesDashboard/commentandratingpage/commentandratingpage.component';
import { CouponmanagementpageComponent } from './PagesDashboard/couponmanagementpage/couponmanagementpage.component';
import { DashboardComponent } from './PagesDashboard/dashboard/dashboard.component';
import { NewbeautproviderComponent } from './PagesDashboard/newbeautprovider/newbeautprovider.component';
import { OrdersManagementspageComponent } from './PagesDashboard/orders-managementspage/orders-managementspage.component';
import { ProvidercalendarComponent } from './PagesDashboard/providercalendar/providercalendar.component';
import { ServicesManagementpageComponent } from './PagesDashboard/services-managementpage/services-managementpage.component';
import { UsermanagementpageComponent } from './PagesDashboard/usermanagementpage/usermanagementpage.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent },
  { path: 'beauty/Dashboard', component: DashboardComponent ,canActivate : [AuthGuard]},
  { path: 'beauty/couponmanagement', component:CouponmanagementpageComponent ,canActivate : [AuthGuard]},
  { path: 'beauty/citymanagement', component: CitymanagementpageComponent ,canActivate : [AuthGuard]},
  { path: 'beauty/usermanagement', component: UsermanagementpageComponent ,canActivate : [AuthGuard]},
  { path: 'beauty/commentsandrating', component: CommentandratingpageComponent,canActivate : [AuthGuard] },
  { path: 'beauty/beautprovidermanagement', component: BeautProviderManagementpageComponent,canActivate : [AuthGuard] },
  { path: 'beauty/ordersmanagements', component: OrdersManagementspageComponent,canActivate : [AuthGuard] },
  { path: 'beauty/categoriesmanagement', component: CategoriesManagementpageComponent ,canActivate : [AuthGuard]},
  { path: 'beauty/servicesmanagement', component: ServicesManagementpageComponent ,canActivate : [AuthGuard]},
  { path: 'beauty/beautprovider', component: BeautproviderComponent,canActivate : [AuthGuard]},
  { path: 'beauty/newbeautprovider', component: NewbeautproviderComponent,canActivate : [AuthGuard]},
  { path: 'beauty/providercalendar', component: ProvidercalendarComponent,canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
