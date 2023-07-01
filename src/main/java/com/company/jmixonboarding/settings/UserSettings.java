package com.company.jmixonboarding.settings;

import io.jmix.appsettings.defaults.AppSettingsDefault;
import io.jmix.appsettings.entity.AppSettingsEntity;
import io.jmix.core.metamodel.annotation.JmixEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.math.BigDecimal;

@JmixEntity
@Table(name = "CUSTOMER_SETTINGS")
@Entity
public class UserSettings extends AppSettingsEntity {



    @Column(name = "NOTIFICATION_TEXT")
    private String notificationText;

    @AppSettingsDefault("B")
    @Column(name = "DEFAULT_GRADE")
    private String defaultGrade;

    @AppSettingsDefault("1000")
    @Column(name = "SALES_THRESHOLD",precision = 19,scale = 2)
    private BigDecimal salesThreshold;


    public String getNotificationText() {
        return notificationText;
    }

    public void setNotificationText(String notificationText) {
        this.notificationText = notificationText;
    }

    public String getDefaultGrade() {
        return defaultGrade;
    }

    public void setDefaultGrade(String defaultGrade) {
        this.defaultGrade = defaultGrade;
    }

    public BigDecimal getSalesThreshold() {
        return salesThreshold;
    }

    public void setSalesThreshold(BigDecimal salesThreshold) {
        this.salesThreshold = salesThreshold;
    }
}
