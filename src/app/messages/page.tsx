import ChatScreen from '@/components/chat/ChatScreen'
import ChatSidebar from '@/components/chat/ChatSidebar'
import React from 'react'

type Props = {}

function Page({}: Props) {
  return (
    <div className="grid md:grid-cols-[300px_1fr] min-h-screen w-full bg-background text-foreground">
    <ChatSidebar />
    <ChatScreen />
  </div>
  )
}

export default Page