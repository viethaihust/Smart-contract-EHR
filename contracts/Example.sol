// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

contract Example {
    uint public patientCount = 0;
    mapping(address => bool) isPatient;
    mapping(address => PatientMedicalData) PatientMedicalList;

    uint public doctorCount = 0;
    mapping(address => bool) isDoctor;
    mapping(address => DoctorData) DoctorDataList;

    mapping(address => VisitHistoryData) VisitHistoryList;

    mapping(address => mapping(address => bool)) isApproved;

    struct PatientMedicalData {
        address etherAddress;
        string name;
        uint weight;
        uint height;
        string bloodGroup;
        uint bloodPressure;
        bool covidVaccine;
    }

    struct DoctorData {
        address etherAddress;
        string name;
        string specialty;
    }

    struct VisitHistoryData {
        address patientAddress;
        address doctorAddress;
        string date;
        string diagnosis;
        string prescription;
    }

    //Add or edit patient medical data by patient
    function addEditPatientMedicalData(
        address etherAddress,
        string memory name,
        uint weight,
        uint height,
        string memory bloodGroup,
        uint bloodPressure,
        bool covidVaccine
    ) public {
        if (PatientMedicalList[etherAddress].etherAddress == address(0x0)) {
            isPatient[etherAddress] = true;
            patientCount++;
        }
        PatientMedicalList[etherAddress] = PatientMedicalData(
            etherAddress,
            name,
            weight,
            height,
            bloodGroup,
            bloodPressure,
            covidVaccine
        );
    }

    //Add or edit doctor data by doctor
    function addEditDoctorData(
        address etherAddress,
        string memory name,
        string memory specialty
    ) public {
        if (DoctorDataList[etherAddress].etherAddress == address(0x0)) {
            isDoctor[etherAddress] = true;
            doctorCount++;
        }
        DoctorDataList[etherAddress] = DoctorData(
            etherAddress,
            name,
            specialty
        );
    }

    //Edit patient data by doctor(can only edit if patient approved)
    function editPatientMedicalDataByDoctor(
        address doctorAddress,
        address patientAddress,
        string memory name,
        uint weight,
        uint height,
        string memory bloodGroup,
        uint bloodPressure,
        bool covidVaccine
    ) public {
        require(isApproved[patientAddress][doctorAddress]);
        PatientMedicalList[patientAddress] = PatientMedicalData(
            patientAddress,
            name,
            weight,
            height,
            bloodGroup,
            bloodPressure,
            covidVaccine
        );
    }
    
    //Add visit hisitory
    function addVisitHistory(
        address patientAddress,
        address doctorAddress,
        string memory date,
        string memory diagnosis,
        string memory prescription
    ) public {
        require(isDoctor[doctorAddress]);
        VisitHistoryList[patientAddress] = VisitHistoryData(
            patientAddress,
            doctorAddress,
            date,
            diagnosis,
            prescription
        );
    }

    //Patient gives permission to the doctor to edit their data
    function givePermission(
        address patientAddress,
        address doctorAddress
    ) public returns (bool success) {
        isApproved[patientAddress][doctorAddress] = true;
        return true;
    }

    //Revoke permission
    function revokePermission(
        address patientAddress,
        address doctorAddress
    ) public returns (bool success) {
        isApproved[patientAddress][doctorAddress] = false;
        return true;
    }

    //Return patient data by ethereum address
    function getPatientMedicalList(
        address etherAddress
    ) public view returns (PatientMedicalData memory) {
        return PatientMedicalList[etherAddress];
    }

    //Return visit history by patient's ethereum address
    function getVisitHistoryList(
        address etherAddress
    ) public view returns (VisitHistoryData memory) {
        return VisitHistoryList[etherAddress];
    }
}
