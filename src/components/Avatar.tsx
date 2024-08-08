interface AvatarProps {
    image: string;
}
export default function Avatar({ image }: AvatarProps) {
  return (
    <div className="avatar">
      <div className="ring-primary ring-offset-base-100 w-[350px] rounded-full ring ring-offset-2">
        <img src={image} alt="Avatar" className="bg-gray-600"   />
      </div>
    </div>
  );
}
