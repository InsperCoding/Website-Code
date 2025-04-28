import Image from "next/image"

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 relative h-8 w-32">
            <Image
              src="/assets/insper-logo.png"
              alt="Insper Code Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center md:text-right text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Insper Code. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}