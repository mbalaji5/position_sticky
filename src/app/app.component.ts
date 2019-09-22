import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls:['bottom-sheet-overview-example-sheet.scss']
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}
  close()
  {
    this._bottomSheetRef.dismiss();
  }
}


