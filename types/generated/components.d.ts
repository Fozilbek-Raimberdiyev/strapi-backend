import type { Schema, Struct } from '@strapi/strapi';

export interface MenuDropdown extends Struct.ComponentSchema {
  collectionName: 'components_menu_dropdowns';
  info: {
    description: '';
    displayName: 'Dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    links: Schema.Attribute.Relation<'oneToMany', 'api::link.link'>;
    title: Schema.Attribute.JSON;
  };
}

export interface MenuMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'Menu-link';
    icon: 'link';
  };
  attributes: {
    title: Schema.Attribute.JSON;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.dropdown': MenuDropdown;
      'menu.menu-link': MenuMenuLink;
    }
  }
}
