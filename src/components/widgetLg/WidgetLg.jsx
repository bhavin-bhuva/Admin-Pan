import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const data = [
    {
      customer: "Daisy Gregory",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
      date: "01 June 2022",
      amount: "$461.00",
      status: "Approved",
    },
    {
      customer: "Jay Harper",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      date: "18 March 2022",
      amount: "$035.00",
      status: "Approved",
    },
    {
      customer: "Vera Meyer",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
      date: "29 April 2022",
      amount: "$826.00",
      status: "Pending",
    },
    {
      customer: "Shane Gonzalez",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      date: "26 October 2022",
      amount: "$611.00",
      status: "Declined",
    },
    {
      customer: "Alexander Vega",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
      date: "17 October 2022",
      amount: "$309.00",
      status: "Declined",
    },
    {
      customer: "Flora Griffith",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      date: "19 September 2022",
      amount: "$986.00",
      status: "Approved",
    },
    {
      customer: "Shane Gonzalez",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      date: "26 October 2022",
      amount: "$611.00",
      status: "Declined",
    },
    {
      customer: "Alexander Vega",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
      date: "17 October 2022",
      amount: "$309.00",
      status: "Declined",
    },
    {
      customer: "Flora Griffith",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      date: "19 September 2022",
      amount: "$986.00",
      status: "Approved",
    },
    {
      customer: "Shane Gonzalez",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      date: "26 October 2022",
      amount: "$611.00",
      status: "Declined",
    },
    {
      customer: "Alexander Vega",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
      date: "17 October 2022",
      amount: "$309.00",
      status: "Declined",
    },
    {
      customer: "Flora Griffith",
      profileUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
      date: "19 September 2022",
      amount: "$986.00",
      status: "Approved",
    },
  ];

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Tranactions</h3>
      <div className="widgetLgTableContainer">
        <table className="widgetLgTable">
          <thead>
            <tr className="widgetLgTr head">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((value) => {
              return (
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <img
                      src={value.profileUrl}
                      alt=""
                      className="widgetLgImg"
                    />
                    <span className="widgetLgName">{value.customer}</span>
                  </td>
                  <td className="widgetLgDate">{value.date}</td>
                  <td className="widgetLgAmount">{value.amount}</td>
                  <td className="widgetLgStatus">
                    <Button type={value.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
