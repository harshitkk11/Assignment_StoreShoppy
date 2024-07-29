import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { MdCallMade } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuUser, LuStamp, LuSend, LuBookMarked } from "react-icons/lu";
import { TbReceipt } from "react-icons/tb";
import { BsEnvelopePaper } from "react-icons/bs";
import Item from "./Item";

const SideBar = () => {
  const [expand, setExpand] = useState(false);
  return (
    <aside className="h-screen w-11 bg-secondary border-r border-gray-700">
      <nav
        className="bg-secondary w-10 hover:w-52 hover:absolute h-screen flex flex-col justify-start items-start py-4 duration-300"
        onMouseOver={() => setExpand(true)}
        onMouseLeave={() => setExpand(false)}
      >
        <Link to="/" className="w-full flex justify-start items-center p-3">
          {expand ? (
            <img
              src="https://x.razorpay.com/dist/assets/img/RazorpayX-logo.svg"
              className="w-32 h-6"
            />
          ) : (
            <img
              src="https://x.razorpay.com/dist/assets/img/x-logo.svg"
              className="w-6 h-6"
            />
          )}
        </Link>
        <ul
          className={`w-full flex flex-col justify-center items-start mt-5 ${
            expand ? "p-0 gap-2" : "p-3 gap-8"
          }`}
        >
          <Item item={<FiHome />} text="Home" action={expand} path={"#"} />
          <Item
            item={<MdCallMade />}
            text={<>
            <span>Payouts</span>
            <span className="bg-accent-secondary ml-2 py-1 px-2 rounded-full">New</span>
            </>}
            action={expand}
            path="/"
            className="bg-text-primary bg-opacity-10 rounded-sm"
          />
          <Item
            item={<IoDocumentTextOutline />}
            text="Account Statements"
            action={expand}
            path={"#"}
          />
          <Item item={<LuUser />} text="Contacts" action={expand} path={"#"} />

          {/* <div className="border-t w-full border-gray-700 my-5" /> */}

          <Item
            item={<TbReceipt />}
            text="Vendor Payments"
            action={expand}
            className="mt-5"
            path={"#"}
          />
          <Item item={<LuStamp />} text="Tax Payments" action={expand} path={"#"} />
          <Item item={<LuSend />} text="Payout Links" action={expand} path={"#"} />
          <Item item={<BsEnvelopePaper />} text="Payroll" action={expand} path={"#"} />
          <Item item={<LuBookMarked />} text="Reports" action={expand} path={"#"} />
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
