import { Component } from '@angular/core';
import { productsSoldThisMonth, productsSoldToday } from './mock.data';

interface Revenue {
  costOfGoods: number;
  gross: number;
  grossProfit: number;
  netProfit: number;
}
@Component({
  selector: 'app-sales-managment',
  templateUrl: './sales-managment.component.html',
  styleUrl: './sales-managment.component.scss',
})
export class SalesManagmentComponent {
  todaysRevenue: Revenue;
  monthRevenue: Revenue;

  constructor() {
    this.todaysRevenue = this.calculateTodaysRevenue();
    this.monthRevenue = this.calculateMonthRevenue();
  }

  private calculateTodaysRevenue(): Revenue {
    let totalGross = 0;
    let totalCostOfGoods = 0;

    productsSoldToday.forEach((product) => {
      totalGross += product.price;
      totalCostOfGoods += product.costOfGoods;
    });

    const grossProfit = totalGross - totalCostOfGoods;
    const netProfit = grossProfit; // Assuming no additional expenses

    return {
      costOfGoods: totalCostOfGoods,
      gross: totalGross,
      grossProfit: grossProfit,
      netProfit: netProfit,
    };
  }

  private calculateMonthRevenue(): Revenue {
    let totalGross = 0;
    let totalCostOfGoods = 0;

    productsSoldThisMonth.forEach((product) => {
      totalGross += product.price;
      totalCostOfGoods += product.costOfGoods;
    });

    const grossProfit = totalGross - totalCostOfGoods;
    const netProfit = grossProfit; // Assuming no additional expenses

    return {
      costOfGoods: totalCostOfGoods,
      gross: totalGross,
      grossProfit: grossProfit,
      netProfit: netProfit,
    };
  }
}
