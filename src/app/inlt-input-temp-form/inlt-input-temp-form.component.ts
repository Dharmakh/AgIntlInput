import { Component, OnInit } from '@angular/core';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-inlt-input-temp-form',
  templateUrl: './inlt-input-temp-form.component.html',
  styleUrls: ['./inlt-input-temp-form.component.css']
})
export class InltInputTempFormComponent implements OnInit {

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phone;

	// phoneForm = new FormGroup({
	// 	phone: new FormControl(undefined, [Validators.required])
	// });

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

  InputChange(phone){
    console.log(phone.status)
  }
  ngOnInit(): void {
  }
  btnClick(){

  }
  submit(f){
    // console.log(f.form.controls['phone'].status)
  }

}
