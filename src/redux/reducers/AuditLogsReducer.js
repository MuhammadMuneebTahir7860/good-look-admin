import { ADD_AUDIT_LOGS, DELETE_AUDIT_LOGS, GET_AUDIT_LOGS, } from '../types/Types';
const initialState = {
    auditLogs: [],
};

const AuditLogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUDIT_LOGS: {
            return {
                ...state,
                auditLogs: [...state.auditLogs, action.payload],
            }
        }
        case GET_AUDIT_LOGS: {
            return {
                ...state,
                auditLogs: action.payload,
            }
        }
        case DELETE_AUDIT_LOGS: {
            const newAuditLogs = state.auditLogs.filter((item) => {
                if (item._id !== action.payload) {
                    return item;
                } else {
                    return null;
                }
            });
            return {
                ...state,
                auditLogs: [...newAuditLogs],
            };
        }

        default:
            return state;
    }
}

export default AuditLogsReducer;