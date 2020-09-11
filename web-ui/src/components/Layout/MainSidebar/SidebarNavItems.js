import React from 'react';
import { Nav } from 'shards-react';

import SidebarNavItem from './SidebarNavItem';
import items from '../../../routes';

function SidebarNavItems() {
  return (
    <Nav className="flex-column">
      {items
        .filter((i) => i.sidemenu)
        .map((item, idx) => (
          /* eslint-disable-next-line react/no-array-index-key */
          <SidebarNavItem key={idx} item={item} />
        ))}
    </Nav>
  );
}

export default SidebarNavItems;
