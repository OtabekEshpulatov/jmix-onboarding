package com.company.jmixonboarding.view.myonboarding;


import com.company.jmixonboarding.entity.Step;
import com.company.jmixonboarding.entity.User;
import com.company.jmixonboarding.entity.UserStep;
import com.company.jmixonboarding.view.main.MainView;

import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.ItemClickEvent;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.router.Route;
import io.jmix.core.security.CurrentAuthentication;
import io.jmix.flowui.UiComponents;
import io.jmix.flowui.component.grid.DataGrid;
import io.jmix.flowui.kit.component.button.JmixButton;
import io.jmix.flowui.model.CollectionContainer;
import io.jmix.flowui.model.CollectionLoader;
import io.jmix.flowui.model.DataContext;
import io.jmix.flowui.model.InstanceContainer;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Route(value = "my-onboarding", layout = MainView.class)
@ViewController("MyOnboardingView")
@ViewDescriptor("my-onboarding-view.xml")
public class MyOnboardingView extends StandardView {
    @Autowired
    private UiComponents uiComponents;
    @Autowired
    private CurrentAuthentication currentAuthentication;
    @ViewComponent
    private CollectionLoader<UserStep> userStepsDl;
    @ViewComponent
    private DataGrid<UserStep> userStepsGrid;
    @ViewComponent
    private Label completedStepsLabel;
    @ViewComponent
    private Label overdueStepsLabel;
    @ViewComponent
    private Label totalStepsLabel;
    @ViewComponent
    private CollectionContainer<UserStep> userStepsDc;
    @ViewComponent
    private DataContext dataContext;

    @Subscribe
    public void onInit(final InitEvent event) {

        Grid.Column<UserStep> userStepColumn = userStepsGrid.addComponentColumn(userStep -> {
            Checkbox checkbox = uiComponents.create(Checkbox.class);
            checkbox.setValue(userStep.getCompletedDate() != null);
            checkbox.addValueChangeListener(e -> {
                if (userStep.getCompletedDate() == null) {
                    userStep.setCompletedDate(LocalDate.now());
                } else {
                    userStep.setCompletedDate(null);
                }

            });
            return checkbox;
        });


        userStepColumn.setFlexGrow(0);
        userStepColumn.setWidth("4em");
        userStepsGrid.setColumnPosition(userStepColumn, 0);


        Grid.Column<UserStep> dueDate = userStepsGrid.getColumnByKey("dueDate");


    }


    @Subscribe
    public void onBeforeShow(final BeforeShowEvent event) {
        final User user = (User) currentAuthentication.getUser();
        userStepsDl.setParameter("user", user);
        userStepsDl.load();
        updateLabels();
    }

    private void updateLabels() {
        List<UserStep> items = userStepsDc.getItems();

        int totalSteps = items.size();
        long completedSteps = items.stream().filter(us -> us.getCompletedDate() != null).count();
        long overdueSteps = items.stream().filter(this::isOverdue).count();

        totalStepsLabel.setText("Total steps: " + totalSteps);
        completedStepsLabel.setText("Completed steps: " + completedSteps);
        overdueStepsLabel.setText("Overdue steps: " + overdueSteps);

    }

    @Subscribe(id = "userStepsDc", target = Target.DATA_CONTAINER)
    public void onUserStepsDcItemPropertyChange(final InstanceContainer.ItemPropertyChangeEvent<UserStep> event) {
        updateLabels();


    }

    @Subscribe("closeBtn")
    public void onCloseBtnClick(final ClickEvent<JmixButton> event) {
        close(StandardOutcome.DISCARD);
    }

    @Subscribe("saveBtn")
    public void onSaveAndCloseBtnClick(final ClickEvent<JmixButton> event) {
        dataContext.save();
    }


    private boolean isOverdue(UserStep us) {
        return us.getCompletedDate() == null && us.getDueDate() != null && LocalDate.now().isAfter(us.getDueDate());
    }


}