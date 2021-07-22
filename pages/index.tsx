import React from 'react';
import { Menu, MenuItem, SubMenu, contextMenu } from '../components/ContextMenu'

interface HomeProps {
  title: string,
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Menu>
        <MenuItem as="div">Item 1</MenuItem>
        <MenuItem as="div">Item 2</MenuItem>
        <SubMenu text="submenu">Hello</SubMenu>
      </Menu>
      <div onContextMenu={(event) => contextMenu.update({ show: true, event })}>
        click me to toggle context
      </div>
    </>
  );
}