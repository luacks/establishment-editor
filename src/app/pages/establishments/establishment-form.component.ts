import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IEstablishment } from 'src/app/models/establishment.model';
import { SelectOption } from 'src/app/shared/components/forms/select-input/SelectOption';
import { EstablishmentService } from 'src/app/shared/services/establishment.service';
import { BankService } from 'src/app/shared/services/bank.service';
import { CityService } from 'src/app/shared/services/city.service';
import { IBank } from 'src/app/models/bank.model';
import { ICity } from 'src/app/models/city.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-establishment-form',
  templateUrl: './establishment-form.component.html',
  styleUrls: ['./establishments.scss']
})
export class EstablishmentFormComponent implements OnInit {

  withdrawOptions: SelectOption[] = [
    { text: 'Sim', value: true },
    { text: 'Não', value: false }
  ];

  accountOptions: SelectOption[] = [
    { text: 'Poupaça', value: 'poupanca' },
    { text: 'Corrente', value: 'corrente' }
  ];

  establishment: IEstablishment;

  banks: SelectOption[];
  cities: SelectOption[];

  formEdit: FormGroup;

  constructor(
    private establishmentService: EstablishmentService,
    private banksService: BankService,
    private cityService: CityService,
    private route: ActivatedRoute,
    private fb: FormBuilder)
  {
    this.formEdit = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group({
        city: '',
        street: '',
      }),
      financial: this.fb.group({
        document: ['', Validators.required],
        agency: ['', Validators.required],
        bank: ['', Validators.required],
        agencyDigit: ['', Validators.required],
        account: ['', Validators.required],
        accountDigit: ['', Validators.required],
        automaticWithdraw: [true, Validators.required],
        accountType: ['corrente', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));

    forkJoin({
      establishment: this.establishmentService.getOneByIndex(id),
      banks: this.banksService.getBanks(),
      cities: this.cityService.getCities()
    }).subscribe(({ establishment, banks, cities }) => {

      this.establishment = establishment;
      this.banks = this.getBanksOptions(banks);
      this.cities = this.getCitiesOptions(cities);

      this.formEdit.reset({
        ...this.establishment
      });
    });

  }

  private getBanksOptions(banks: IBank[]): SelectOption[] {
    return banks.map( bank => ({ value: bank.id, text: bank.name }));
  }

  private getCitiesOptions(cities: ICity[]): SelectOption[] {
    return cities.map( city => ({ value: city.id, text: city.name }));
  }

  submit(): void {
    if ( this.formEdit.valid ) {
      const updatedEstablishment = {
        ...this.establishment,
        ...this.formEdit.value,
      };

      this.establishment = updatedEstablishment;
      this.establishmentService.update(updatedEstablishment);
    }
  }

}
