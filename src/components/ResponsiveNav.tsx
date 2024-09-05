import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface ResponsiveMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ResponsiveMenu = ({ open, setOpen }: ResponsiveMenuProps) => {
    function onclickHandler() {
        setOpen(!open);
      }

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className=" fixed top-30  w-full  h-screen z-20 md:hidden block bg-[#bbbbb7] text-black shadow-2xl shadow-slate-800 "
        >
          <div className="text-xl h-[700px]">
            <ul className=" h-auto ">
              <div className="max-w-full h-11  border-b border-slate-400 ">
                <Link to={"/blog"}>
                  <li
                    className="m-[20px]  hover:scale-105 duration-300 cursor-pointer"
                    onClick={onclickHandler}
                  >
                    Home
                  </li>
                </Link>
              </div>
              <div className="max-w-full h-11 border-b border-slate-400  ">
                <Link to={"/aboutus"}>
                  <li
                    className="m-[20px]  hover:scale-105 duration-300 cursor-pointer"
                    onClick={onclickHandler}
                  >
                    About Us
                  </li>
                </Link>
              </div>
              
              <div className="max-w-full h-11 border-b border-slate-400  ">
                <Link to={"/socials"}>
                  <li
                    className="m-[20px]  hover:scale-105 duration-300 cursor-pointer"
                    onClick={onclickHandler}
                  >
                    Socials
                  </li>
                </Link>
              </div>
            </ul>

            <div className="h-[150px] flex flex-col items-center justify-center">
            <Link to={"/blog/publish"}> <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Publish</button></Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
