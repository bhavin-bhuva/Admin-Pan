import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,412</span>
          <span className="featuredMoneyRate">
            -11 <ArrowDownward className="featuredIcon nagative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,412</span>
          <span className="featuredMoneyRate">
            -11 <ArrowDownward className="featuredIcon nagative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,412</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon nagative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
