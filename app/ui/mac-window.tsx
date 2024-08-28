import {
  ArrowUpOnSquareIcon,
  PlusIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

interface MacWindowProps {
  image: string;
  name: string;
  altText?: string;
}

export default function MacWindow({ image, name, altText }: MacWindowProps) {
  return (
    <div className="flex flex-col items-start border border-zinc-500 bg-zinc-800 rounded-md">
      {/* Top Bar */}
      <div className="flex w-full justify-between items-center space-x-10 border-b border-zinc-500 py-2">
        {/* Left Side Icons */}
        <div className="flex items-center space-x-2 ps-3">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        {/* Name */}
        <div className="bg-zinc-500 rounded-md px-3 flex-grow text-center">
          <span className="font-semibold">{name}</span>
        </div>

        {/* Right Side Icons */}
        <div className="flex items center space-x-2 pe-3">
          <ArrowUpOnSquareIcon className="h-6 w-6 text-zinc-500" />
          <PlusIcon className="h-6 w-6 text-zinc-500" />
          <Square2StackIcon className="h-6 w-6 text-zinc-500" />
        </div>
      </div>

      {/* Component */}
      <div className="relative w-full h-auto">
        <Image
          src={image}
          alt={altText || name}
          layout="responsive"
          width={100}
          height={100}
          objectFit="contain"
          className="rounded-b-md"
        />
      </div>
    </div>
  );
}
