export const dynamic = "force-dynamic";

import connectDB from "@/db/connectDB";
import User from "@/models/User";
import UsernameClient from "./UsernameClient";

export default async function Page(props) {
  await connectDB();


  const { username } = await props.params;



  const user = await User.findOne({ username }).lean();

  if (!user) {
    return (
      <div className="text-white text-center mt-20 text-xl">
        User not found
      </div>
    );
  }

  return <UsernameClient user={user} />;
}
