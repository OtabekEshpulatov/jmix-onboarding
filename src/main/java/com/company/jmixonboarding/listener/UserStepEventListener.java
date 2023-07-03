package com.company.jmixonboarding.listener;

import com.company.jmixonboarding.entity.OnboardingStatus;
import com.company.jmixonboarding.entity.User;
import com.company.jmixonboarding.entity.UserStep;
import io.jmix.core.DataManager;
import io.jmix.core.Id;
import io.jmix.core.event.EntityChangedEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class UserStepEventListener {

    @Autowired
    private DataManager dataManager;

    @EventListener
    public void onUserStepChangedBeforeCommit(final EntityChangedEvent<UserStep> event) {

        User user;
        EntityChangedEvent.Type eventType = event.getType();

        if (eventType != EntityChangedEvent.Type.DELETED) {
            Id<UserStep> entityId = event.getEntityId();
            UserStep userStep = dataManager.load(entityId).one();
            user = userStep.getUser();
        } else {
            Id<User> entityId = event.getChanges().getOldReferenceId("user");
            if (entityId == null) {
                throw new IllegalStateException("Cannot get User from deleted entity");
            }
            user = dataManager.load(entityId).one();
        }

        long completedUserSteps = user.getSteps().stream().filter(us -> us.getCompletedDate() != null).count();

        if (completedUserSteps == 0) {
            user.setOnboardingStatus(OnboardingStatus.NOT_STARTED);
        } else if (completedUserSteps == user.getSteps().size()) {
            user.setOnboardingStatus(OnboardingStatus.COMPLETED);
        } else {
            user.setOnboardingStatus(OnboardingStatus.IN_PROGRESS);
        }
        dataManager.save(user);
    }
}