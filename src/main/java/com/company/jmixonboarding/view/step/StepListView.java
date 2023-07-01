package com.company.jmixonboarding.view.step;

import com.company.jmixonboarding.entity.Step;

import com.company.jmixonboarding.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "steps", layout = MainView.class)
@ViewController("Step.list")
@ViewDescriptor("step-list-view.xml")
@LookupComponent("stepsDataGrid")
@DialogMode(width = "50em")
public class StepListView extends StandardListView<Step> {
}