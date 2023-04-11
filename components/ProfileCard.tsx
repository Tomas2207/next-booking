import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const ProfileCard = () => {
  const { data: session } = useSession();

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {!session ? (
        <button
          onClick={() => signIn()}
          className="mr-4 sm:mr-8 px-4 mb-3 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition duration-150 ease-out ml-auto sm:ml-0"
        >
          Sign In
        </button>
      ) : (
        <div className="flex items-start gap-2 realtive">
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="h-10 w-10 rounded-full overflow-hidden mx-2 hover:cursor-pointer hover:border-2"
          >
            <img
              src={session.user?.image!}
              alt="user"
              className="object-cover w-full h-full"
            />
          </div>
          {showMenu ? (
            <div className="bg-neutral-800 absolute top-16 w-[15rem] right-2 text-white p-2 rounded-lg z-40">
              <button className="px-4 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition duration-150 ease-out w-full">
                Profile
              </button>
              <Link href="/staylist">
                <button className="px-4 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition duration-150 ease-out w-full">
                  Saved Stays
                </button>
              </Link>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition duration-150 ease-out w-full"
              >
                Sign Out
              </button>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default ProfileCard;
