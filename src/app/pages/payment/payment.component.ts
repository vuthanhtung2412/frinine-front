import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare var paypal //GLOBAL VARIABLE CREATED BY THE SCRIPT

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @ViewChild('paypal',{static: true}) paypalElement: ElementRef;

  product= {
    price: 15,
    description: 'Tet SVREN',
    img: 'assets/img/sample-profile.jpg'
  }

  paid = false

  constructor() { }

  ngOnInit(): void {
      paypal
          .Buttons({
              createOrder: (data, actions) => {
                  return actions.order.create({
                      purchase_units: [
                          {
                              description: this.product.description,
                              amount: {
                                  currency_code: 'USD',
                                  value: this.product.price
                              }
                          }
                      ]
                  });
              },
              onApprove: async (data, actions) => {
                  const order = await actions.order.capture();
                  this.paid = true;
                  console.log(order);
              },
              onError: err => {
                  console.log(err);
              }
          })
          .render(this.paypalElement.nativeElement);
  }
}
