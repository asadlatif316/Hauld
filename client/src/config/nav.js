import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  MessageSquare,
  Settings,
} from 'lucide-react';

export const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/dashboard/products', label: 'Products', icon: Package },
  { to: '/dashboard/orders', label: 'Orders', icon: ShoppingCart },
  { to: '/dashboard/messages', label: 'Messages', icon: MessageSquare },
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
];
