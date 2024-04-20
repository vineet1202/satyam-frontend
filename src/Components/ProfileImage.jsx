import { Center } from "../Elements/Center";

const ProfileImage = ({ name, fontSize }) => {
  let initials = name.slice(0, Math.min(2, name.length));
  if (name.split(" ").length >= 2) {
    const names = name.split(" ").length();
    initials = names[0] + names[1];
  }
  return (
    <Center className="h-full w-full rounded-full bg-[#c6ccfa]">
      <p className={`${fontSize} font-medium tracking-wider text-blue`}>
        {initials.toUpperCase()}
      </p>
    </Center>
  );
};

export default ProfileImage;
