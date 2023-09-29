import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { doGetDashboardStats } from "../../redux/actions/DashboardActions";
export default function UseDashboard() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const statsData = useSelector(state => state.DashboardStatsReducer.stats);
    useEffect(() => {
        dispatch(doGetDashboardStats(setLoading));
    }, [])
    return [{ statsData, loading }]
}
