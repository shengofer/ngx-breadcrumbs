import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxBreadcrumbsService } from './ngx-breadcrumbs.service';
import { NgxBreadcrumbComponent } from './ngx-breadcrumbs.component';

@NgModule({

  declarations: [
    NgxBreadcrumbComponent
  ],
  providers: [
    NgxBreadcrumbsService
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [NgxBreadcrumbComponent]
})
export class NgxBreadcrumbsModule {
}

