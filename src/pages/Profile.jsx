import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          defaultValue={currentUser.username}
          className="border p-3 round-lg"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          defaultValue={currentUser.email}
          className="border p-3 round-lg"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          defaultValue={currentUser.password}
          className="border p-3 round-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95">
          Submit
        </button>
      </form>

      <div className="flex justify-between mt-5">
        <span className="text-red-800 cursor-pointer">Delete account</span>
        <span className="text-red-500 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
