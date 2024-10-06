// app/api/liveblocks-auth/route.ts
import { liveblocks } from "@/lib/liveblocks";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";

export async function POST() {
  const clerkUser = await currentUser();

  // Check if the user is authenticated
  if (!clerkUser) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;

  const user = {
    id,
    info: {
      id,
      name: `${firstName} ${lastName}`,
      email: emailAddresses[0]?.emailAddress, // Optional chaining for safety
      avatar: imageUrl,
      color: getUserColor(id),
    },
  };

  try {
    // Call Liveblocks to identify the user
    const { status, body } = await liveblocks.identifyUser(
      {
        userId: user.info.email,
        groupIds: [],
      },
      { userInfo: user.info }
    );

    return new Response(body, { status });
  } catch (error) {
    console.error('Liveblocks identification failed:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
