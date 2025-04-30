import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="border-3 border-blue-600 rounded-lg p-4 transition-all hover:shadow-md">
      <div className="flex items-center mb-2">
        <div className=" text-blue-600 mr-3">{icon}</div>
        <h3 className="text-lg font-bold text-blue-600">{title}</h3>
      </div>
      <p className="text-blue-600 text-base ">{description}</p>
    </div>
  )
}
