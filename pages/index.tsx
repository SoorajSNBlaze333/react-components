import React from 'react';
import { Menu, MenuItem, SubMenu, contextMenu } from '../contextmenu'

interface HomeProps {
  title: string,
}

export default function Home(props: HomeProps) {
  return (
    <div className="h-full w-full flex justify-center items-center">
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
      </Menu>
      <div onContextMenu={(event) => contextMenu.open({ event })} className="text-3xl">
        click me to toggle context
      </div>
    </div>
  );
}