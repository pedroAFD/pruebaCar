import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-budget-popup',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './create-budget-popup.component.html',
  styleUrl: './create-budget-popup.component.scss'
})
export class CreateBudgetPopupComponent {
  dialogRef = inject(MatDialogRef<CreateBudgetPopupComponent>);
  productSelected: Producto[] =[]
  productSuggested: Producto[] =[{Descripcion: "Producto Prueba 1",Marcas:"Marca1", Nombre:"ProdPrueb1", Precio: 500, SKU:"PP1"},
    {Descripcion: "Producto Prueba 2",Marcas:"Marca2", Nombre:"ProdPrueb2", Precio: 1500, SKU:"PP2"},
    {Descripcion: "Producto Prueba 3",Marcas:"Marca3", Nombre:"ProdPrueb3", Precio: 200, SKU:"PP3"}
  ]

  addItem(prodcut: Producto){
    console.log("producto agregado", prodcut)
    this.productSelected.push(prodcut)
  }

  calcTotal(): number{
    let total = 0;
    this.productSelected.forEach(element => {
      total += element.Precio;
    });
    return total
  }

  close(): void {
    this.dialogRef.close();
  }
}
