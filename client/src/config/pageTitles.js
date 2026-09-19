const pageTitles = {
  '/dashboard': 'Dashboard',
  '/dashboard/products': 'Products',
  '/dashboard/products/new': 'Add Product',
  '/dashboard/orders': 'Orders',
  '/dashboard/orders/new': 'New Order',
  '/dashboard/messages': 'Messages',
  '/dashboard/settings': 'Settings',
};

const getPageTitle = (pathname) =>
  pageTitles[pathname] ??
  pageTitles[pathname.split('/').slice(0, 3).join('/')] ??
  '';

export default getPageTitle;
