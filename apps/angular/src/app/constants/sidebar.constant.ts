export interface ISidebar {
  title: string;
  icon: string;
  open: boolean;
  link?: string;
  subMenu?: any;
}

export const sideBarMenu: any = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    open: false,
    link: 'dashboard',
  },
  {
    title: 'Danh mục',
    icon: 'profile',
    open: false,
    subMenu: [
      {
        title: 'Tạo thu chi',
        icon: 'diff',
        open: false,
        link: 'category/add-new-receipt',
      },
      {
        title: 'Tạo ví',
        icon: 'book',
        open: false,
        link: 'category/add-new-account',
      },
    ],
  },
  {
    title: 'Báo cáo',
    icon: 'fund-projection-screen',
    open: false,
    subMenu: [
      {
        title: 'Tài chính hiện tại',
        icon: 'monitor',
        open: false,
        link: 'report/finance-statement',
      },
    ],
  },
  {
    title: 'Tiện ích',
    icon: 'control',
    open: false,
    subMenu: [
      {
        title: 'Tính thuế',
        icon: 'money-collect',
        open: false,
        link: 'tools/tax-calculator',
      },
    ],
  },
];
