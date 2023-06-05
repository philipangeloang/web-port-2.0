const Packages = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
      <p className="text-main-white text-4xl heading-gradient">Packages</p>
      <div className="grid gap-4 grid-cols-12 w-full mt-20">
        {/* Standard */}
        <div className="w-full p-4 border border-main-white/5 rounded-lg shadow sm:p-8 bg-overlay-black col-span-4">
          <h5 className="mb-4 text-xl heading-gradient">Standard plan</h5>

          <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Responsive design
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Functional Website
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Limited to one page
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Integration help
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-main-white/50">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white/30"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50 ">
                Revision
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-main-white/50">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white/30"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50 ">
                Free web design
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-main-white/50">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white/30"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                SEO Optimization
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="text-main-black bg-main-white hover:bg-main-white/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>

        {/* Intermediate */}
        <div className="w-full p-4 border border-main-white/5 rounded-lg shadow sm:p-8 bg-overlay-black col-span-4">
          <h5 className="mb-4 text-xl heading-gradient">Intermediate plan</h5>

          <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Responsive design
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Functional Website
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Maximum of 5 pages
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Integration help
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                One revision
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-main-white/50">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white/30"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50 ">
                Free Web Design
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-main-white/50">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white/30"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                SEO Optimization
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="text-main-black bg-main-white hover:bg-main-white/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>

        {/* Premium */}
        <div className="w-full p-4 border border-main-white/5 rounded-lg shadow sm:p-8 bg-overlay-black col-span-4">
          <h5 className="mb-4 text-xl heading-gradient">Premium plan</h5>

          <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Responsive design
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50 ">
                Functional Website
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Maximum of 10 pages
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50">
                Integration help
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50 ">
                Three revisions
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50 ">
                Free Web Design
              </span>
            </li>
            <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  className="flex-shrink-0 w-5 h-5 text-main-white"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-main-white/50 ">
                SEO Optimization
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="text-main-black bg-main-white hover:bg-main-white/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
