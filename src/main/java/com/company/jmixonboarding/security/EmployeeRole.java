package com.company.jmixonboarding.security;

import com.company.jmixonboarding.entity.Step;
import com.company.jmixonboarding.entity.User;
import com.company.jmixonboarding.entity.UserStep;
import io.jmix.security.model.EntityAttributePolicyAction;
import io.jmix.security.model.EntityPolicyAction;
import io.jmix.security.role.annotation.EntityAttributePolicy;
import io.jmix.security.role.annotation.EntityPolicy;
import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.securityflowui.role.annotation.MenuPolicy;
import io.jmix.securityflowui.role.annotation.ViewPolicy;

@ResourceRole(name = "Employee", code = EmployeeRole.CODE, scope = "UI")
public interface EmployeeRole {
    String CODE = "employee";

    @MenuPolicy(menuIds = "MyOnboardingView")
    @ViewPolicy(viewIds = "MyOnboardingView")
    void screens();

  /*  @EntityAttributePolicy(entityClass = User.class, attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = User.class, actions = {EntityPolicyAction.READ, EntityPolicyAction.UPDATE})
    void user();*/

    @EntityAttributePolicy(entityClass = UserStep.class, attributes = "*", action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = UserStep.class,actions = {EntityPolicyAction.READ,EntityPolicyAction.UPDATE})
    void userStep();


    @EntityAttributePolicy(entityClass = Step.class,attributes = "*",action = EntityAttributePolicyAction.VIEW)
    @EntityPolicy(entityClass = Step.class,actions = {EntityPolicyAction.READ})
    void step();
}