class Elements {
  get sideBarGroups() {
    return $("#admin-sideBar-groups");
  }
  get createGroupButton() {
    return $("#admin-group-createGroup");
  }
  get groupNameField() {
    return $("#admin-createGroup-groupName");
  }

  get AddGroupButton() {
    return $("#admin-createGroup-add");
  }
}

module.exports = Elements;
