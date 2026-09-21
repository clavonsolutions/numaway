"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Star,
  Archive,
} from "lucide-react";

interface Conversation {
  id: string;
  studentName: string;
  studentEmail: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
}

interface Message {
  id: string;
  content: string;
  sender: "student" | "counselor";
  timestamp: string;
}

const AdminMessages = () => {
  const [selectedConversation, setSelectedConversation] = useState<string>("1");
  const [messageInput, setMessageInput] = useState("");

  const conversations: Conversation[] = [
    {
      id: "1",
      studentName: "Adaeze Okonkwo",
      studentEmail: "adaeze@email.com",
      lastMessage: "Thank you for the information about Oxford!",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
    },
    {
      id: "2",
      studentName: "Tunde Bakare",
      studentEmail: "tunde@email.com",
      lastMessage: "When is the deadline for the scholarship?",
      timestamp: "15 min ago",
      unread: 0,
      online: true,
    },
    {
      id: "3",
      studentName: "Ngozi Eze",
      studentEmail: "ngozi@email.com",
      lastMessage: "I've uploaded my documents",
      timestamp: "1 hour ago",
      unread: 1,
      online: false,
    },
    {
      id: "4",
      studentName: "Chidi Obi",
      studentEmail: "chidi@email.com",
      lastMessage: "Can we reschedule the call?",
      timestamp: "3 hours ago",
      unread: 0,
      online: false,
    },
    {
      id: "5",
      studentName: "Kemi Adeyemi",
      studentEmail: "kemi@email.com",
      lastMessage: "I got my visa approved! 🎉",
      timestamp: "Yesterday",
      unread: 0,
      online: false,
    },
  ];

  const messages: Record<string, Message[]> = {
    "1": [
      { id: "1", content: "Hello! I'm interested in studying in the UK.", sender: "student", timestamp: "10:00 AM" },
      { id: "2", content: "Hi Adaeze! Great to hear from you. What course are you interested in?", sender: "counselor", timestamp: "10:02 AM" },
      { id: "3", content: "I want to study Computer Science at a top university.", sender: "student", timestamp: "10:05 AM" },
      { id: "4", content: "Excellent choice! Based on your profile, I'd recommend looking at Oxford, Cambridge, and Imperial College. They have outstanding CS programs.", sender: "counselor", timestamp: "10:08 AM" },
      { id: "5", content: "What are the requirements for Oxford?", sender: "student", timestamp: "10:10 AM" },
      { id: "6", content: "For Oxford CS, you'll need:\n• A*A*A at A-Level (or equivalent)\n• MAT admission test\n• Strong problem-solving skills\n• Personal statement\n\nWould you like me to send you detailed information?", sender: "counselor", timestamp: "10:15 AM" },
      { id: "7", content: "Thank you for the information about Oxford!", sender: "student", timestamp: "10:20 AM" },
    ],
  };

  const currentMessages = messages[selectedConversation] || [];
  const currentConversation = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="h-[calc(100vh-8rem)]">
      <div className="flex h-full gap-4">
        {/* Conversations List */}
        <Card className="w-80 flex-shrink-0 flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-display font-bold mb-3">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv.id)}
                  className={`w-full p-3 rounded-lg text-left transition-colors ${
                    selectedConversation === conv.id
                      ? "bg-primary/10"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-medium text-sm">
                          {conv.studentName.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium truncate">{conv.studentName}</p>
                        <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 && (
                      <Badge className="bg-secondary text-secondary-foreground">{conv.unread}</Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Chat Area */}
        <Card className="flex-1 flex flex-col">
          {currentConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-medium">
                        {currentConversation.studentName.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    {currentConversation.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{currentConversation.studentName}</p>
                    <p className="text-sm text-muted-foreground">
                      {currentConversation.online ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Star className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {currentMessages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === "counselor" ? "justify-end" : ""}`}
                    >
                      <div
                        className={`max-w-[70%] p-3 rounded-2xl ${
                          message.sender === "counselor"
                            ? "bg-primary text-primary-foreground rounded-br-md"
                            : "bg-muted rounded-bl-md"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === "counselor" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && messageInput.trim()) {
                        // Handle send
                        setMessageInput("");
                      }
                    }}
                  />
                  <Button 
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    disabled={!messageInput.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              Select a conversation to start messaging
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AdminMessages;
