import React from 'react';
import {useLocation} from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import type {Props as DropdownProps} from '@theme/NavbarItem/DropdownNavbarItem';

// Navbar dropdown whose label names the edition currently being viewed.
export default function EditionDropdown(props: DropdownProps): JSX.Element {
  const {pathname} = useLocation();
  const label = pathname.startsWith('/ai') ? 'Porto AI' : 'Porto SAP';

  return <DropdownNavbarItem {...props} label={label} />;
}
