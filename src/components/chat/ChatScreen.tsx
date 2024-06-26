import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { MenuIcon, MoveHorizontalIcon, PaperclipIcon, SendIcon, SmileIcon } from 'lucide-react';
import { Textarea } from '../ui/textarea';

function ChatScreen() {
  return (
    <div className="flex flex-col">
    <div className="sticky top-0 flex items-center justify-between border-b border-muted/20 bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="w-5 h-5" />
        </Button>
        <Avatar className="w-8 h-8 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="font-medium">John Doe</div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <PaperclipIcon className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <SmileIcon className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoveHorizontalIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
    <div className="flex-1 overflow-auto">
      <div className="grid gap-4 p-4">
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="rounded-md bg-muted/10 p-3 text-sm">
            <p>Hey, how is it going?</p>
            <div className="text-xs text-muted-foreground">2:34 PM</div>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="rounded-md bg-primary text-primary-foreground p-3 text-sm">
            <p>I amm doing great, thanks for asking!</p>
            <div className="text-xs text-primary-foreground/80">2:35 PM</div>
          </div>
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="rounded-md bg-muted/10 p-3 text-sm">
            <p>Did you see the new design ?</p>
            <div className="text-xs text-muted-foreground">11:24 AM</div>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="rounded-md bg-primary text-primary-foreground p-3 text-sm">
            <p>Yes, I really like it! Great work .</p>
            <div className="text-xs text-primary-foreground/80">11:25 AM</div>
          </div>
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
    <div className="sticky bottom-0 bg-white border-t border-muted/20 p-3">
      <div className="relative">
        <Textarea
          placeholder="Type your message..."
          className="min-h-[48px] rounded-2xl resize-none p-4 border border-muted/20 shadow-sm pr-16"
        />
        <Button type="submit" variant="ghost" size="icon" className="absolute w-8 h-8 top-3 right-3">
          <SendIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  </div>
  );
}

export default ChatScreen;
