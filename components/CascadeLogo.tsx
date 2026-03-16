import Image from 'next/image';

interface CascadeLogoProps {
  className?: string;
  size?: number;
}

export default function CascadeLogo({ className = '', size = 32 }: CascadeLogoProps) {
  return (
    <Image
      src="/cascade-logo.png"
      alt=""
      width={size * 4}
      height={size}
      className={`object-contain object-left ${className}`}
      priority
    />
  );
}
