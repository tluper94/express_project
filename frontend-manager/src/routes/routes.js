export const appRoutes = {
  label: 'app',
  children: [
    {
      name: 'Dashboard',
      icon: 'calendar-alt',
      to: '/app/calendar',
      active: true
    },
    {
      name: 'Stores',
      icon: 'comments',
      to: '/app/chat',
      active: true
    },
    {
      name: 'Employees',
      icon: 'envelope-open',
      active: true,
      to: '/'
    },
    {
      name: 'Registers',
      icon: 'envelope-open',
      active: true,
      to: '/'
    },
    {
      name: 'Categories',
      icon: 'calendar-day',
      active: true,
      to: '/'
    },
    {
      name: 'Products',
      icon: 'shopping-cart',
      active: true,
      to: '/'
    },
    {
      name: 'Finance',
      icon: ['fab', 'trello'],
      to: '/app/kanban',
      active: true
    }
  ]
};

export default [appRoutes];
