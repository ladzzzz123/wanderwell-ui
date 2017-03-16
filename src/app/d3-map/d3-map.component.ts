import {
  Component,
  OnInit,
  OnChanges,
  ViewChild,
  ElementRef,
  Input,
  ViewEncapsulation
} from '@angular/core';
import * as d3 from 'd3';
import * as geo from 'd3-geo';
import * as topojson from 'topojson';

import { D3MapService } from './d3-map.service';

const REGIONS = {
  0: ['South America', 'North America'],
  1: ['Europe'],
  2: ['Asia']
}

@Component({
  selector: 'd3-map',
  templateUrl: './d3-map.component.html',
  styleUrls: ['./d3-map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class D3MapComponent implements OnInit {

  @ViewChild('wanderwellmap') private wgMapContainer: ElementRef;
  private parentRegion: number;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
  private mapGroup: any;
  private width: number;
  private height: number;
  private projection;
  private path;
  private element;
  private data;
  constructor(private wanderwellMapService: D3MapService) { }

  ngOnInit() {
    this.width = 1000 - this.margin.left - this.margin.right;
    this.height = 400 - this.margin.top - this.margin.bottom;
    this.wanderwellMapService.getTopoJson()
      .subscribe(data => {
        this.data = data;
        this.createWgMap();
        if (this.data) {
          this.updateMap();
        }
      });
  }

  createWgMap() {
    var width = 500,
    height = 500;

    let element = this.wgMapContainer.nativeElement;
    let svg = d3.select(element).append('svg')
      .attr('width', width)
      .attr('height', height);

    var uk = this.data;
    // svg.append("path")
    //     .datum(topojson.feature(uk, uk.objects.subunits))
    //     .attr("d", d3.geoPath().projection(d3.geoMercator()));
    // var subunits = topojson.feature(uk, uk.objects.subunits);

    svg.append("path")
        .datum(topojson.feature(uk, uk.objects.collection))
        .attr("d", d3.geoPath().projection(d3.geoMercator()));
    var subunits = topojson.feature(uk, uk.objects.collection);

    // var projection = d3.geoAlbers()
    //     .center([0, 55.4])
    //     .rotate([4.4, 0])
    //     .parallels([50, 60])
    //     .scale(1200 * 5)
    //     .translate([width / 2, height / 2]);
      var projection = d3.geoAlbers()
          .scale(1)
          .translate([0,0]);

    var path = d3.geoPath()
        .projection(projection);

    // svg.append("path")
    //     .datum(topojson.feature(uk, uk.objects.subunits))
    //     .attr("d", path);

    svg.append("path")
        .datum(topojson.feature(uk, uk.objects.collection))
        .attr("d", path);


  }

  getSubunit(d) {

  }

  updateMap() {
    // let a = topojson.feature(this.data, this.data.objects.collection).features;
    // this.mapGroup.selectAll('.country')
    //   .data(a)
    //   .enter().append('path')
    //   .attr('class', 'country')
    //   .attr('d', this.path);

    // let countries = topojson.feature(this.data, this.data.objects.continent).features;
    // this.mapGroup.selectAll('.country')
    //   .data(countries)
    //   .enter().append('path')
    //   .attr('class', 'country')
    //   .attr('d', this.path)
    //   .style('fill', (d) => {
    //     if (REGIONS[this.parentRegion].indexOf(d.properties.continent) !== -1) {
    //       return '#4da94f';
    //     }
    //   });
  }
}
