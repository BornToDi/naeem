# DigiboardAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


├─ package-lock.json
├─ package.json
├─ src
│  ├─ app
│  │  ├─ app-routing.module.ts
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  └─ shared
│  │     ├─ apps
│  │     │  ├─ calender
│  │     │  │  ├─ calender.component.html
│  │     │  │  ├─ calender.component.scss
│  │     │  │  ├─ calender.component.spec.ts
│  │     │  │  └─ calender.component.ts
│  │     │  ├─ chat
│  │     │  │  ├─ chat.component.html
│  │     │  │  ├─ chat.component.scss
│  │     │  │  ├─ chat.component.spec.ts
│  │     │  │  └─ chat.component.ts
│  │     │  ├─ contact
│  │     │  │  ├─ contact.component.html
│  │     │  │  ├─ contact.component.scss
│  │     │  │  ├─ contact.component.spec.ts
│  │     │  │  └─ contact.component.ts
│  │     │  ├─ crm
│  │     │  │  ├─ company
│  │     │  │  │  ├─ company.component.html
│  │     │  │  │  ├─ company.component.scss
│  │     │  │  │  ├─ company.component.spec.ts
│  │     │  │  │  └─ company.component.ts
│  │     │  │  ├─ crm.component.html
│  │     │  │  ├─ crm.component.scss
│  │     │  │  ├─ crm.component.spec.ts
│  │     │  │  ├─ crm.component.ts
│  │     │  │  ├─ customers
│  │     │  │  │  ├─ customers.component.html
│  │     │  │  │  ├─ customers.component.scss
│  │     │  │  │  ├─ customers.component.spec.ts
│  │     │  │  │  └─ customers.component.ts
│  │     │  │  ├─ leads
│  │     │  │  │  ├─ leads.component.html
│  │     │  │  │  ├─ leads.component.scss
│  │     │  │  │  ├─ leads.component.spec.ts
│  │     │  │  │  └─ leads.component.ts
│  │     │  │  ├─ tasks
│  │     │  │  │  ├─ tasks.component.html
│  │     │  │  │  ├─ tasks.component.scss
│  │     │  │  │  ├─ tasks.component.spec.ts
│  │     │  │  │  └─ tasks.component.ts
│  │     │  │  └─ terget-audience
│  │     │  │     ├─ terget-audience.component.html
│  │     │  │     ├─ terget-audience.component.scss
│  │     │  │     ├─ terget-audience.component.spec.ts
│  │     │  │     └─ terget-audience.component.ts
│  │     │  ├─ ecommerce
│  │     │  │  ├─ add-products
│  │     │  │  │  ├─ add-products.component.html
│  │     │  │  │  ├─ add-products.component.scss
│  │     │  │  │  ├─ add-products.component.spec.ts
│  │     │  │  │  └─ add-products.component.ts
│  │     │  │  ├─ all-customers
│  │     │  │  │  ├─ all-customers.component.html
│  │     │  │  │  ├─ all-customers.component.scss
│  │     │  │  │  ├─ all-customers.component.spec.ts
│  │     │  │  │  └─ all-customers.component.ts
│  │     │  │  ├─ all-products
│  │     │  │  │  ├─ all-products.component.html
│  │     │  │  │  ├─ all-products.component.scss
│  │     │  │  │  ├─ all-products.component.spec.ts
│  │     │  │  │  └─ all-products.component.ts
│  │     │  │  ├─ category
│  │     │  │  │  ├─ category.component.html
│  │     │  │  │  ├─ category.component.scss
│  │     │  │  │  ├─ category.component.spec.ts
│  │     │  │  │  └─ category.component.ts
│  │     │  │  ├─ ecommerce.component.html
│  │     │  │  ├─ ecommerce.component.scss
│  │     │  │  ├─ ecommerce.component.spec.ts
│  │     │  │  ├─ ecommerce.component.ts
│  │     │  │  └─ others
│  │     │  │     ├─ others.component.html
│  │     │  │     ├─ others.component.scss
│  │     │  │     ├─ others.component.spec.ts
│  │     │  │     └─ others.component.ts
│  │     │  ├─ email
│  │     │  │  ├─ email.component.html
│  │     │  │  ├─ email.component.scss
│  │     │  │  ├─ email.component.spec.ts
│  │     │  │  └─ email.component.ts
│  │     │  ├─ email-templates
│  │     │  │  ├─ card-decliend
│  │     │  │  │  ├─ card-decliend.component.html
│  │     │  │  │  ├─ card-decliend.component.scss
│  │     │  │  │  ├─ card-decliend.component.spec.ts
│  │     │  │  │  └─ card-decliend.component.ts
│  │     │  │  ├─ email-templates.component.html
│  │     │  │  ├─ email-templates.component.scss
│  │     │  │  ├─ email-templates.component.spec.ts
│  │     │  │  ├─ email-templates.component.ts
│  │     │  │  ├─ promotionals
│  │     │  │  │  ├─ promotionals.component.html
│  │     │  │  │  ├─ promotionals.component.scss
│  │     │  │  │  ├─ promotionals.component.spec.ts
│  │     │  │  │  └─ promotionals.component.ts
│  │     │  │  ├─ reset-passwords
│  │     │  │  │  ├─ reset-passwords.component.html
│  │     │  │  │  ├─ reset-passwords.component.scss
│  │     │  │  │  ├─ reset-passwords.component.spec.ts
│  │     │  │  │  └─ reset-passwords.component.ts
│  │     │  │  ├─ subscription-confirm
│  │     │  │  │  ├─ subscription-confirm.component.html
│  │     │  │  │  ├─ subscription-confirm.component.scss
│  │     │  │  │  ├─ subscription-confirm.component.spec.ts
│  │     │  │  │  └─ subscription-confirm.component.ts
│  │     │  │  └─ welcome
│  │     │  │     ├─ welcome.component.html
│  │     │  │     ├─ welcome.component.scss
│  │     │  │     ├─ welcome.component.spec.ts
│  │     │  │     └─ welcome.component.ts
│  │     │  ├─ hrm
│  │     │  │  ├─ add-employees
│  │     │  │  │  ├─ add-employees.component.html
│  │     │  │  │  ├─ add-employees.component.scss
│  │     │  │  │  ├─ add-employees.component.spec.ts
│  │     │  │  │  └─ add-employees.component.ts
│  │     │  │  ├─ all-employees
│  │     │  │  │  ├─ all-employees.component.html
│  │     │  │  │  ├─ all-employees.component.scss
│  │     │  │  │  ├─ all-employees.component.spec.ts
│  │     │  │  │  └─ all-employees.component.ts
│  │     │  │  ├─ attendence
│  │     │  │  │  ├─ attendence.component.html
│  │     │  │  │  ├─ attendence.component.scss
│  │     │  │  │  ├─ attendence.component.spec.ts
│  │     │  │  │  └─ attendence.component.ts
│  │     │  │  ├─ hrm.component.html
│  │     │  │  ├─ hrm.component.scss
│  │     │  │  ├─ hrm.component.spec.ts
│  │     │  │  └─ hrm.component.ts
│  │     │  └─ invoice
│  │     │     ├─ invoice.component.html
│  │     │     ├─ invoice.component.scss
│  │     │     ├─ invoice.component.spec.ts
│  │     │     └─ invoice.component.ts
│  │     ├─ components
│  │     │  ├─ advance-ui
│  │     │  │  ├─ advance-ui.component.html
│  │     │  │  ├─ advance-ui.component.scss
│  │     │  │  ├─ advance-ui.component.spec.ts
│  │     │  │  ├─ advance-ui.component.ts
│  │     │  │  ├─ animations
│  │     │  │  │  ├─ animations.component.html
│  │     │  │  │  ├─ animations.component.scss
│  │     │  │  │  ├─ animations.component.spec.ts
│  │     │  │  │  └─ animations.component.ts
│  │     │  │  ├─ nes-table-list
│  │     │  │  │  ├─ nes-table-list.component.html
│  │     │  │  │  ├─ nes-table-list.component.scss
│  │     │  │  │  ├─ nes-table-list.component.spec.ts
│  │     │  │  │  └─ nes-table-list.component.ts
│  │     │  │  ├─ sweet-alert
│  │     │  │  │  ├─ sweet-alert.component.html
│  │     │  │  │  ├─ sweet-alert.component.scss
│  │     │  │  │  ├─ sweet-alert.component.spec.ts
│  │     │  │  │  └─ sweet-alert.component.ts
│  │     │  │  └─ swiper-slider
│  │     │  │     ├─ swiper-slider.component.html
│  │     │  │     ├─ swiper-slider.component.scss
│  │     │  │     ├─ swiper-slider.component.spec.ts
│  │     │  │     └─ swiper-slider.component.ts
│  │     │  ├─ charts
│  │     │  │  ├─ charts.component.html
│  │     │  │  ├─ charts.component.scss
│  │     │  │  ├─ charts.component.spec.ts
│  │     │  │  └─ charts.component.ts
│  │     │  ├─ file-managers
│  │     │  │  ├─ file-managers.component.html
│  │     │  │  ├─ file-managers.component.scss
│  │     │  │  ├─ file-managers.component.spec.ts
│  │     │  │  └─ file-managers.component.ts
│  │     │  ├─ forms
│  │     │  │  ├─ forms.component.html
│  │     │  │  ├─ forms.component.scss
│  │     │  │  ├─ forms.component.spec.ts
│  │     │  │  └─ forms.component.ts
│  │     │  ├─ icons
│  │     │  │  ├─ icons.component.html
│  │     │  │  ├─ icons.component.scss
│  │     │  │  ├─ icons.component.spec.ts
│  │     │  │  └─ icons.component.ts
│  │     │  ├─ maps
│  │     │  │  ├─ maps.component.html
│  │     │  │  ├─ maps.component.scss
│  │     │  │  ├─ maps.component.spec.ts
│  │     │  │  └─ maps.component.ts
│  │     │  ├─ multiples-levels
│  │     │  │  ├─ level-five
│  │     │  │  │  ├─ level-five.component.html
│  │     │  │  │  ├─ level-five.component.scss
│  │     │  │  │  ├─ level-five.component.spec.ts
│  │     │  │  │  └─ level-five.component.ts
│  │     │  │  ├─ level-four
│  │     │  │  │  ├─ level-four.component.html
│  │     │  │  │  ├─ level-four.component.scss
│  │     │  │  │  ├─ level-four.component.spec.ts
│  │     │  │  │  └─ level-four.component.ts
│  │     │  │  ├─ level-one
│  │     │  │  │  ├─ level-one.component.html
│  │     │  │  │  ├─ level-one.component.scss
│  │     │  │  │  ├─ level-one.component.spec.ts
│  │     │  │  │  └─ level-one.component.ts
│  │     │  │  ├─ level-three
│  │     │  │  │  ├─ level-three.component.html
│  │     │  │  │  ├─ level-three.component.scss
│  │     │  │  │  ├─ level-three.component.spec.ts
│  │     │  │  │  └─ level-three.component.ts
│  │     │  │  ├─ level-two
│  │     │  │  │  ├─ level-two-four
│  │     │  │  │  │  ├─ level-two-four.component.html
│  │     │  │  │  │  ├─ level-two-four.component.scss
│  │     │  │  │  │  ├─ level-two-four.component.spec.ts
│  │     │  │  │  │  └─ level-two-four.component.ts
│  │     │  │  │  ├─ level-two-one
│  │     │  │  │  │  ├─ level-two-one.component.html
│  │     │  │  │  │  ├─ level-two-one.component.scss
│  │     │  │  │  │  ├─ level-two-one.component.spec.ts
│  │     │  │  │  │  └─ level-two-one.component.ts
│  │     │  │  │  ├─ level-two-three
│  │     │  │  │  │  ├─ level-two-three-four
│  │     │  │  │  │  │  ├─ level-two-three-four.component.html
│  │     │  │  │  │  │  ├─ level-two-three-four.component.scss
│  │     │  │  │  │  │  ├─ level-two-three-four.component.spec.ts
│  │     │  │  │  │  │  └─ level-two-three-four.component.ts
│  │     │  │  │  │  ├─ level-two-three-one
│  │     │  │  │  │  │  ├─ level-two-three-one.component.html
│  │     │  │  │  │  │  ├─ level-two-three-one.component.scss
│  │     │  │  │  │  │  ├─ level-two-three-one.component.spec.ts
│  │     │  │  │  │  │  └─ level-two-three-one.component.ts
│  │     │  │  │  │  ├─ level-two-three-three
│  │     │  │  │  │  │  ├─ level-two-three-three.component.html
│  │     │  │  │  │  │  ├─ level-two-three-three.component.scss
│  │     │  │  │  │  │  ├─ level-two-three-three.component.spec.ts
│  │     │  │  │  │  │  └─ level-two-three-three.component.ts
│  │     │  │  │  │  ├─ level-two-three-two
│  │     │  │  │  │  │  ├─ level-two-three-two.component.html
│  │     │  │  │  │  │  ├─ level-two-three-two.component.scss
│  │     │  │  │  │  │  ├─ level-two-three-two.component.spec.ts
│  │     │  │  │  │  │  └─ level-two-three-two.component.ts
│  │     │  │  │  │  ├─ level-two-three.component.html
│  │     │  │  │  │  ├─ level-two-three.component.scss
│  │     │  │  │  │  ├─ level-two-three.component.spec.ts
│  │     │  │  │  │  └─ level-two-three.component.ts
│  │     │  │  │  ├─ level-two-two
│  │     │  │  │  │  ├─ level-two-two.component.html
│  │     │  │  │  │  ├─ level-two-two.component.scss
│  │     │  │  │  │  ├─ level-two-two.component.spec.ts
│  │     │  │  │  │  └─ level-two-two.component.ts
│  │     │  │  │  ├─ level-two.component.html
│  │     │  │  │  ├─ level-two.component.scss
│  │     │  │  │  ├─ level-two.component.spec.ts
│  │     │  │  │  └─ level-two.component.ts
│  │     │  │  ├─ multiples-levels.component.html
│  │     │  │  ├─ multiples-levels.component.scss
│  │     │  │  ├─ multiples-levels.component.spec.ts
│  │     │  │  └─ multiples-levels.component.ts
│  │     │  └─ tables
│  │     │     ├─ tables.component.html
│  │     │     ├─ tables.component.scss
│  │     │     ├─ tables.component.spec.ts
│  │     │     └─ tables.component.ts
│  │     ├─ dashboard
│  │     │  ├─ crm
│  │     │  │  ├─ crm.component.html
│  │     │  │  ├─ crm.component.scss
│  │     │  │  ├─ crm.component.spec.ts
│  │     │  │  └─ crm.component.ts
│  │     │  ├─ ecommerce
│  │     │  │  ├─ ecommerce.component.html
│  │     │  │  ├─ ecommerce.component.scss
│  │     │  │  ├─ ecommerce.component.spec.ts
│  │     │  │  └─ ecommerce.component.ts
│  │     │  └─ hrm
│  │     │     ├─ hrm.component.html
│  │     │     ├─ hrm.component.scss
│  │     │     ├─ hrm.component.spec.ts
│  │     │     └─ hrm.component.ts
│  │     ├─ pages
│  │     │  ├─ additionals
│  │     │  │  ├─ additionals.component.html
│  │     │  │  ├─ additionals.component.scss
│  │     │  │  ├─ additionals.component.spec.ts
│  │     │  │  ├─ additionals.component.ts
│  │     │  │  ├─ coming-soon-one
│  │     │  │  │  ├─ coming-soon-one.component.html
│  │     │  │  │  ├─ coming-soon-one.component.scss
│  │     │  │  │  ├─ coming-soon-one.component.spec.ts
│  │     │  │  │  └─ coming-soon-one.component.ts
│  │     │  │  ├─ coming-soon-three
│  │     │  │  │  ├─ coming-soon-three.component.html
│  │     │  │  │  ├─ coming-soon-three.component.scss
│  │     │  │  │  ├─ coming-soon-three.component.spec.ts
│  │     │  │  │  └─ coming-soon-three.component.ts
│  │     │  │  ├─ coming-soon-two
│  │     │  │  │  ├─ coming-soon-two.component.html
│  │     │  │  │  ├─ coming-soon-two.component.scss
│  │     │  │  │  ├─ coming-soon-two.component.spec.ts
│  │     │  │  │  └─ coming-soon-two.component.ts
│  │     │  │  ├─ pricing-table-one
│  │     │  │  │  ├─ pricing-table-one.component.html
│  │     │  │  │  ├─ pricing-table-one.component.scss
│  │     │  │  │  ├─ pricing-table-one.component.spec.ts
│  │     │  │  │  └─ pricing-table-one.component.ts
│  │     │  │  ├─ pricing-table-two
│  │     │  │  │  ├─ pricing-table-two.component.html
│  │     │  │  │  ├─ pricing-table-two.component.scss
│  │     │  │  │  ├─ pricing-table-two.component.spec.ts
│  │     │  │  │  └─ pricing-table-two.component.ts
│  │     │  │  └─ under-constructions
│  │     │  │     ├─ under-constructions.component.html
│  │     │  │     ├─ under-constructions.component.scss
│  │     │  │     ├─ under-constructions.component.spec.ts
│  │     │  │     └─ under-constructions.component.ts
│  │     │  ├─ authentications
│  │     │  │  ├─ account-decativate
│  │     │  │  │  ├─ account-decativate.component.html
│  │     │  │  │  ├─ account-decativate.component.scss
│  │     │  │  │  ├─ account-decativate.component.spec.ts
│  │     │  │  │  └─ account-decativate.component.ts
│  │     │  │  ├─ authentications.component.html
│  │     │  │  ├─ authentications.component.scss
│  │     │  │  ├─ authentications.component.spec.ts
│  │     │  │  ├─ authentications.component.ts
│  │     │  │  ├─ login-one
│  │     │  │  │  ├─ login-one.component.html
│  │     │  │  │  ├─ login-one.component.scss
│  │     │  │  │  ├─ login-one.component.spec.ts
│  │     │  │  │  └─ login-one.component.ts
│  │     │  │  ├─ login-status
│  │     │  │  │  ├─ login-status.component.html
│  │     │  │  │  ├─ login-status.component.scss
│  │     │  │  │  ├─ login-status.component.spec.ts
│  │     │  │  │  └─ login-status.component.ts
│  │     │  │  ├─ login-three
│  │     │  │  │  ├─ login-three.component.html
│  │     │  │  │  ├─ login-three.component.scss
│  │     │  │  │  ├─ login-three.component.spec.ts
│  │     │  │  │  └─ login-three.component.ts
│  │     │  │  ├─ login-two
│  │     │  │  │  ├─ login-two.component.html
│  │     │  │  │  ├─ login-two.component.scss
│  │     │  │  │  ├─ login-two.component.spec.ts
│  │     │  │  │  └─ login-two.component.ts
│  │     │  │  ├─ multi-step-signup
│  │     │  │  │  ├─ multi-step-signup.component.html
│  │     │  │  │  ├─ multi-step-signup.component.scss
│  │     │  │  │  ├─ multi-step-signup.component.spec.ts
│  │     │  │  │  └─ multi-step-signup.component.ts
│  │     │  │  ├─ registration-one
│  │     │  │  │  ├─ registration-one.component.html
│  │     │  │  │  ├─ registration-one.component.scss
│  │     │  │  │  ├─ registration-one.component.spec.ts
│  │     │  │  │  └─ registration-one.component.ts
│  │     │  │  ├─ registration-two
│  │     │  │  │  ├─ registration-two.component.html
│  │     │  │  │  ├─ registration-two.component.scss
│  │     │  │  │  ├─ registration-two.component.spec.ts
│  │     │  │  │  └─ registration-two.component.ts
│  │     │  │  ├─ reset-password
│  │     │  │  │  ├─ reset-password.component.html
│  │     │  │  │  ├─ reset-password.component.scss
│  │     │  │  │  ├─ reset-password.component.spec.ts
│  │     │  │  │  └─ reset-password.component.ts
│  │     │  │  ├─ two-factor-verifications
│  │     │  │  │  ├─ two-factor-verifications.component.html
│  │     │  │  │  ├─ two-factor-verifications.component.scss
│  │     │  │  │  ├─ two-factor-verifications.component.spec.ts
│  │     │  │  │  └─ two-factor-verifications.component.ts
│  │     │  │  ├─ update-password
│  │     │  │  │  ├─ update-password.component.html
│  │     │  │  │  ├─ update-password.component.scss
│  │     │  │  │  ├─ update-password.component.spec.ts
│  │     │  │  │  └─ update-password.component.ts
│  │     │  │  ├─ verify-email
│  │     │  │  │  ├─ verify-email.component.html
│  │     │  │  │  ├─ verify-email.component.scss
│  │     │  │  │  ├─ verify-email.component.spec.ts
│  │     │  │  │  └─ verify-email.component.ts
│  │     │  │  └─ welcome
│  │     │  │     ├─ welcome.component.html
│  │     │  │     ├─ welcome.component.scss
│  │     │  │     ├─ welcome.component.spec.ts
│  │     │  │     └─ welcome.component.ts
│  │     │  ├─ errors-pages
│  │     │  │  ├─ error-five
│  │     │  │  │  ├─ error-five.component.html
│  │     │  │  │  ├─ error-five.component.scss
│  │     │  │  │  ├─ error-five.component.spec.ts
│  │     │  │  │  └─ error-five.component.ts
│  │     │  │  ├─ error-four
│  │     │  │  │  ├─ error-four.component.html
│  │     │  │  │  ├─ error-four.component.scss
│  │     │  │  │  ├─ error-four.component.spec.ts
│  │     │  │  │  └─ error-four.component.ts
│  │     │  │  ├─ error-one
│  │     │  │  │  ├─ error-one.component.html
│  │     │  │  │  ├─ error-one.component.scss
│  │     │  │  │  ├─ error-one.component.spec.ts
│  │     │  │  │  └─ error-one.component.ts
│  │     │  │  ├─ error-seven
│  │     │  │  │  ├─ error-seven.component.html
│  │     │  │  │  ├─ error-seven.component.scss
│  │     │  │  │  ├─ error-seven.component.spec.ts
│  │     │  │  │  └─ error-seven.component.ts
│  │     │  │  ├─ error-six
│  │     │  │  │  ├─ error-six.component.html
│  │     │  │  │  ├─ error-six.component.scss
│  │     │  │  │  ├─ error-six.component.spec.ts
│  │     │  │  │  └─ error-six.component.ts
│  │     │  │  ├─ error-three
│  │     │  │  │  ├─ error-three.component.html
│  │     │  │  │  ├─ error-three.component.scss
│  │     │  │  │  ├─ error-three.component.spec.ts
│  │     │  │  │  └─ error-three.component.ts
│  │     │  │  ├─ error-two
│  │     │  │  │  ├─ error-two.component.html
│  │     │  │  │  ├─ error-two.component.scss
│  │     │  │  │  ├─ error-two.component.spec.ts
│  │     │  │  │  └─ error-two.component.ts
│  │     │  │  ├─ errors-pages.component.html
│  │     │  │  ├─ errors-pages.component.scss
│  │     │  │  ├─ errors-pages.component.spec.ts
│  │     │  │  └─ errors-pages.component.ts
│  │     │  ├─ users
│  │     │  │  ├─ edit-profile
│  │     │  │  │  ├─ edit-profile.component.html
│  │     │  │  │  ├─ edit-profile.component.scss
│  │     │  │  │  ├─ edit-profile.component.spec.ts
│  │     │  │  │  └─ edit-profile.component.ts
│  │     │  │  ├─ users.component.html
│  │     │  │  ├─ users.component.scss
│  │     │  │  ├─ users.component.spec.ts
│  │     │  │  ├─ users.component.ts
│  │     │  │  └─ view-profile
│  │     │  │     ├─ view-profile.component.html
│  │     │  │     ├─ view-profile.component.scss
│  │     │  │     ├─ view-profile.component.spec.ts
│  │     │  │     └─ view-profile.component.ts
│  │     │  └─ utility
│  │     │     ├─ utility.component.html
│  │     │     ├─ utility.component.scss
│  │     │     ├─ utility.component.spec.ts
│  │     │     └─ utility.component.ts
│  │     ├─ shared-routing.module.ts
│  │     └─ shared.module.ts
│  ├─ assets
│  │  ├─ .gitkeep
│  │  ├─ css
│  │  │  ├─ blue-color.css
│  │  │  ├─ deep_pink-color.css
│  │  │  ├─ eagle_green-color.css
│  │  │  ├─ style.css
│  │  │  ├─ tea_green-color.css
│  │  │  └─ yellow_green-color.css
│  │  ├─ images
│  │  │  ├─ ISS_21209_13240.ai
│  │  ├─ js
│  │  │  ├─ email.js
│  │  │  ├─ main.js
│  │  │  ├─ order-list.js
│  │  ├─ scss
│  │  │  ├─ green-color.scss
│  │  │  └─ yellow_green-color.scss
│  │  └─ vendor
│  │     ├─ css
│  │     │  ├─ OverlayScrollbars.min.css
│  │     │  └─ swiper-bundle.min.css
│  │     ├─ images
│  │     │  ├─ sort_asc.png
│  │     ├─ js
│  │     │  ├─ Sortable.js
│  │     │  ├─ aos.js
│  │     │  ├─ apexcharts.js
│  │     │  ├─ bootstrap-material-datetimepicker.js
│  │     │  ├─ sweetalert2.all.min.js
│  │     │  └─ swiper-bundle.min.js
│  │     └─ webfonts
│  │        ├─ fa-brands-400.ttf
│  │        ├─ fa-v4compatibility.ttf
│  │        └─ fa-v4compatibility.woff2
│  ├─ environments
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ main.ts
│  ├─ polyfills.ts
│  ├─ styles.scss
│  └─ test.ts
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```
