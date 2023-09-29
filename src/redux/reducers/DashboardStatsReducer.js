import { GET_DASHBOARD_STATS } from '../types/Types';
const initialState = {
    stats: {},
};

const DashboardStatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DASHBOARD_STATS: {
            return {
                ...state,
                stats: action.payload,
            }
        }
        default:
            return state;
    }
}

export default DashboardStatsReducer;