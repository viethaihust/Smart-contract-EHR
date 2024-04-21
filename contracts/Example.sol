// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

contract Example {
    address private admin;
    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    modifier onlyApprovedDoctor() {
        Doctor memory doctor = doctors[msg.sender];
        require(msg.sender == doctor.etherAddress, "Not doctor");
        require(doctor.isApproved, "Not approved");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    struct Doctor {
        address etherAddress;
        string name;
        string specialty;
        bool isApproved;
    }

    struct Patient {
        string id;
        string name;
        uint weight;
        uint height;
        string bloodGroup;
        uint bloodPressure;
        bool covidVaccinated;
    }

    struct VisitHistory {
        string patientId;
        address doctorAddress;
        string date;
        string diagnosis;
        string prescription;
    }

    address[] doctorAddresses;
    mapping(address => Doctor) doctors;

    string[] patientIds;
    mapping(string => Patient) patients;
    mapping(string => VisitHistory[]) visitHistories;

    function getRole() public view returns (string memory status) {
        if (msg.sender == admin) return "admin";
        else {
            Doctor memory doctor = doctors[msg.sender];
            if (doctor.etherAddress == address(0x0)) {
                return "unregistered";
            } else {
                if (doctor.isApproved == true) {
                    return "approved";
                } else {
                    return "unapproved";
                }
            }
        }
    }

    function register(string memory name, string memory specialty) public {
        doctors[msg.sender] = Doctor(msg.sender, name, specialty, false);
        doctorAddresses.push(msg.sender);
    }

    function approveDoctor(address doctorAddr, bool value) public onlyAdmin {
        doctors[doctorAddr].isApproved = value;
    }

    function addEditDoctorData(
        address doctorAddr,
        string memory name,
        string memory specialty
    ) public onlyAdmin {
        if (doctors[doctorAddr].etherAddress == address(0x0)) {
            doctorAddresses.push(doctorAddr);
            doctors[doctorAddr].etherAddress = doctorAddr;
        }
        doctors[doctorAddr].name = name;
        doctors[doctorAddr].specialty = specialty;
    }

    function getDoctorsLength() public view returns (uint) {
        return doctorAddresses.length;
    }

    function getDoctors(
        uint from,
        uint to
    )
        public
        view
        returns (
            uint,
            address[] memory,
            string[] memory,
            string[] memory,
            bool[] memory
        )
    {
        uint count = to - from + 1;

        address[] memory doctorAddress = new address[](count);
        string[] memory specialty = new string[](count);
        string[] memory name = new string[](count);
        bool[] memory isApproved = new bool[](count);

        for (uint n = 0; n < count; n++) {
            address doctorAddressTemp = doctorAddresses[n + from];
            Doctor memory doctorTemp = doctors[doctorAddressTemp];

            doctorAddress[n] = doctorTemp.etherAddress;
            specialty[n] = doctorTemp.specialty;
            name[n] = doctorTemp.name;
            isApproved[n] = doctorTemp.isApproved;
        }

        return (count, doctorAddress, specialty, name, isApproved);
    }

    function getDoctor(address doctor) public view returns (Doctor memory) {
        return doctors[doctor];
    }

    function addEditPatient(
        string memory id,
        string memory name,
        uint weight,
        uint height,
        string memory bloodGroup,
        uint bloodPressure,
        bool covidVaccinated
    ) public onlyApprovedDoctor {
        if (bytes(patients[id].id).length == 0) {
            patientIds.push(id);
            patients[id].id = id;
        }
        patients[id].name = name;
        patients[id].weight = weight;
        patients[id].height = height;
        patients[id].bloodGroup = bloodGroup;
        patients[id].bloodPressure = bloodPressure;
        patients[id].covidVaccinated = covidVaccinated;
    }

    function getPatientsLength() public view returns (uint) {
        return patientIds.length;
    }

    function getPatients(
        uint from,
        uint to
    )
        public
        view
        returns (
            uint count,
            string[] memory id,
            string[] memory name,
            uint[] memory weight,
            uint[] memory height,
            string[] memory bloodGroup,
            uint[] memory bloodPressure,
            bool[] memory covidVaccinated
        )
    {
        count = to - from + 1;
        id = new string[](count);
        name = new string[](count);
        weight = new uint[](count);
        height = new uint[](count);
        bloodGroup = new string[](count);
        bloodPressure = new uint[](count);
        covidVaccinated = new bool[](count);

        for (uint n = 0; n < count; n++) {
            string memory patientIdTemp = patientIds[n + from];
            Patient memory patientTemp = patients[patientIdTemp];

            id[n] = patientTemp.id;
            name[n] = patientTemp.name;
            weight[n] = patientTemp.weight;
            height[n] = patientTemp.height;
            bloodGroup[n] = patientTemp.bloodGroup;
            bloodPressure[n] = patientTemp.bloodPressure;
            covidVaccinated[n] = patientTemp.covidVaccinated;
        }

        return (
            count,
            id,
            name,
            weight,
            height,
            bloodGroup,
            bloodPressure,
            covidVaccinated
        );
    }

    function getPatient(string memory id) public view returns (Patient memory) {
        return patients[id];
    }

    function addVisitHistoryByDoctor(
        string memory patientId,
        string memory date,
        string memory diagnosis,
        string memory prescription
    ) public onlyApprovedDoctor {
        VisitHistory memory newVisit = VisitHistory({
            patientId: patientId,
            doctorAddress: msg.sender,
            date: date,
            diagnosis: diagnosis,
            prescription: prescription
        });
        visitHistories[patientId].push(newVisit);
    }

    function getVisitHistoriesByPatient(
        string memory id
    ) public view returns (VisitHistory[] memory) {
        return visitHistories[id];
    }
}
