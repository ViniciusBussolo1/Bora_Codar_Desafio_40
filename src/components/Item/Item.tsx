import Image from 'next/image'

interface ItemsProps {
  icon: string
  title: string
  description: string
}

export function Item({ icon, title, description }: ItemsProps) {
  return (
    <div className="max-w-[17.125rem] w-full space-y-2">
      <div className="space-y-4">
        <Image src={icon} alt="Icon" width={48} height={48} />
        <h1 className="text-lg text-white font-bold">{title}</h1>
      </div>
      <p className="text-sm text-gray-200">{description}</p>
    </div>
  )
}
