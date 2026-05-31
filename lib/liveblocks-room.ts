import { getLiveblocks } from "@/lib/liveblocks"

/** Ensures a Liveblocks room exists for the project (room ID = project ID). */
export async function ensureLiveblocksRoom(roomId: string) {
  return getLiveblocks().getOrCreateRoom(roomId, {
    defaultAccesses: [],
  })
}
