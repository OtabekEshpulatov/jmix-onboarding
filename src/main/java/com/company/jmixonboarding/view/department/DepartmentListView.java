package com.company.jmixonboarding.view.department;

import com.company.jmixonboarding.entity.Department;

import com.company.jmixonboarding.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "departments", layout = MainView.class)
@ViewController("Department.list")
@ViewDescriptor("department-list-view.xml")
@LookupComponent("departmentsDataGrid")
@DialogMode(width = "50em")
public class DepartmentListView extends StandardListView<Department> {
}