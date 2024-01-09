import { useState } from "react";
import Transactions from "./Transactions";

const Overview = () => {
    const [select, setSelect] = useState("Last Month")

    const onChange = (event) =>{
        setSelect(event.target.value)
        console.log(select)
    }
 
  return (
    <div className="flex flex-col px-6 py-6">
      <span className="flex items-center justify-between">
        <h1 className="font-medium text-2xl">Overview</h1>
        <select
        onChange={onChange}
          className="sort py-[.5rem] appearance-none relative rounded px-4 pr-10 outline outline-[#D9D9D9]"
          name="Last Month"
          id=""
          value={select}
        >
          <option value="This Month">Last Month</option>
          <option value="This Year">Last Year</option>
        </select>
      </span>

      {/* Cards to show Online Orders and total amount received */}
      <div id="card-container" className="flex space-x-4 py-6 min-w-fit">
        <div
          id="Online-orders-card"
          className="bg-white p-5 items-start rounded-md shadow-sm min-w-[40dvw]"
        >
          <p className="opacity-80">Online orders</p>
          <span className="font-medium text-4xl">231</span>
        </div>
        <div
          id="total-amout-card"
          className="bg-white p-5 items-start shadow-sm rounded-md min-w-[40dvw]"
        >
          <p className="opacity-80">Amount received</p>
          <span className="font-medium text-4xl">&#8377;23,92,312.19</span>
        </div>
      </div>

      {/* Transactions of this month */}
      <h3 className="font-medium text-2xl">
        Transactions | {select}
      </h3>
      <Transactions/>
    </div>
  );
};

export default Overview;
