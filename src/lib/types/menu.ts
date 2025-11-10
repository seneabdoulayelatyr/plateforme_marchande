import {
  LayoutDashboardIcon,
  MessageCircleIcon,
  PackageIcon,
  UsersIcon,
  SettingsIcon,
  LucideIcon,
} from "lucide-react";

export interface MenuItem {
  label: string;
  icon: LucideIcon;
  href: string;
  items?: MenuItem[];
}

export interface MenuItems {
  items: MenuItem[];
}
export const menu_items: MenuItems = {
  items: [
    {
      label: "Tableau de bord",
      icon: LayoutDashboardIcon,
      href: "/dashboard",
    },
    {
      label: "Feedbacks",
      icon: MessageCircleIcon,
      href: "/feedbacks",
    },
    {
      label: "Produits",
      icon: PackageIcon,
      href: "/products",
    },
    {
      label: "Commandes",
      icon: PackageIcon,
      href: "/orders",
    },
    {
      label: "Clients",
      icon: UsersIcon,
      href: "/clients",
    },
    {
      label: "Paramètres",
      icon: SettingsIcon,
      href: "/settings",
    },
  ],
};
