import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.scss']
})
export class DeptDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
public deptId;
  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.deptId = id;
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.deptId = id;
    }) ;
  }
goPrevious() {
  let previousId = this.deptId - 1;
  this.router.navigate(['/departments', previousId])
}
goNext() {
  let nextId = this.deptId + 1;
  this.router.navigate(['/departments', nextId])
}
gotoDepts() {
  let selected = this.deptId ? this.deptId : null;
  this.router.navigate(['../', { id: selected}], {relativeTo: this.route});;
}
  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route})
  }
  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route})
  }
}
