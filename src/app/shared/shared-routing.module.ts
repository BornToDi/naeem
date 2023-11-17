import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrmComponent } from './dashboard/crm/crm.component';
import { HrmComponent } from './dashboard/hrm/hrm.component';
import { EcommerceComponent } from './dashboard/ecommerce/ecommerce.component';
import { CalenderComponent } from './apps/calender/calender.component';
import { ChatComponent } from './apps/chat/chat.component';
import { EmailComponent } from './apps/email/email.component';
import { EmailTemplatesComponent } from './apps/email-templates/email-templates.component';
import { InvoiceComponent } from './apps/invoice/invoice.component';
import { ContactComponent } from './apps/contact/contact.component';
import { AuthenticationsComponent } from './pages/authentications/authentications.component';
import { ErrorsPagesComponent } from './pages/errors-pages/errors-pages.component';
import { UsersComponent } from './pages/users/users.component';
import { AdditionalsComponent } from './pages/additionals/additionals.component';
import { UtilityComponent } from './pages/utility/utility.component';
import { AdvanceUIComponent } from './components/advance-ui/advance-ui.component';
import { FormsComponent } from './components/forms/forms.component';
import { TablesComponent } from './components/tables/tables.component';
import { ChartsComponent } from './components/charts/charts.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { FileManagersComponent } from './components/file-managers/file-managers.component';
import { MultiplesLevelsComponent } from './components/multiples-levels/multiples-levels.component';
import { TergetAudienceComponent } from './apps/crm/terget-audience/terget-audience.component';
import { CompanyComponent } from './apps/crm/company/company.component';
import { TasksComponent } from './apps/crm/tasks/tasks.component';
import { LeadsComponent } from './apps/crm/leads/leads.component';
import { CustomersComponent } from './apps/crm/customers/customers.component';
import { AddEmployeesComponent } from './apps/hrm/add-employees/add-employees.component';
import { AllEmployeesComponent } from './apps/hrm/all-employees/all-employees.component';
import { AttendenceComponent } from './apps/hrm/attendence/attendence.component';
import { AllCustomersComponent } from './apps/ecommerce/all-customers/all-customers.component';
import { AddProductsComponent } from './apps/ecommerce/add-products/add-products.component';
import { AllProductsComponent } from './apps/ecommerce/all-products/all-products.component';
import { CategoryComponent } from './apps/ecommerce/category/category.component';
import { OthersComponent } from './apps/ecommerce/others/others.component';
import { CardDecliendComponent } from './apps/email-templates/card-decliend/card-decliend.component';
import { PromotionalsComponent } from './apps/email-templates/promotionals/promotionals.component';
import { SubscriptionConfirmComponent } from './apps/email-templates/subscription-confirm/subscription-confirm.component';
import { WelcomeComponent } from './apps/email-templates/welcome/welcome.component';
import { ResetPasswordsComponent } from './apps/email-templates/reset-passwords/reset-passwords.component';
import { LoginOneComponent } from './pages/authentications/login-one/login-one.component';
import { LoginTwoComponent } from './pages/authentications/login-two/login-two.component';
import { LoginThreeComponent } from './pages/authentications/login-three/login-three.component';
import { RegistrationOneComponent } from './pages/authentications/registration-one/registration-one.component';
import { RegistrationTwoComponent } from './pages/authentications/registration-two/registration-two.component';
import { ResetPasswordComponent } from './pages/authentications/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './pages/authentications/update-password/update-password.component';
import { LoginStatusComponent } from './pages/authentications/login-status/login-status.component';
import { AccountDecativateComponent } from './pages/authentications/account-decativate/account-decativate.component';
import { VerifyEmailComponent } from './pages/authentications/verify-email/verify-email.component';
import { TwoFactorVerificationsComponent } from './pages/authentications/two-factor-verifications/two-factor-verifications.component';
import { MultiStepSignupComponent } from './pages/authentications/multi-step-signup/multi-step-signup.component';
import { ErrorOneComponent } from './pages/errors-pages/error-one/error-one.component';
import { ErrorTwoComponent } from './pages/errors-pages/error-two/error-two.component';
import { ErrorThreeComponent } from './pages/errors-pages/error-three/error-three.component';
import { ErrorFourComponent } from './pages/errors-pages/error-four/error-four.component';
import { ErrorFiveComponent } from './pages/errors-pages/error-five/error-five.component';
import { ErrorSixComponent } from './pages/errors-pages/error-six/error-six.component';
import { ErrorSevenComponent } from './pages/errors-pages/error-seven/error-seven.component';
import { ViewProfileComponent } from './pages/users/view-profile/view-profile.component';
import { EditProfileComponent } from './pages/users/edit-profile/edit-profile.component';
import { ComingSoonOneComponent } from './pages/additionals/coming-soon-one/coming-soon-one.component';
import { ComingSoonTwoComponent } from './pages/additionals/coming-soon-two/coming-soon-two.component';
import { ComingSoonThreeComponent } from './pages/additionals/coming-soon-three/coming-soon-three.component';
import { PricingTableOneComponent } from './pages/additionals/pricing-table-one/pricing-table-one.component';
import { PricingTableTwoComponent } from './pages/additionals/pricing-table-two/pricing-table-two.component';
import { UnderConstructionsComponent } from './pages/additionals/under-constructions/under-constructions.component';
import { SweetAlertComponent } from './components/advance-ui/sweet-alert/sweet-alert.component';
import { NesTableListComponent } from './components/advance-ui/nes-table-list/nes-table-list.component';
import { AnimationsComponent } from './components/advance-ui/animations/animations.component';
import { SwiperSliderComponent } from './components/advance-ui/swiper-slider/swiper-slider.component';
import { LevelOneComponent } from './components/multiples-levels/level-one/level-one.component';
import { LevelTwoComponent } from './components/multiples-levels/level-two/level-two.component';
import { LevelThreeComponent } from './components/multiples-levels/level-three/level-three.component';
import { LevelFourComponent } from './components/multiples-levels/level-four/level-four.component';
import { LevelFiveComponent } from './components/multiples-levels/level-five/level-five.component';
import { LevelTwoOneComponent } from './components/multiples-levels/level-two/level-two-one/level-two-one.component';
import { LevelTwoTwoComponent } from './components/multiples-levels/level-two/level-two-two/level-two-two.component';
import { LevelTwoThreeComponent } from './components/multiples-levels/level-two/level-two-three/level-two-three.component';
import { LevelTwoFourComponent } from './components/multiples-levels/level-two/level-two-four/level-two-four.component';
import { LevelTwoThreeOneComponent } from './components/multiples-levels/level-two/level-two-three/level-two-three-one/level-two-three-one.component';
import { LevelTwoThreeTwoComponent } from './components/multiples-levels/level-two/level-two-three/level-two-three-two/level-two-three-two.component';
import { LevelTwoThreeThreeComponent } from './components/multiples-levels/level-two/level-two-three/level-two-three-three/level-two-three-three.component';
import { LevelTwoThreeFourComponent } from './components/multiples-levels/level-two/level-two-three/level-two-three-four/level-two-three-four.component';


