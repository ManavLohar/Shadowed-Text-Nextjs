"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p>

        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button
        className="bg-blue-900 text-slate-200 border border-slate-50 py-1 px-3 m-2 rounded-md cursor-pointer"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
