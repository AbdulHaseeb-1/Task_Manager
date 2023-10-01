import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";

export function AuthNavigationBar() {
  return (
    <Navbar className="bg-transparent " shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold  text-green-500">TimeKing</p>
      </NavbarBrand>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="success"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export function GuestNavigationBar() {
  return (
    <Navbar className="bg-transparent " shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold  text-green-500">TimeKing</p>
      </NavbarBrand>
      <NavbarContent as="div" justify="end" className="hidden sm:flex">
        <Link as={"button"} className="text-white">Login</Link>
        <span className="text-green-500">|</span>
        <Link as={"button"} className="text-white">Signup</Link>
      </NavbarContent>
    </Navbar>
  );
}
