import { IAddress } from './address.model';
import { IFinancial } from './financial.model';

export interface IEstablishment {
  id: string;
  guid: string;
  index: number;
  picture: string;
  name: string;
  email: string;
  phone: string;
  address: IAddress | string;
  registered: string;
  financial: IFinancial;
}

export function getEstablishmentAddress(establishmentAddress: string): IAddress {
  const addressParts = establishmentAddress.split(',');
  const sanitizeString = (value: string) => typeof value === 'string' ? value.trim() : null;

  return {
    street: sanitizeString(addressParts[0] + ', ' + addressParts[3] + ' - ' + addressParts[1]),
    city: sanitizeString(addressParts[2])
  };
}
