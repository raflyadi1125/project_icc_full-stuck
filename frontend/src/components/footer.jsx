const Footer = () => {
  return (
    <div className="footer bg-gray-900 shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; copyright bt <span className="font-bold">belajar ngoding</span>
        </p>
        <div className="social-footer flex items-center sm:gap-7 gap-2">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-tiktok-line text-2xl"></i>
          <i className="ri-github-fill text-2xl"></i>
          <i className="ri-twitter-x-fill text-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer;
