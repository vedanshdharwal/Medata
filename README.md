# **Medata**

## **Brief Introduction:**

Medata is a medical platform to help doctors, patients and pharmacist to come to one platform which is totally digitalized. Medata’s primary focus is to curb down the time required to identify a person’s medical history / any other important information which is required during an emergency situation.
Medata helps the patients / users by digitalizing their medical records. 
Let’s assume a situation where a patient is brought into the hospital due to an accident and he is losing out his blood.  It takes time to find out his / her medical information which might include the medicines he/she is allergic to, blood group etc. which are of high importance during such situations. Medata can help anyone in such a situation by retrieving their medical records with their fingerprints which is linked to Aadhaar card. 
A report claims “Doctors' sloppy handwriting kills more than 7,000 people annually.” Medata also solves such problems by digitalizing the doctor’s prescription and also regulating the drug usage in the market [doctors can only recommend the medicines which is allowed by the Central Drugs Standard Control Organization (CDSCO) therefore completely eradicating medicines which causes adverse effect on the consumer / patient. 
It also solves the problem of Pharmacist having a problem of reading doctor’s sloppy handwriting as doctor’s medical prescription will be digitalized on Medata. 

## **Technical Stack:**
-	Fingerprint Sensor 
-	NodeMCU
-	Firebase [ Database and Hosting]
-	Website [HTML, CSS, JSP]


## **Working:**
Medata’s website will have three registration and login options 
1. Admin 
2. Doctor 
3. Patient(User)

Administrator on logging into the application will be able to 
>Add/ Remove/Edit details other Admins
>Add/ Remove /Edit details Doctors
>Add/ Remove /Edit details Users
>Search/view the profile of any user or doctor, using unique ID or fingerprint scan
>Perform any modifications/ changes in details
>Add other relevant details 

The Doctor on logging into the application will be able to
>Search/view the profile of any user patient using the unique ID or fingerprint scan
>Modify details of patient such as their height and weight
>Add prescription for the user patient and view their past medical history
>Attach any relevant scan reports

User on logging in will be able to view his profile and prescriptions by using unique ID or fingerprint scan. He/she cannot modify any details [except the current address and contact numbers] entered during the registration process. This is done by the Admin if any changes are required.
The medical background of the users involving their medical conditions, allergies, ongoing medications, vaccination history etc. will be entered into a database which will be linked with their unique ID or fingerprint.  The fingerprint/unique code will be scanned to identify the records of the patient.
So whenever a patient visits a doctor / pharmacist using his fingerprint details , the web portal will display the user data. 
