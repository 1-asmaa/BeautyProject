import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideComponent } from './Shared/side/side.component';
import { HeaderComponent } from './Shared/header/header.component';
import { DashboardComponent } from './PagesDashboard/dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CouponmanagementpageComponent } from './PagesDashboard/couponmanagementpage/couponmanagementpage.component';
import { CitymanagementpageComponent } from './PagesDashboard/citymanagementpage/citymanagementpage.component';
import { UsermanagementpageComponent } from './PagesDashboard/usermanagementpage/usermanagementpage.component';
import { CommentandratingpageComponent } from './PagesDashboard/commentandratingpage/commentandratingpage.component';
import { BeautProviderManagementpageComponent } from './PagesDashboard/beaut-provider-managementpage/beaut-provider-managementpage.component';
import { OrdersManagementspageComponent } from './PagesDashboard/orders-managementspage/orders-managementspage.component';
import { CategoriesManagementpageComponent } from './PagesDashboard/categories-managementpage/categories-managementpage.component';
import { ServicesManagementpageComponent } from './PagesDashboard/services-managementpage/services-managementpage.component';
import { AuthInterceptor } from 'src/Guards/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCityComponent } from './EditDashboard/edit-city/edit-city.component';
import { EditUserComponent } from './EditDashboard/edit-user/edit-user.component';
import { EdituserStatusComponent } from './EditDashboard/edituser-status/edituser-status.component';
import { BeautproviderComponent } from './PagesDashboard/beautprovider/beautprovider.component';
import { NewbeautproviderComponent } from './PagesDashboard/newbeautprovider/newbeautprovider.component';
import { ProvidercalendarComponent } from './PagesDashboard/providercalendar/providercalendar.component';
import { EditorderComponent } from './EditDashboard/editorder/editorder.component';
import { EditcategoryComponent } from './EditDashboard/editcategory/editcategory.component';
import { EditcouponComponent } from './EditDashboard/editcoupon/editcoupon.component';
import { ViewCouponComponent } from './ViewDetails/view-coupon/view-coupon.component';
import { ViewCityComponent } from './ViewDetails/view-city/view-city.component';
import { ViewBeautComponent } from './ViewDetails/view-beaut/view-beaut.component';
import { EditOrderStatusComponent } from './EditDashboard/edit-order-status/edit-order-status.component';
import { ViewOrderComponent } from './ViewDetails/view-order/view-order.component';
import { EditServiceComponent } from './EditDashboard/edit-service/edit-service.component';


@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    HeaderComponent,
    DashboardComponent,
    LoginpageComponent,
    CouponmanagementpageComponent,
    CitymanagementpageComponent,
    UsermanagementpageComponent,
    CommentandratingpageComponent,
    BeautProviderManagementpageComponent,
    OrdersManagementspageComponent,
    CategoriesManagementpageComponent,
    ServicesManagementpageComponent,
    EditCityComponent,
    EditUserComponent,
    EdituserStatusComponent,
    BeautproviderComponent,
    NewbeautproviderComponent,
    ProvidercalendarComponent,
    EditorderComponent,
    EditcategoryComponent,
    EditcouponComponent,
    ViewCouponComponent,
    ViewCityComponent,
    ViewBeautComponent,
    EditOrderStatusComponent,
    ViewOrderComponent,
    EditServiceComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
