import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="text-base outline-2 outline-[#2B6BB1] rounded-lg p-4 hover:outline-3">
      <div className="flex items-center mb-1">
        <h3 className="text-lg font-bold text-[#2B6BB1]">{title}</h3>
        <div className=" text-[#2B6BB1] mr-3">{icon}</div>
      </div>
      <p className="text-zinc-600 text-base ">{description}</p>
    </div>
  )
}
