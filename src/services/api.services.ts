import deliveryData from './delivery.json';
import { DeliveryEntry } from '../types';

const deliveries: DeliveryEntry[] = deliveryData;

export const getDeliveryEntries: DeliveryEntry[] =  deliveries;
