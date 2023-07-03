package com.company.jmixonboarding.view.user;

import com.company.jmixonboarding.entity.User;
import com.company.jmixonboarding.view.main.MainView;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.InputStreamFactory;
import com.vaadin.flow.server.StreamResource;
import io.jmix.core.FileRef;
import io.jmix.core.FileStorage;
import io.jmix.flowui.UiComponents;
import io.jmix.flowui.component.grid.DataGrid;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.xml.transform.stream.StreamSource;

@Route(value = "users", layout = MainView.class)
@ViewController("User.list")
@ViewDescriptor("user-list-view.xml")
@LookupComponent("usersDataGrid")
@DialogMode(width = "50em")
public class UserListView extends StandardListView<User> {


    @ViewComponent
    private DataGrid<User> usersDataGrid;

    @Autowired
    private UiComponents uiComponents;

    @Autowired
    private FileStorage fileStorage;

    @Subscribe
    public void onInit(final InitEvent event) {

        Grid.Column<User> pictureColumn = usersDataGrid.addComponentColumn(user -> {
            FileRef picture = user.getPicture();
            if (picture != null) {
                Image image = uiComponents.create(Image.class);
                image.setWidth("20px");
                image.setHeight("20px");
                StreamResource streamResource = new StreamResource(picture.getFileName(), () -> fileStorage.openStream(picture));
                image.setSrc(streamResource);
                image.setClassName("user-picture");
                return image;
            }
            return new Span();
        });
        pictureColumn.setFlexGrow(0);
        pictureColumn.setWidth("40px");
        usersDataGrid.setColumnPosition(pictureColumn,0);

    }


}