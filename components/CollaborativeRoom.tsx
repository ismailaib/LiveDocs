"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Header from "./Header";
import { Editor } from "./editor/Editor";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ActiveCollaborators from "./ActiveCollaborators";

const CollaborativeRoom = ({roomId}: CollaborativeRoomProps) => {
  return (
    <div>
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className="collaborative-room">
            <Header>
              <div className="flex w-fit items-center justify-center gap-2">
                <p>Share</p>
              </div>
              <div className="flex w-full justify-end flex-1 gap-2 sm:gap-3">
                <ActiveCollaborators />
                <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              </div>
            </Header>
            <Editor />
          </div>
        </ClientSideSuspense>
      </RoomProvider>
    </div>
  );
};

export default CollaborativeRoom;
