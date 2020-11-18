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
  address: IAddress;
  registered: string;
  financial: IFinancial;
  latitude: string;
  longitute: string;
}

export function getEstablishmentAddress(establishmentAddress: string): IAddress {
  const addressParts = establishmentAddress.split(',');
  const sanitizeString = (value: string) => typeof value === 'string' ? value.trim() : null;

  return {
    street: sanitizeString(addressParts[0] + ', ' + addressParts[3]),
    city: sanitizeString(addressParts[1])
  };
}

/**
 * This function recive API data and format to corret DATA application
 */
export function formatAPIData(establishments: any): IEstablishment[] {
  return establishments.map( establishment => {
    return {
      ...establishment,
      address: getEstablishmentAddress(establishment.address),
      financial: {
        account: null,
        accountType: null,
        accountDigit: null,
        bank: null,
        agency: null,
        agencyDigit: null,
        automaticWithdraw: null,
      }
    };
  });
}
