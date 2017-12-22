import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    myVar: boolean = true;
    myVaredit: boolean = false;
    empList: emp[] = [
        { "name": "mahaboob", "contact": "9849667861", "email": "mahaboob1@gmail.com" },
        { "name": "jany", "contact": "9849667862", "email": "jany1@gmail.com" },
        { "name": "john", "contact": "9849667863", "email": "john@gmail.com" }
    ];
    addEmployee(fm) {
        var emp: emp;
        emp = fm.value;
        this.empList.push(emp);
    }
    editEmp(editemp, i) {
        this.myVar = !this.myVar;
        this.myVaredit = !this.myVaredit;
    }
    updatEmp(updemp, i) {
        this.myVar = !this.myVar;
        this.myVaredit = !this.myVaredit;
    }
    empDelete(demp.contact) {
        var removeIndex = this.empList.map(function (demp) { return demp.contact }).indexOf(demp.contact);
        this.empList.splice(removeIndex, 1);
    }
    constructor() { }

    ngOnInit() {
    }

}
