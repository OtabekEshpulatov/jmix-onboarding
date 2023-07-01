package com.company.jmixonboarding.view.userstep;

import com.company.jmixonboarding.entity.UserStep;

import com.company.jmixonboarding.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "userSteps", layout = MainView.class)
@ViewController("UserStep.list")
@ViewDescriptor("user-step-list-view.xml")
@LookupComponent("userStepsDataGrid")
@DialogMode(width = "50em")
public class UserStepListView extends StandardListView<UserStep> {
}