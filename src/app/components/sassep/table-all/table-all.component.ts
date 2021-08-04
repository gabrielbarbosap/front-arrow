import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AllServicesService } from 'src/app/services/all-services.service';
export interface DialogData {
  data: any,
}
@Component({
  selector: 'app-table-all',
  templateUrl: './table-all.component.html',
  styleUrls: ['./table-all.component.css']
})
export class TableAllComponent implements OnInit {

  itens;
  prov = new FormControl('')
  level = new FormControl('')
  obs = new FormControl('')
  edit = false
  constructor(public dialogRef: MatDialogRef<TableAllComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private allService: AllServicesService,
    private _snackBar: MatSnackBar

  ) {
    dialogRef.disableClose = true;

  }

  ngOnInit() {

    this.itens = this.data.data
    if (this.itens) {
      this.level.setValue(this.itens.LEVEL_INT)
      this.prov.setValue(this.itens.PROVIDENCE)
      this.obs.setValue(this.itens.OBS)

    }
    console.log(this.itens)
  }

  putLevel() {
    const body = {
      id: this.itens._id,
      level: this.level.value
    }

    this.allService.putLevel(body).subscribe(res => {
      console.log(res)
      this.edit = true
      this._snackBar.open('Salvo com sucesso', 'X', {
        duration: 5000
      });
    }, err => {
      this._snackBar.open('Erro ao salvar.', 'X', {
        duration: 5000
      });
    })
  }
  putObs() {
    const body = {
      id: this.itens._id,
      obs: this.obs.value
    }

    this.allService.putObs(body).subscribe(res => {
      console.log(res)
      this.edit = true
      this._snackBar.open('Salvo com sucesso', 'X', {
        duration: 5000
      });
    }, err => {
      this._snackBar.open('Erro ao salvar.', 'X', {
        duration: 5000
      });
    })
  }

  putProv() {
    const body = {
      id: this.itens._id,
      prov: this.prov.value
    }

    this.allService.putProv(body).subscribe(res => {
      console.log(res)
      this.edit = true
      this._snackBar.open('Salvo com sucesso', 'X', {
        duration: 5000
      });
    }, err => {
      this._snackBar.open('Erro ao salvar.', 'X', {
        duration: 5000
      });
    })
  }

  onNoClick(): void {
    if (this.edit) {
      this.dialogRef.close('recarrregar');
    }
  }


}