export default function Footer() {
    return (
      <footer className="mt-auto py-6 ">
        <div className="container mx-auto px-4">
          {/* Horizontal line */}
          <div className="border-t border-gray-700 mb-4"></div>
          
          {/* Copyright text */}
          <p className="text-center text-gray-400 text-sm">
            © Copyright {new Date().getFullYear()} Youth Empowerment
          </p>
        </div>
      </footer>
    )
  }