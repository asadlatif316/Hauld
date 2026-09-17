import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  MessageSquare,
  Settings,
} from 'lucide-react';

export const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/products', label: 'Products', icon: Package },
  { to: '/admin/orders', label: 'Orders', icon: ShoppingCart },
  { to: '/admin/messages', label: 'Messages', icon: MessageSquare },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];
