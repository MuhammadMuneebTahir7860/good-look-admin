import React from "react";
import { colors } from "../../constants/Color";
import { DS } from "./DashboardStyle";
import UseDashboard from "./UseDashboard";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";
export default function Dashboard() {
  const [{ statsData, loading }] = UseDashboard();
  if (loading) {
    return <CommonTableLoader />;
  }
  return (
    <div>
      <DS.PagetopBoxesContainer>
        <DS.TopBox color={colors.tomato}>
          <div>
            <DS.BoxCountText>{statsData.services}</DS.BoxCountText>
            <DS.BoxTitle>Services</DS.BoxTitle>
          </div>
          <DS.WbSunnyIcon />
        </DS.TopBox>
        <DS.TopBox color={colors.tomato}>
          <div>
            <DS.BoxCountText>{statsData.users}</DS.BoxCountText>
            <DS.BoxTitle>Users</DS.BoxTitle>
          </div>
          <DS.CurrencyExchangeIcon />
        </DS.TopBox>
        <DS.TopBox color={colors.tomato}>
          <div>
            <DS.BoxCountText>{statsData.workers}</DS.BoxCountText>
            <DS.BoxTitle>Workers</DS.BoxTitle>
          </div>
          <DS.PaidIcon />
        </DS.TopBox>
      </DS.PagetopBoxesContainer>
    </div>
  );
}
