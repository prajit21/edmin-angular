import { Routes } from '@angular/router';

export const dashData: Routes = [
  {
    path: 'dashboard',
    data: {
      title: 'Default',
      breadcrumb: 'Dashboard',
    },
    loadChildren: () =>
      import('../../../app/component/dashboard/dashboard.routes').then(r => r.dashboard),
  },
  {
    path: 'widgets',
    data: {
      title: 'Widgets',
      breadcrumb: 'Widgets',
    },
    loadChildren: () =>
      import('../../../app/component/widgets/widgets.routes').then(r => r.widgets),
  },
  {
    path: 'project',
    data: {
      title: 'Project',
      breadcrumb: 'Project',
    },
    loadChildren: () =>
      import('../../../app/component/project/project.routes').then(r => r.Project),
  },
  {
    path: 'file-manager',
    data: {
      title: 'File manager',
      breadcrumb: 'File manager',
    },
    loadChildren: () =>
      import('../../../app/component/file-manager/file-manager.routes').then(r => r.FileManager),
  },
  {
    path: 'ecommerce',
    data: {
      title: 'Ecommerce',
      breadcrumb: 'Ecommerce',
    },
    loadChildren: () => import('../../component/ecommerce/ecommerce.routes').then(r => r.Ecommerce),
  },
  {
    path: 'invoice',
    data: {
      title: 'Invoice',
      breadcrumb: 'Ecommerce',
    },
    loadChildren: () =>
      import('../../component/ecommerce/invoice/invoice.routes').then(r => r.Invoice),
  },
  {
    path: 'letter-box',
    data: {
      title: 'Email',
      breadcrumb: 'Email',
    },
    loadChildren: () => import('../../component/letter-box/letter-box.routes').then(r => r.Email),
  },
  {
    path: 'chat',
    data: {
      breadcrumb: 'chat',
    },
    loadChildren: () => import('../../component/chat/chat.routes').then(r => r.Chat),
  },
  {
    path: 'user',
    data: {
      title: 'User Profile',
      breadcrumb: 'User',
    },
    loadChildren: () => import('../../component/user/user.routes').then(r => r.User),
  },
  {
    path: 'bookmarks',
    data: {
      title: 'Bookmark',
      breadcrumb: 'App',
    },
    loadChildren: () => import('../../component/bookmarks/bookmarks.routes').then(r => r.Bookmark),
  },
  {
    path: 'contacts',
    data: {
      title: 'Contacts',
      breadcrumb: 'App',
    },
    loadChildren: () => import('../../component/contacts/contacts.routes').then(r => r.Contact),
  },
  {
    path: 'task',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/task/tasks.routes').then(r => r.Tasks),
  },
  {
    path: 'calender',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/calender/calender.routes').then(r => r.calendar),
  },
  {
    path: 'social-app',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/social-app/soical.routes').then(r => r.SoicalApp),
  },
  {
    path: 'todo',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../component/to-do/todo.routes').then(r => r.Todo),
  },
  {
    path: 'search-pages',
    data: {
      breadcrumb: 'Search Pages',
    },
    loadChildren: () =>
      import('../../component/search-result/search-result.routes').then(r => r.Search),
  },
  {
    path: 'buttons',
    data: {
      title: 'Buttons',
      breadcrumb: 'Buttons',
    },
    loadChildren: () => import('../../component/buttons/buttons.routes').then(r => r.Button),
  },
  {
    path: 'ui-kits',
    data: {
      title: 'Ui-kits',
      breadcrumb: 'Ui-kits',
    },
    loadChildren: () => import('../../component/ui-kits/ui-kits.routes').then(r => r.UiKits),
  },
  {
    path: 'bonus-ui',
    data: {
      title: 'Bonus Ui',
      breadcrumb: 'Bonus Ui',
    },
    loadChildren: () => import('../../component/bonus-ui/bonus-ui.routes').then(r => r.BonusUi),
  },
  {
    path: 'icons',
    data: {
      title: 'Icons',
      breadcrumb: 'Icons',
    },
    loadChildren: () => import('../../component/icons/icons.routes').then(r => r.Icons),
  },
  {
    path: 'sample-page',
    data: {
      title: 'Sample Page',
      breadcrumb: 'Sample Page',
    },
    loadChildren: () =>
      import('../../component/sample-page/sample-page.routes').then(r => r.SamplePage),
  },
  {
    path: 'chart',
    data: {
      title: 'Charts',
      breadcrumb: 'Charts',
    },
    loadChildren: () => import('../../component/charts/charts.routes').then(r => r.Charts),
  },
  {
    path: 'form-controls',
    data: {
      breadcrumb: 'Form Controls',
    },
    loadChildren: () =>
      import('../../component/form-controls/form-controls.routes').then(r => r.formContols),
  },
  {
    path: 'form-widgets',
    data: {
      breadcrumb: 'Form Widgets',
    },
    loadChildren: () =>
      import('../../component/form-widgets/form-widgets.routes').then(r => r.formWidgets),
  },
  {
    path: 'table/bootstrap-tables',
    data: {
      breadcrumb: 'Table',
    },
    loadChildren: () =>
      import('../../component/table/bootstrap-tables/bootstrap.routes').then(
        r => r.bootstrapTables,
      ),
  },
  {
    path: 'table/datatable',
    data: {
      title: 'Data Table',
      breadcrumb: 'Data Table',
    },
    loadChildren: () =>
      import('../../component/table/data-table/data-table.routes').then(r => r.DataTable),
  },
  {
    path: 'gallary',
    data: {
      breadcrumb: 'Gallery',
    },
    loadChildren: () => import('../../component/gallery/gallery.routes').then(r => r.Gallery),
  },
  {
    path: 'blog',
    data: {
      breadcrumb: 'Blog',
    },
    loadChildren: () => import('../../component/blog/blog.routes').then(r => r.Blog),
  },
  {
    path: 'faq',
    data: {
      breadcrumb: 'FAQ',
    },
    loadChildren: () => import('../../component/faq/faq.routes').then(r => r.Faqs),
  },
  {
    path: 'job',
    data: {
      breadcrumb: 'Job Search',
    },
    loadChildren: () =>
      import('../../component/job-search/job-search.routes').then(r => r.JobSearch),
  },
  {
    path: 'learning',
    data: {
      breadcrumb: 'Learning',
    },
    loadChildren: () => import('../../component/learning/learning.routes').then(r => r.Learning),
  },
  {
    path: 'maps',
    data: {
      breadcrumb: 'Maps',
    },
    loadChildren: () => import('../../component/maps/maps.routes').then(r => r.Maps),
  },
  {
    path: 'editors',
    data: {
      breadcrumb: 'Editors',
    },
    loadChildren: () => import('../../component/editors/editor.routes').then(r => r.Editor),
  },
  {
    path: 'knowledgebase',
    data: {
      title: 'Knowledgebase',
      breadcrumb: 'knowledgebase',
    },
    loadChildren: () =>
      import('../../component/knowledgebase/knowlegebase.routes').then(r => r.Knowledgebases),
  },
  {
    path: 'support-ticket',
    data: {
      title: 'Support Ticket',
      breadcrumb: 'Apps',
    },
    loadChildren: () =>
      import('../../component/support-ticket/support-ticket.routes').then(r => r.SupportTicket),
  },
];
