const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          &copy; {currentYear} ClickFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
