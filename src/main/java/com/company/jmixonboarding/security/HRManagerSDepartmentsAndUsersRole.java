package com.company.jmixonboarding.security;

import com.company.jmixonboarding.entity.Department;
import com.company.jmixonboarding.entity.User;
import io.jmix.security.role.annotation.JpqlRowLevelPolicy;
import io.jmix.security.role.annotation.RowLevelRole;

@RowLevelRole(name = "HR manager's departments and users", code = HRManagerSDepartmentsAndUsersRole.CODE)
public interface HRManagerSDepartmentsAndUsersRole {
    String CODE = "hr-manager-rl";


    @JpqlRowLevelPolicy(entityClass = Department.class,where = "{E}.hrManager.id = :current_user_id")
    void department();


    @JpqlRowLevelPolicy(entityClass = User.class,where = "{E}.department.hrManager.id = :current_user_id")
    void user();
}