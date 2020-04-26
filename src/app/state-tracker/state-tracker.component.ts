import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CovidDataService } from "../shared/covid-data.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

interface Param {
  id: number | string;
}
@Component({
  selector: "state-tracker",
  templateUrl: "state-tracker.component.html",
  styleUrls: ["state-tracker.component.scss"],
  providers: [CovidDataService],
})
export class StateTrackerComponent implements OnInit {
  params: Param;
  statewiseData: MatTableDataSource<any>;
  covidDataTable = [];
  displayedColumns: object = {};
  pageSize: number;

  @ViewChild(MatSort) tableSort: MatSort;
  @ViewChild(MatPaginator) tablePaginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private covidDataService: CovidDataService
  ) {
    this.route.params.subscribe((param) => (this.params = param.id));
    this.pageSize = 10;
  }

  pageEvents(event) {
    console.log("event---", event.pageIndex);
    //http call

    if (event.pageIndex === 1) {
      alert("hello");
    }
  }

  filteTable(event) {
    var filterValue = event.target.value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    console.log("filter", filterValue);
    this.statewiseData.filter = filterValue;
  }

  ngOnInit() {
    this.covidDataTable = [
      {
        columnDef: "state",
        header: "State Name",
        cell: (element: any) => `${element.state}`,
      },
      {
        columnDef: "confirmed",
        header: "Confirmed Cases",
        cell: (element: any) => `${element.confirmed}`,
      },
      {
        columnDef: "active",
        header: "Active Cases",
        cell: (element: any) => `${element.active}`,
      },
    ];

    this.displayedColumns = this.covidDataTable.map(
      (columnName) => columnName.columnDef
    );

    this.covidDataService.fetchCountryData().subscribe((res) => {
      console.log(
        "table display data---",
        new MatTableDataSource(res["statewise"])
      );

      this.statewiseData = new MatTableDataSource(res["statewise"]);
      this.statewiseData.sort = this.tableSort;
      this.statewiseData.paginator = this.tablePaginator;
    });
  }
}
