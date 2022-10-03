export interface ISidebar {
  title: string;
  icon: string;
  open: boolean;
  link?: string;
  alias?: string;
  subMenu?: ISidebar[];
}

export const sideBarMenu: ISidebar[] = [
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
    alias: 'profile',
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
    alias: 'report',
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
    alias: 'tools',
    subMenu: [
      {
        title: 'Tính thuế',
        icon: 'money-collect',
        open: false,
        link: 'tools/tax-calculator',
      },
      {
        title: 'Tính trung bình giá cổ phiếu',
        icon: 'stock',
        open: true,
        link: 'tools/stock-average-price',
      },
    ],
  },
];
