export interface IMenu {
  title: string;
  subtitle: string;
  link: string;
  icon: string;
}

export const menuSettings: IMenu[] = [
  {
    title: 'Account',
    subtitle: 'Thông tin account',
    link: 'account',
    icon: 'idcard'
  },
  {
    title: 'General',
    subtitle: 'Thông tin account',
    link: 'general',
    icon: 'setting'
  },
  {
    title: 'Personalization',
    subtitle: 'Thông tin account',
    link: 'personalization',
    icon: 'bg-colors'
  },
  {
    title: 'Security',
    subtitle: 'Thông tin account',
    link: 'security',
    icon: 'exclamation-circle'
  }
]
