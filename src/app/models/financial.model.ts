export interface IFinancial {
  account: string;
  accountDigit: string;
  agency: string;
  agencyDigit: string;
  document: string;
  accountType: 'corrente' | 'poupança';
  bank: number;
}
