import React from 'react';
import { Menu, MenuItem, SubMenu, contextMenu } from '../components/contextmenu/ContextMenu'

interface HomeProps {
  title: string,
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Menu>
        <MenuItem as="div">Item 1</MenuItem>
        <MenuItem as="div">Item 2</MenuItem>
        <SubMenu text="submenu1">
          <MenuItem as="div">Item 1</MenuItem>
          <MenuItem as="div">Item 2</MenuItem>
          <MenuItem as="div">Item 3</MenuItem>
          <MenuItem as="div">Item 4</MenuItem>
          <MenuItem as="div">Item 5</MenuItem>
          <MenuItem as="div">Item 6</MenuItem>
          <MenuItem as="div">Item 2</MenuItem>
          <MenuItem as="div">Item 3</MenuItem>
          <MenuItem as="div">Item 4</MenuItem>
          <MenuItem as="div">Item 5</MenuItem>
          <MenuItem as="div">Item 6</MenuItem>
        </SubMenu>
        <SubMenu text="submenu2">
          <MenuItem as="div">Item 1</MenuItem>
          <MenuItem as="div">Item 2</MenuItem>
          <MenuItem as="div">Item 3</MenuItem>
          <MenuItem as="div">Item 4</MenuItem>
          <MenuItem as="div">Item 5</MenuItem>
          <MenuItem as="div">Item 6</MenuItem>
        </SubMenu>
        <SubMenu text="submenu3">
          <MenuItem as="div">Item 1</MenuItem>
          <MenuItem as="div">Item 2</MenuItem>
          <MenuItem as="div">Item 3</MenuItem>
          <MenuItem as="div">Item 4</MenuItem>
          <MenuItem as="div">Item 5</MenuItem>
          <MenuItem as="div">Item 6</MenuItem>
        </SubMenu>
      </Menu>
      <div onContextMenu={(event) => contextMenu.update({ show: true, event })}>
        click me to toggle context
      </div>
    </>
  );
}