const routes: Routes = [
  {
    path: 'crm',
    component: CrmComponent,
  },
  {
    path: 'crm/target-audience',
    component: TergetAudienceComponent,
  },
  {
    path: 'crm/company',
    component: CompanyComponent,
  },
  {
    path: 'crm/tasks',
    component: TasksComponent,
  },
  {
    path: 'crm/leads',
    component: LeadsComponent,
  },
  {
    path: 'crm/customers',
    component: CustomersComponent,
  },
  {
    path: 'hrm',
    component: HrmComponent,
  },
  {
    path: 'hrm/add-employees',
    component: AddEmployeesComponent,
  },
  {
    path: 'hrm/all-employees',
    component: AllEmployeesComponent,
  },
  {
    path: 'hrm/attendence',
    component: AttendenceComponent,
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent,
  },
  {
    path: 'ecommerce/all-customers',
    component: AllCustomersComponent,
  },
  {
    path: 'ecommerce/add-products',
    component: AddProductsComponent,
  },
  {
    path: 'ecommerce/all-products',
    component: AllProductsComponent,
  },
  {
    path: 'ecommerce/category',
    component: CategoryComponent,
  },
  {
    path: 'ecommerce/others',
    component: OthersComponent,
  },
  {
    path: 'calender',
    component: CalenderComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'email',
    component: EmailComponent,
  },
  {
    path: 'email/card-decliend',
    component: CardDecliendComponent,
  },
  {
    path: 'email/promotionals',
    component: PromotionalsComponent,
  },
  {
    path: 'email/subscription-confirm',
    component: SubscriptionConfirmComponent,
  },
  {
    path: 'email/welcome',
    component: WelcomeComponent,
  },
  {
    path: 'email/reset-passwords',
    component: ResetPasswordsComponent,
  },
  {
    path: 'email-templates',
    component: EmailTemplatesComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'authentications',
    component: AuthenticationsComponent,
  },
  {
    path: 'authentications/login-one',
    component: LoginOneComponent,
  },
  {
    path: 'authentications/login-two',
    component: LoginTwoComponent,
  },
  {
    path: 'authentications/login-three',
    component: LoginThreeComponent,
  },
  {
    path: 'authentications/registration-one',
    component: RegistrationOneComponent,
  },
  {
    path: 'authentications/registration-two',
    component: RegistrationTwoComponent,
  },
  {
    path: 'authentications/reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'authentications/update-password',
    component: UpdatePasswordComponent,
  },
  {
    path: 'authentications/login-status',
    component: LoginStatusComponent,
  },
  {
    path: 'authentications/account-decativate',
    component: AccountDecativateComponent,
  },
  {
    path: 'authentications/verify-email',
    component: VerifyEmailComponent,
  },
  {
    path: 'authentications/two-factor-verifications',
    component: TwoFactorVerificationsComponent,
  },
  {
    path: 'authentications/multi-step-signup',
    component: MultiStepSignupComponent,
  },
  {
    path: 'errors-pages',
    component: ErrorsPagesComponent,
  },
  {
    path: 'errors-pages/error-one',
    component: ErrorOneComponent,
  },
  {
    path: 'errors-pages/error-two',
    component: ErrorTwoComponent,
  },
  {
    path: 'errors-pages/error-three',
    component: ErrorThreeComponent,
  },
  {
    path: 'errors-pages/error-four',
    component: ErrorFourComponent,
  },
  {
    path: 'errors-pages/error-five',
    component: ErrorFiveComponent,
  },
  {
    path: 'errors-pages/error-six',
    component: ErrorSixComponent,
  },
  {
    path: 'errors-pages/error-seven',
    component: ErrorSevenComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/view-profile',
    component: ViewProfileComponent,
  },
  {
    path: 'users/edit-profile',
    component: EditProfileComponent,
  },
  {
    path: 'additionals',
    component: AdditionalsComponent,
  },
  {
    path: 'additionals/coming-soon-one',
    component: ComingSoonOneComponent,
  },
  {
    path: 'additionals/coming-soon-two',
    component: ComingSoonTwoComponent,
  },
  {
    path: 'additionals/coming-soon-three',
    component: ComingSoonThreeComponent,
  },
  {
    path: 'additionals/pricing-table-one',
    component: PricingTableOneComponent,
  },
  {
    path: 'additionals/pricing-table-two',
    component: PricingTableTwoComponent,
  },
  {
    path: 'additionals/under-constructions',
    component: UnderConstructionsComponent,
  },
  {
    path: 'utility',
    component: UtilityComponent,
  },
  {
    path: 'advance-ui',
    component: AdvanceUIComponent,
  },
  {
    path: 'advance-ui/sweet-alert',
    component: SweetAlertComponent,
  },
  {
    path: 'advance-ui/nes-table-list',
    component: NesTableListComponent,
  },
  {
    path: 'advance-ui/animations',
    component: AnimationsComponent,
  },
  {
    path: 'advance-ui/swiper-slider',
    component: SwiperSliderComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'tables',
    component: TablesComponent,
  },
  {
    path: 'charts',
    component: ChartsComponent,
  },
  {
    path: 'icons',
    component: IconsComponent,
  },
  {
    path: 'maps',
    component: MapsComponent,
  },
  {
    path: 'file-managers',
    component: FileManagersComponent,
  },
  {
    path: 'multiples-levels',
    component: MultiplesLevelsComponent,
  },
  {
    path: 'multiples-levels/level-one',
    component: LevelOneComponent,
  },
  {
    path: 'multiples-levels/level-two',
    component: LevelTwoComponent,
  },
  {
    path: 'multiples-levels/level-three',
    component: LevelThreeComponent,
  },
  {
    path: 'multiples-levels/level-four',
    component: LevelFourComponent,
  },
  {
    path: 'multiples-levels/level-five',
    component: LevelFiveComponent,
  },
  {
    path: 'multiples-levels/level-two/level-two-one',
    component: LevelTwoOneComponent,
  },
  {
    path: 'multiples-levels/level-two/level-two-two',
    component: LevelTwoTwoComponent,
  },
  {
    path: 'multiples-levels/level-two/level-two-three',
    component: LevelTwoThreeComponent,
  },
  {
    path: 'multiples-levels/level-two/level-two-four',
    component: LevelTwoFourComponent,
  },
  {
    path: 'multiples-levels/level-two/level-two-three/level-two-three-one',
    component: LevelTwoThreeOneComponent,
  },
  {
    path: 'multiples-levels/level-two/level-two-three/level-two-three-two',
    component: LevelTwoThreeTwoComponent,
  },
  {
    path: 'multiples-levels/level-two/level-two-three/level-two-three-three',
    component: LevelTwoThreeThreeComponent,
  },
  {
    path: 'multiples-levels/level-two/level-two-three/level-two-three-four',
    component: LevelTwoThreeFourComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ]
})
export class SharedRoutingModule { }
