import { useSelector } from "react-redux";
import Group from "../../components/modules/Sports/Group";
import Tab from "../../components/modules/Sports/Tab";
import { useGroupQuery } from "../../redux/features/events/events";

const Sports = () => {
  const { group } = useSelector((state) => state.global);
  const { data } = useGroupQuery(
    { sportsType: group },
    {
      pollingInterval: 1000,
    }
  );
  return (
    <div id="page" role="page">
      <div className="mian-wrap">
        <Tab />

        <div className="wrap-highlight_list">
          <Group data={data} />
        </div>
      </div>
    </div>
  );
};

export default Sports;
