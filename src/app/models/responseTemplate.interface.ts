import { AddEmployee } from './employee/add-employee';
import { Payroll } from "./payroll/get-payroll";
import { AddBranch } from "./branch/add-branch";
import { Branch } from "./branch/get-branch";
import { Employees } from "./employee/get-employee";
import { Inventory } from "./inventory/get-inventory";
import { Product } from "./product/get-product";
import { AddProduct } from './product/add-product';
import { AddInventory } from './inventory/add-inventory';
import { AddService, Service } from 'src/app/models/services/add-service';
import { Clase } from './class/clase';

// Single

export interface ResponseTemplateI {
  status: string;
  result: JSON;
}

export interface EmployeeResponseTemplateI {
  status: string;
  result: AddEmployee;
}

export interface BranchResponseTemplateI {
  status: string;
  result: AddBranch;
}

export interface ProductResponseTemplateI{
  status: string;
  result: AddProduct;
}

export interface InventoryResponseTemplateI{
  status: string;
  result: AddInventory;
}

export interface ServiceResponseTemplateI{
  status: string;
  result: Service;
}

export interface AssignResponseTemplateI{
  status: string;
  result: AddService;
}

// Multiple

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

export interface ResponseTemplateListClassI{
  status: string;
  result: Array<Clase>;
}


