import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IAddress } from 'src/app/models/address.model';
import { getEstablishmentAddress, IEstablishment } from 'src/app/models/establishment.model';
import { SelectOption } from 'src/app/shared/components/forms/select-input/SelectOption';
import { EstablishmentService } from 'src/app/shared/services/establishment.service';

@Component({
  selector: 'app-establishment-edit',
  templateUrl: './establishment-edit.component.html',
  styleUrls: ['./establishment-edit.component.scss']
})
export class EstablishmentEditComponent implements OnInit {

  withdrawOptions: SelectOption[] = [
    { text: 'Sim', value: true, selected: true },
    { text: 'Não', value: false }
  ];

  establishment: IEstablishment;

  formEdit: FormGroup;

  constructor(
    private establishmentService: EstablishmentService,
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
          agencyDigit: ['', Validators.required],
          account: ['', Validators.required],
          accountDigit: ['', Validators.required]
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

        // fill form with pre saved data
        this.formEdit.reset({
          ...this.establishment
        });
      });
  }

  submit(): void {
    console.log('submited');
    // this.establishmentService.update({
    //   name: 
    // });
  }

}
