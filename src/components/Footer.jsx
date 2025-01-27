

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-6">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">Games Mania</p>
          <p className="text-sm mb-4"><a className="hover:underline" href="https://rawg.io/apidocs" target="_blank">Powered by RAWG API</a></p>

          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Games Mania. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer