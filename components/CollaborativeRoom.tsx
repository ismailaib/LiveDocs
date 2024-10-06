"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Header from "./Header";
import { Editor } from "./editor/Editor";

const CollaborativeRoom = () => {
  return (
    <div>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className="collaborative-room">
            <Header>
              <div className="flex w-fit items-center justify-center gap-2">
                <p>Share</p>
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
