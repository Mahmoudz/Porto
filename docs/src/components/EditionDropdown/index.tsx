import React from 'react';
import {useLocation} from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import type {Props as DropdownProps} from '@theme/NavbarItem/DropdownNavbarItem';

// Navbar dropdown whose label reflects the currently active edition.
export default function EditionDropdown(props: DropdownProps): JSX.Element {
  const {pathname} = useLocation();
  const isAiEdition = pathname.startsWith('/ai');
  const label = isAiEdition ? 'for AI' : 'for Humans';

  return <DropdownNavbarItem {...props} label={label} />;
}
