import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about-tab',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutPageModule),
      },
      {
        path: 'browse-tab',
        loadChildren: () =>
          import('../browse/browse.module').then((m) => m.BrowsePageModule),
      },
      {
        path: 'language-tab',
        loadChildren: () =>
          import('../language/language.module').then(
            (m) => m.LanguagePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/about-tab',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/about-tab',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
