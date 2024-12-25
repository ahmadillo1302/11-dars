export default function Footer() {
  return (
    <footer className="py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto text-center">
        <p className="text-sm font-medium">
          Barcha huquqlar himoyalangan © {new Date().getFullYear()}
        </p>
        <p className="mt-2 text-xs">
          Web dasturlashni rivojlantirish uchun yaratildi. 
          <a
            className="ml-1 font-semibold underline hover:text-gray-200"
            href="https://github.com/ahmadillo1302"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahmadillo
          </a>
        </p>
      </div>
    </footer>
  );
}
