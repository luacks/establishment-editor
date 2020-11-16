import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { getEstablishmentAddress, IEstablishment } from 'src/app/models/establishment.model';
import { SelectOption } from 'src/app/shared/components/forms/select-input/SelectOption';
import { EstablishmentService } from 'src/app/shared/services/establishment.service';
import { BankService } from 'src/app/shared/services/bank.service';
import { CityService } from 'src/app/shared/services/city.service';
import { IBank } from 'src/app/models/bank.model';
import { ICity } from 'src/app/models/city.model';

@Component({
  selector: 'app-establishment-edit',
  templateUrl: './establishment-edit.component.html',
  styleUrls: ['./establishment-edit.component.scss']
})
export class EstablishmentEditComponent implements OnInit {

  withdrawOptions: SelectOption[] = [
    { text: 'Selecione', value: '' },
    { text: 'Sim', value: true },
    { text: 'Não', value: false }
  ];

  accountOptions: SelectOption[] = [
    { text: 'Selecione', value: '' },
    { text: 'Poupaça', value: 'poupanca' },
    { text: 'Corrente', value: 'corrente' }
  ];

  establishment: IEstablishment;

  banks: SelectOption[];
  cities: ICity[];

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
    this.establishmentService.getOneByIndex(id)
      .subscribe( data => {
        this.establishment = data;

        if ( typeof this.establishment.address === 'string' ) {
          this.establishment.address = getEstablishmentAddress(this.establishment.address);
        }

        // fill form with saved data
        this.formEdit.reset({
          ...this.establishment
        });
      });

    this.banksService.getBanks()
      .subscribe( banks => this.banks = this.getBanksOptions(banks));

    this.cityService.getCities()
      .subscribe( cities => this.cities = cities);
  }

  getBanksOptions(banks: IBank[]): SelectOption[] {
    return banks?.map( bank => ({ value: bank.id, text: bank.name }));
  }

  getCitiesOptions(): SelectOption[] {
    return this.cities?.map( city => ({ value: city.id, text: city.name }));
  }

  submit(): void {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.establishmentService.update({
      ...this.formEdit.value,
      index: id
    });
  }

}
