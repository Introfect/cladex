import Link from 'next/link';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { SettingsIcon } from 'lucide-react';

type Props = {}

function ChatSidebar({}: Props) {
  return (
    
    <div className="hidden md:block border-r border-muted/20 bg-white">
      <div className="sticky top-0 flex items-center justify-between px-4 py-3 border-b border-muted/20">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="font-medium">Acme Chat</div>
        </div>
        <Button variant="ghost" size="icon">
          <SettingsIcon className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="grid gap-2 p-4">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md bg-muted/10 p-2 hover:bg-muted/20"
            prefetch={false}
          >
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-muted-foreground">Hey, how is it going?</div>
            </div>
            <div className="text-xs text-muted-foreground">2:34 PM</div>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md bg-muted/10 p-2 hover:bg-muted/20"
            prefetch={false}
          >
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <div className="font-medium">Jane Smith</div>
              <div className="text-sm text-muted-foreground">Did you see the new design?</div>
            </div>
            <div className="text-xs text-muted-foreground">11:24 AM</div>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md bg-muted/10 p-2 hover:bg-muted/20"
            prefetch={false}
          >
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <div className="font-medium">Alex Johnson</div>
              <div className="text-sm text-muted-foreground">Let uss discuss the project timeline.</div>
            </div>
            <div className="text-xs text-muted-foreground">Yesterday</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ChatSidebar