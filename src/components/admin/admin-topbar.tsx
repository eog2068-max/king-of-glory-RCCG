"use client";

import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AdminTopbarProps {
  pageTitle: string;
  onMenuClick: () => void;
}

export function AdminTopbar({ pageTitle, onMenuClick }: AdminTopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-[#EBF0FA] bg-white/80 px-4 backdrop-blur-md sm:px-6">
      {/* Mobile Hamburger */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMenuClick}
        aria-label="Toggle sidebar menu"
      >
        <Menu className="size-5 text-[#28166F]" />
      </Button>

      {/* Breadcrumb */}
      <Breadcrumb className="hidden sm:block">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/admin"
              className="text-sm text-[#28166F]/60 hover:text-[#28166F]"
            >
              Admin
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-sm font-medium text-[#28166F]">
              {pageTitle}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Mobile Title */}
      <h1 className="text-sm font-semibold text-[#28166F] sm:hidden">{pageTitle}</h1>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#28166F]/40" />
          <Input
            type="search"
            placeholder="Search..."
            className="h-9 w-56 rounded-lg border-[#EBF0FA] bg-[#E8E0F0] pl-9 text-sm placeholder:text-[#28166F]/40 focus-visible:ring-[#28166F]/20 lg:w-64"
          />
        </div>

        {/* Mobile Search Icon */}
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Search">
          <Search className="size-5 text-[#28166F]/60" />
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              aria-label="Notifications"
            >
              <Bell className="size-5 text-[#28166F]/60" />
              <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-[#DA251D] text-[10px] font-bold text-white">
                5
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuLabel className="text-[#28166F]">
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
              <span className="text-sm font-medium">New prayer request submitted</span>
              <span className="text-xs text-[#28166F]/50">2 hours ago</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
              <span className="text-sm font-medium">Testimony awaiting approval</span>
              <span className="text-xs text-[#28166F]/50">4 hours ago</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
              <span className="text-sm font-medium">3 new member registrations</span>
              <span className="text-xs text-[#28166F]/50">Yesterday</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm text-[#28166F]/60">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 gap-2 px-2">
              <Avatar className="size-8">
                <AvatarFallback className="bg-[#28166F] text-xs font-bold text-white">
                  AU
                </AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-medium text-[#28166F] xl:inline">
                Admin User
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="text-sm font-normal text-[#28166F]/60">
              admin@rccgkingofglory.org
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm">My Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-sm">Account Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-sm text-[#DA251D]">
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}