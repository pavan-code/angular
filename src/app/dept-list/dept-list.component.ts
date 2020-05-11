import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute, ParamMap} from '@angular/router';
import { DeptDetailsComponent } from '../dept-details/dept-details.component';
@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.scss']
})
export class DeptListComponent implements OnInit {
  
  departments = [
    { "id" : "1", "name" : "angular"},
    { "id" : "2", "name" : "react"},
    { "id" : "3", "name" : "vue"},
    { "id" : "4", "name" : "meteor"}, 
    { "id" : "5", "name" : "skybreak"  }
  ]
  selectedId: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){        
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.selectedId  = id;
    }) ;
  }
  onSelect(dept) {
    // this.router.navigate(['/departments',dept.id]);
    this.router.navigate([dept.id], {relativeTo: this.route});
  }
  isSelected(dept) {
    return dept.id === this.selectedId
  }

}
