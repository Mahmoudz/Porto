import React from 'react';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import type {Props as DropdownProps} from '@theme/NavbarItem/DropdownNavbarItem';

// Navbar dropdown to switch between the Porto SAP and Porto AI editions.
export default function EditionDropdown(props: DropdownProps): JSX.Element {
  return <DropdownNavbarItem {...props} label="Editions" />;
}
