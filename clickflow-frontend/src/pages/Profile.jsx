import Money from "../components/profile/Money";
import Invitation from "../components/profile/Invitation";
import Buttons from "../components/profile/buttons";
import ProfileHeader from "../components/profile/ProfileHeader";
import BottomMenu from "../components/profile/BottomMenu";

function Profile() {
  return (
    <div className="min-h-full flex-1 pb-4">
      <section className="mx-auto my-8 max-w-[1600px]">
        <h3 className="text-xl md:text-3xl text-primary800 text-center font-bold">
          Profile
        </h3>
      </section>
      <section className="w-[95%] mx-auto space-y-6">
        <ProfileHeader />
        <Money />
        <Invitation />
        <Buttons />
        <BottomMenu />
      </section>
    </div>
  );
}

export default Profile;
