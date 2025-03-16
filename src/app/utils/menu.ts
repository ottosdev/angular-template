import { MenuItem } from "primeng/api";

export const menus: MenuItem[] = [
  { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/' },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    routerLink: '/profile/settings',
  },
  {
    label: 'Cadastro Mulher',
    icon: 'pi pi-plus',
    routerLink: '/cadastro-mulher',
  },
];
