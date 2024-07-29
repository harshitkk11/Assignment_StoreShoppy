import { useState } from "react";
import { Dropdown } from "flowbite-react";
import {
  MdCallMade,
  MdAdd,
  MdKeyboardArrowDown,
  MdOutlineVolumeUp,
  MdOutlineSearch,
  MdCurrencyRupee,
} from "react-icons/md";
import { LuUserCheck } from "react-icons/lu";
import { IoReloadSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import SideBar from "../components/SideBar";
import Payments from "../utility/Payments";

const Payout = () => {
  // For checkboxx of quick filter
  const [checked, setChecked] = useState({
    all: true,
    scheduled: false,
    queued: false,
  });

  return (
    <div className="flex w-full h-full">
      {/* Sidebar */}
      <SideBar />
      <div className="w-full h-full">
        {/* NavBar */}
        <nav className="w-full h-[9vh] flex bg-secondary px-6">
          <div className="w-1/2 h-full flex justify-start items-center gap-3">
            <h4 className="text-base font-semibold flex justify-center items-center gap-2">
              <span className="bg-primary bg-opacity-90 p-1 rounded-md">
                <MdCallMade />
              </span>
              Payouts
            </h4>
            <span className="text-base font-semibold">/</span>
            <button className="bg-button-primary bg-opacity-40 text-sm text-text-button p-2 rounded-md">
              Single
            </button>
            <div className="flex justify-start items-center gap-4">
              <button className="text-sm font-medium flex gap-3 justify-center items-center hover:bg-primary hover:bg-opacity-60 p-3 rounded-md">
                Bulk
                <span className="text-xs bg-accent-secondary py-1 px-3 rounded-full">
                  New
                </span>
              </button>
              <button className="text-sm font-medium hover:bg-primary hover:bg-opacity-60 p-3 rounded-md">
                Tally
              </button>
              <button className="text-sm font-medium hover:bg-primary hover:bg-opacity-60 p-3 rounded-md">
                Payout Links
              </button>
            </div>
          </div>
          <div className="w-1/2 h-full flex justify-end items-center gap-4">
            <div className="border border-button-secondary text-button-secondary px-2 py-1 flex justify-center items-center gap-1 rounded-sm">
              <button className="flex justify-center items-baseline gap-1 border-r px-2 border-gray-700 text-sm">
                <span>
                  <MdAdd />
                </span>{" "}
                PAYOUT
              </button>
              <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => (
                  <span className="p-1 cursor-pointer">
                    <MdKeyboardArrowDown />
                  </span>
                )}
              >
                <Dropdown.Item onClick={() => alert("Dashboard!")}>
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item onClick={() => alert("Settings!")}>
                  Settings
                </Dropdown.Item>
                <Dropdown.Item onClick={() => alert("Earnings!")}>
                  Earnings
                </Dropdown.Item>
                <Dropdown.Item onClick={() => alert("Sign out!")}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            </div>
            <button className="text-text-button text-lg">
              <MdOutlineSearch />
            </button>
            <button className="text-accent-primary text-lg">
              <MdOutlineVolumeUp />
            </button>
            <button className="text-text-button text-lg">
              <LuUserCheck />
            </button>
          </div>
        </nav>

        {/* Filter */}
        <nav className="w-full h-[9vh] flex bg-secondary px-6 bg-opacity-50">
          <div className="w-full h-full flex justify-start items-center gap-5">
            <p>Quick Filters:</p>
            <div className="flex justify-start items-center gap-3 bg-button-secondary bg-opacity-20 py-2 pr-4 rounded-sm">
              <div className="border-2 rounded-full border-gray-50 h-3"></div>
              <input
                type="checkbox"
                id="all-payouts"
                className="peer rounded-full bg-transparent checked:text-button-primary"
                checked={checked.all}
                onClick={() =>
                  setChecked({
                    all: !checked.all,
                    scheduled: false,
                    queued: false,
                  })
                }
              />
              <label
                htmlFor="all-payouts"
                className="text-gray-300 peer-checked:text-button-primary text-sm"
              >
                All Payouts
              </label>
            </div>

            <div className="flex justify-start items-center gap-3 bg-button-secondary bg-opacity-20 py-2 pr-4 rounded-sm">
              <div className="border-2 rounded-full border-accent-primary h-3"></div>
              <input
                type="checkbox"
                id="scheduled"
                className="peer rounded-full bg-transparent checked:text-button-primary"
                checked={checked.scheduled}
                onClick={() =>
                  setChecked({
                    all: false,
                    scheduled: !checked.scheduled,
                    queued: false,
                  })
                }
              />
              <label
                htmlFor="scheduled"
                className="text-sm text-gray-300 peer-checked:text-button-primary"
              >
                Scheduled for next 2 days
              </label>
            </div>

            <div className="flex justify-start items-center gap-3 bg-button-secondary bg-opacity-20 py-2 pr-4 rounded-sm">
              <div className="border-2 rounded-full border-accent-primary h-3"></div>
              <input
                type="checkbox"
                id="queued"
                className="peer rounded-full bg-transparent checked:text-button-primary"
                checked={checked.queued}
                onClick={() =>
                  setChecked({
                    all: false,
                    scheduled: false,
                    queued: !checked.queued,
                  })
                }
              />
              <label
                htmlFor="queued"
                className="text-sm text-gray-300 peer-checked:text-button-primary"
              >
                Queued (RazorpayX A/c){" "}
                <span className="text-sm font-semibold text-text-primary ml-1">
                  1
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <a href="#">
              <span className="p-1 cursor-pointer flex text-nowrap text-sm text-text-button">
                View More Filters
                <span className="text-lg">
                  <MdKeyboardArrowDown />
                </span>
              </span>
            </a>
          </div>
        </nav>

        {/* Main content */}
        <main className="px-5">
          <div className="w-full px-2 py-5 flex justify-start items-center">
            <div className="w-full flex justify-start items-center gap-3">
              <div className="flex gap-3">
                <input type="checkbox" className="bg-transparent" />
                <label className="text-sm">Showing 1-5 payouts</label>
              </div>

              <div className="border rounded-full w-2 h-2 bg-text-primary" />

              <p className="text-sm flex gap-2">
                Sort by
                <a href="#" className="text-text-button flex">
                  latest creation date
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </a>
              </p>
            </div>
            <div className="flex justify-end items-center gap-2">
              <button className="text-xl font-bold text-text-button">
                <span>
                  <IoReloadSharp />
                </span>
              </button>
              <button className="text-xl font-bold text-text-button">
                <span>
                  <BsThreeDotsVertical />
                </span>
              </button>

              <button className="flex justify-center items-center border py-1 px-3 text-base text-text-button border-text-button">
                <span>
                  <GoDownload />
                </span>
                Export
              </button>

              <div className="border border-button-secondary text-text-primary bg-button-primary px-2 py-1 flex justify-center items-center gap-1 rounded-sm">
                <button className="flex justify-center items-baseline gap-1 border-r px-2 border-gray-700 text-sm">
                  <span>
                    <MdAdd />
                  </span>{" "}
                  PAYOUT
                </button>
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <span className="p-1 cursor-pointer">
                      <MdKeyboardArrowDown />
                    </span>
                  )}
                >
                  <Dropdown.Item onClick={() => alert("Dashboard!")}>
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => alert("Settings!")}>
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => alert("Earnings!")}>
                    Earnings
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => alert("Sign out!")}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
          <table className="w-full border-y border-gray-600">
            <tr className="text-left text-base font-medium">
              <th className="p-3 text-sm font-medium text-gray-400">
                CREATED AT
              </th>
              <th className="p-3 text-sm font-medium text-gray-400">AMOUNT</th>
              <th className="p-3 text-sm font-medium text-gray-400 pl-5">
                {" "}
                STATUS
              </th>
              <th className="p-3 text-sm font-medium text-gray-400">CONTACT</th>
              <th className="p-3 text-sm font-medium text-gray-400">
                CREATED BY
              </th>
              <th className="p-3 text-sm font-medium text-gray-400">UTR</th>
            </tr>
            {Payments.map((payment, index) => {
              return (
                <tr>
                  <td className="p-3 text-sm font-medium text-text-primary">
                    {payment.createdAt ? payment.createdAt : "--"}
                  </td>
                  <td className="p-3 text-sm font-medium text-text-primary flex justify-start items-baseline">
                    {payment.amount ? (
                      <>
                        <span className="text-xs text-gray-500">
                          <MdCurrencyRupee />
                        </span>
                        {payment.amount}
                        <span className="text-xs text-gray-500">.00</span>
                      </>
                    ) : (
                      "--"
                    )}
                  </td>
                  <td className="p-3 text-xs font-medium ">
                    {payment.status ? (
                      <span className="bg-accent-primary py-1 px-3 rounded-full">
                        {payment.status}
                      </span>
                    ) : (
                      "--"
                    )}
                  </td>
                  <td className="p-3 text-sm font-medium text-text-primary">
                    {payment.contact ? payment.contact : "--"}
                  </td>
                  <td className="p-3 text-sm font-medium text-gray-300">
                    {payment.createdBy ? payment.createdBy : "--"}
                  </td>
                  <td className="p-3 text-sm font-medium text-text-primary">
                    {"--"}
                  </td>
                </tr>
              );
            })}
          </table>
          <div className="p-4 flex justify-end items-center gap-4">
            <select id="pages" required className="w-20 bg-secondary border-0">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
            <label htmlFor="pages" className="text-sm">
              rows/pages
            </label>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payout;
