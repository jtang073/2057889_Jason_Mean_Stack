# TaskPlanner Application Format

---

Index Page:

![Index](/Phase3/TaskPlanner/images/tpHome.png)

---

Adding a new record (Task ID = 100):

![Add1](/Phase3/TaskPlanner/images/tpAdd1.png)

---

Adding 2nd new record (Task ID = 101):

![Add2](/Phase3/TaskPlanner/images/tpAdd2.png)


---

Error message when trying to add a new record with an already used Task ID (ex: 100):

![Error](/Phase3/TaskPlanner/images/tpError.png)

---

Listing all tasks:

![List](/Phase3/TaskPlanner/images/tpList.png)

---
How the data looks like in JSON file on the backend:

![JSON](/Phase3/TaskPlanner/images/tpJSON.png)

---

Deleting Task with ID = 100:

![Delete1](/Phase3/TaskPlanner/images/tpDelete1.png)

---

List after deleting Task ID = 100:

![Delete2](/Phase3/TaskPlanner/images/tpDelete2.png)

---

**NOTE:** Error handling was added to every edge case as well. (ex: Error message when pressing list button with no tasks, deleting a task ID that does NOT exist, adding a task ID thats already in use).