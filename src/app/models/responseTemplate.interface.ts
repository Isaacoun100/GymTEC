import { AddEmployee } from './employee/add-employee';
import { Payroll } from "./payroll/get-payroll";
import { AddBranch } from "./branch/add-branch";
import { Branch } from "./branch/get-branch";
import { Employees } from "./employee/get-employee";
import { Inventory } from "./inventory/get-inventory";
import { Product } from "./product/get-product";

export interface ResponseTemplateI {
  status: string;
  result: JSON;
}

export interface BranchResponseTemplateI {
  status: string;
  result: AddBranch;
}

export interface EmployeeResponseTemplateI {
  status: string;
  result: AddEmployee;
}

export interface ResponseTemplateListI{
  status: string;
  result: Array<Payroll>;
}

export interface ResponseTemplateListBranchesI{
  status: string;
  result: Array<Branch>;
}

export interface ResponseTemplateListEmployeesI{
  status: string;
  result: Array<Employees>;
}

export interface ResponseTemplateListInventoryI{
  status: string;
  result: Array<Inventory>;
}

export interface ResponseTemplateListProductI{
  status: string;
  result: Array<Product>;
}

