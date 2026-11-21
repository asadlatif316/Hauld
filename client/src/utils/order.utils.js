import { nextStatuses } from '@/features/Order/constants/orderStatus';

export const getNextStatus = (status) => nextStatuses[status] ?? [];
export const canChangeStatus = (status) => getNextStatus(status).length > 0;
