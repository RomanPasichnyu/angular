import {Component, Input} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarServiceService} from "../../services";

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input()
  car: ICar

  constructor(private carService: CarServiceService) {
  }

  update(): void {
    this.carService.setCarForUpdate(this.car)
  }

  delete(): void {
    this.carService.deleteByID(this.car.id).subscribe(() => {
      this.carService.setTrigger()
    })
  }
}
