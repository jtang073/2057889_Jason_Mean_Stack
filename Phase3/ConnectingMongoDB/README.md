# Connecting MongoDB with the Website Application Format

---

**Index Page:**

![Index](/Phase3/ConnectingMongoDB/images/conHome.png)

---

**Add Course Page**

![Add](/Phase3/ConnectingMongoDB/images/conAdd.png)

---

**Adding Entry #1 [MEAN Stack]**

![Entry1](/Phase3/ConnectingMongoDB/images/conEntry1.png)


---

**Adding Entry #1 [ILP Training]**

![Entry2](/Phase3/ConnectingMongoDB/images/conEntry2.png)

---

**Adding Entry #1 [One One]**

![Entry3](/Phase3/ConnectingMongoDB/images/conEntry3.png)

---

**Updating CID:123 with new amount = 50 (Old amount was 1000)**

![Update](/Phase3/ConnectingMongoDB/images/conUpdate.png)

---

**Fetching Course Data BEFORE updating (Old amount = 1000)**

![Before](/Phase3/ConnectingMongoDB/images/conBeforeUpd.png)

---

**Fetching Course Data AFTER updating (New amount = 50)**

![After](/Phase3/ConnectingMongoDB/images/conAfterUpd.png)

---

**Deleting CID: 11**

![Delete](/Phase3/ConnectingMongoDB/images/conDelete.png)

---

**Fechting Course Data AFTER deleting CID: 11**

![AfterDelete](/Phase3/ConnectingMongoDB/images/conAfterDelete.png)

---
**NOTE:** Error handling was added to the "Add Course" function. When adding a new course, the backend will check for a unique CID. If it is NOT unique, it will return an error message and not update the database. However, the "Delete Course" function does not check if the CID already exists. Therefore, it will always return true that it successfully deleted the CID even though it may not have existed in the first place. All of this note does NOT affect the overall functionality of the program. It will still run as intended.