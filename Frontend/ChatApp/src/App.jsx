import Header  from "./components/header"
import FriendsList from "./components/friends-list"
import ChatArea from "./components/chat-area"
import { useState } from "react";

export default function App(){
  const [selectedFriend, setSelectedFriend] = useState(null);
  return (
    <>
    <Header/>
    <div className="chat-container">
      <FriendsList setSelectedFriend={setSelectedFriend} selectedFriend={selectedFriend}/>
      <ChatArea selectedFriend={selectedFriend}/>
    </div>
    
    </>
    
  )
}