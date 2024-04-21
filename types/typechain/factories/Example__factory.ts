/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Example, ExampleInterface } from "../Example";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "doctorAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "specialty",
        type: "string",
      },
    ],
    name: "addEditDoctorData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "height",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "bloodGroup",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "bloodPressure",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "covidVaccinated",
        type: "bool",
      },
    ],
    name: "addEditPatient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
      {
        internalType: "string",
        name: "diagnosis",
        type: "string",
      },
      {
        internalType: "string",
        name: "prescription",
        type: "string",
      },
    ],
    name: "addVisitHistoryByDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "doctorAddr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "approveDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "doctor",
        type: "address",
      },
    ],
    name: "getDoctor",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "etherAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "specialty",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isApproved",
            type: "bool",
          },
        ],
        internalType: "struct Example.Doctor",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
    ],
    name: "getDoctors",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "bool[]",
        name: "",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDoctorsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "getPatient",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "height",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "bloodGroup",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "bloodPressure",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "covidVaccinated",
            type: "bool",
          },
        ],
        internalType: "struct Example.Patient",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
    ],
    name: "getPatients",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "id",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "name",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "weight",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "height",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "bloodGroup",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "bloodPressure",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "covidVaccinated",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPatientsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRole",
    outputs: [
      {
        internalType: "string",
        name: "status",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "getVisitHistoriesByPatient",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "patientId",
            type: "string",
          },
          {
            internalType: "address",
            name: "doctorAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "string",
            name: "diagnosis",
            type: "string",
          },
          {
            internalType: "string",
            name: "prescription",
            type: "string",
          },
        ],
        internalType: "struct Example.VisitHistory[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "specialty",
        type: "string",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055612782806100326000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636f7681931161008c578063a5a0dac311610066578063a5a0dac3146101bb578063e79a7a2e146101c3578063f6c16044146101e3578063fde081741461020357600080fd5b80636f76819314610172578063885fe86914610184578063a0f6d25e146101a857600080fd5b80631aa3f182146100d45780631f199d76146100e95780632f04e064146101195780633ffbd47f146101395780636aaf07281461014c5780636d628e391461015f575b600080fd5b6100e76100e2366004611e3e565b610218565b005b6100fc6100f7366004611eea565b6104e8565b604051610110989796959493929190612021565b60405180910390f35b61012c6101273660046120de565b610aec565b6040516101109190612100565b6100e7610147366004612164565b610c90565b6100e761015a3660046121d7565b610d68565b6100e761016d36600461220a565b610ddc565b6003545b604051908152602001610110565b610197610192366004611eea565b611174565b6040516101109594939291906122bf565b6100e76101b6366004612353565b611527565b600154610176565b6101d66101d13660046123c6565b611640565b6040516101109190612402565b6101f66101f13660046123c6565b611895565b6040516101109190612492565b61020b611b71565b6040516101109190612564565b33600090815260026020908152604080832081516080810190925280546001600160a01b03168252600181018054929391929184019161025790612577565b80601f016020809104026020016040519081016040528092919081815260200182805461028390612577565b80156102d05780601f106102a5576101008083540402835291602001916102d0565b820191906000526020600020905b8154815290600101906020018083116102b357829003601f168201915b505050505081526020016002820180546102e990612577565b80601f016020809104026020016040519081016040528092919081815260200182805461031590612577565b80156103625780601f1061033757610100808354040283529160200191610362565b820191906000526020600020905b81548152906001019060200180831161034557829003601f168201915b50505091835250506003919091015460ff16151560209091015280519091506001600160a01b031633146103ca5760405162461bcd60e51b815260206004820152600a6024820152692737ba103237b1ba37b960b11b60448201526064015b60405180910390fd5b806060015161040a5760405162461bcd60e51b815260206004820152600c60248201526b139bdd08185c1c1c9bdd995960a21b60448201526064016103c1565b6040805160a081018252868152336020820152808201869052606081018590526080810184905290516005906104419088906125b1565b908152604051602091819003820190208054600181018255600091825291902082518392600502909101908190610478908261261c565b5060208201516001820180546001600160a01b0319166001600160a01b03909216919091179055604082015160028201906104b3908261261c565b50606082015160038201906104c8908261261c565b50608082015160048201906104dd908261261c565b505050505050505050565b600060608080808080806104fc8a8a6126f1565b61050790600161270a565b9750876001600160401b0381111561052157610521611d9c565b60405190808252806020026020018201604052801561055457816020015b606081526020019060019003908161053f5790505b509650876001600160401b0381111561056f5761056f611d9c565b6040519080825280602002602001820160405280156105a257816020015b606081526020019060019003908161058d5790505b509550876001600160401b038111156105bd576105bd611d9c565b6040519080825280602002602001820160405280156105e6578160200160208202803683370190505b509450876001600160401b0381111561060157610601611d9c565b60405190808252806020026020018201604052801561062a578160200160208202803683370190505b509350876001600160401b0381111561064557610645611d9c565b60405190808252806020026020018201604052801561067857816020015b60608152602001906001900390816106635790505b509250876001600160401b0381111561069357610693611d9c565b6040519080825280602002602001820160405280156106bc578160200160208202803683370190505b509150876001600160401b038111156106d7576106d7611d9c565b604051908082528060200260200182016040528015610700578160200160208202803683370190505b50905060005b88811015610ade576000600361071c8d8461270a565b8154811061072c5761072c61271d565b90600052602060002001805461074190612577565b80601f016020809104026020016040519081016040528092919081815260200182805461076d90612577565b80156107ba5780601f1061078f576101008083540402835291602001916107ba565b820191906000526020600020905b81548152906001019060200180831161079d57829003601f168201915b5050505050905060006004826040516107d391906125b1565b90815260200160405180910390206040518060e00160405290816000820180546107fc90612577565b80601f016020809104026020016040519081016040528092919081815260200182805461082890612577565b80156108755780601f1061084a57610100808354040283529160200191610875565b820191906000526020600020905b81548152906001019060200180831161085857829003601f168201915b5050505050815260200160018201805461088e90612577565b80601f01602080910402602001604051908101604052809291908181526020018280546108ba90612577565b80156109075780601f106108dc57610100808354040283529160200191610907565b820191906000526020600020905b8154815290600101906020018083116108ea57829003601f168201915b50505050508152602001600282015481526020016003820154815260200160048201805461093490612577565b80601f016020809104026020016040519081016040528092919081815260200182805461096090612577565b80156109ad5780601f10610982576101008083540402835291602001916109ad565b820191906000526020600020905b81548152906001019060200180831161099057829003601f168201915b50505091835250506005820154602082015260069091015460ff16151560409091015280518b51919250908b90859081106109ea576109ea61271d565b60200260200101819052508060200151898481518110610a0c57610a0c61271d565b60200260200101819052508060400151888481518110610a2e57610a2e61271d565b6020026020010181815250508060600151878481518110610a5157610a5161271d565b6020026020010181815250508060800151868481518110610a7457610a7461271d565b60200260200101819052508060a00151858481518110610a9657610a9661271d565b6020026020010181815250508060c00151848481518110610ab957610ab961271d565b9115156020928302919091019091015250819050610ad681612733565b915050610706565b509295985092959890939650565b610b22604051806080016040528060006001600160a01b0316815260200160608152602001606081526020016000151581525090565b6001600160a01b038083166000908152600260209081526040918290208251608081019093528054909316825260018301805492939291840191610b6590612577565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9190612577565b8015610bde5780601f10610bb357610100808354040283529160200191610bde565b820191906000526020600020905b815481529060010190602001808311610bc157829003601f168201915b50505050508152602001600282018054610bf790612577565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2390612577565b8015610c705780601f10610c4557610100808354040283529160200191610c70565b820191906000526020600020905b815481529060010190602001808311610c5357829003601f168201915b50505091835250506003919091015460ff16151560209091015292915050565b604080516080810182523380825260208083018681528385018690526000606085018190529283526002909152929020815181546001600160a01b0319166001600160a01b0390911617815591519091906001820190610cf0908261261c565b5060408201516002820190610d05908261261c565b50606091909101516003909101805491151560ff1990921691909117905550506001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b03191633179055565b6000546001600160a01b03163314610dae5760405162461bcd60e51b81526020600482015260096024820152682737ba1030b236b4b760b91b60448201526064016103c1565b6001600160a01b03919091166000908152600260205260409020600301805460ff1916911515919091179055565b33600090815260026020908152604080832081516080810190925280546001600160a01b031682526001810180549293919291840191610e1b90612577565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4790612577565b8015610e945780601f10610e6957610100808354040283529160200191610e94565b820191906000526020600020905b815481529060010190602001808311610e7757829003601f168201915b50505050508152602001600282018054610ead90612577565b80601f0160208091040260200160405190810160405280929190818152602001828054610ed990612577565b8015610f265780601f10610efb57610100808354040283529160200191610f26565b820191906000526020600020905b815481529060010190602001808311610f0957829003601f168201915b50505091835250506003919091015460ff16151560209091015280519091506001600160a01b03163314610f895760405162461bcd60e51b815260206004820152600a6024820152692737ba103237b1ba37b960b11b60448201526064016103c1565b8060600151610fc95760405162461bcd60e51b815260206004820152600c60248201526b139bdd08185c1c1c9bdd995960a21b60448201526064016103c1565b600488604051610fd991906125b1565b9081526040519081900360200190208054610ff390612577565b905060000361106657600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b01611038898261261c565b508760048960405161104a91906125b1565b90815260405190819003602001902090611064908261261c565b505b8660048960405161107791906125b1565b90815260200160405180910390206001019081611094919061261c565b50856004896040516110a691906125b1565b908152602001604051809103902060020181905550846004896040516110cc91906125b1565b908152602001604051809103902060030181905550836004896040516110f291906125b1565b9081526020016040518091039020600401908161110f919061261c565b508260048960405161112191906125b1565b9081526020016040518091039020600501819055508160048960405161114791906125b1565b908152604051908190036020019020600601805491151560ff199092169190911790555050505050505050565b600060608080808461118688886126f1565b61119190600161270a565b90506000816001600160401b038111156111ad576111ad611d9c565b6040519080825280602002602001820160405280156111d6578160200160208202803683370190505b5090506000826001600160401b038111156111f3576111f3611d9c565b60405190808252806020026020018201604052801561122657816020015b60608152602001906001900390816112115790505b5090506000836001600160401b0381111561124357611243611d9c565b60405190808252806020026020018201604052801561127657816020015b60608152602001906001900390816112615790505b5090506000846001600160401b0381111561129357611293611d9c565b6040519080825280602002602001820160405280156112bc578160200160208202803683370190505b50905060005b8581101561151357600060016112d88f8461270a565b815481106112e8576112e861271d565b60009182526020808320909101546001600160a01b0390811680845260028352604080852081516080810190925280549093168152600183018054929650909384019161133490612577565b80601f016020809104026020016040519081016040528092919081815260200182805461136090612577565b80156113ad5780601f10611382576101008083540402835291602001916113ad565b820191906000526020600020905b81548152906001019060200180831161139057829003601f168201915b505050505081526020016002820180546113c690612577565b80601f01602080910402602001604051908101604052809291908181526020018280546113f290612577565b801561143f5780601f106114145761010080835404028352916020019161143f565b820191906000526020600020905b81548152906001019060200180831161142257829003601f168201915b50505091835250506003919091015460ff16151560209091015280518851919250908890859081106114735761147361271d565b60200260200101906001600160a01b031690816001600160a01b03168152505080604001518684815181106114aa576114aa61271d565b602002602001018190525080602001518584815181106114cc576114cc61271d565b602002602001018190525080606001518484815181106114ee576114ee61271d565b911515602092830291909101909101525081905061150b81612733565b9150506112c2565b50939b929a50909850965090945092505050565b6000546001600160a01b0316331461156d5760405162461bcd60e51b81526020600482015260096024820152682737ba1030b236b4b760b91b60448201526064016103c1565b6001600160a01b03838116600090815260026020526040902054166115ee57600180548082019091557fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0385166001600160a01b031991821681179092556000828152600260205260409020805490911690911790555b6001600160a01b0383166000908152600260205260409020600101611613838261261c565b506001600160a01b03831660009081526002602081905260409091200161163a828261261c565b50505050565b6116826040518060e001604052806060815260200160608152602001600081526020016000815260200160608152602001600081526020016000151581525090565b60048260405161169291906125b1565b90815260200160405180910390206040518060e00160405290816000820180546116bb90612577565b80601f01602080910402602001604051908101604052809291908181526020018280546116e790612577565b80156117345780601f1061170957610100808354040283529160200191611734565b820191906000526020600020905b81548152906001019060200180831161171757829003601f168201915b5050505050815260200160018201805461174d90612577565b80601f016020809104026020016040519081016040528092919081815260200182805461177990612577565b80156117c65780601f1061179b576101008083540402835291602001916117c6565b820191906000526020600020905b8154815290600101906020018083116117a957829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820180546117f390612577565b80601f016020809104026020016040519081016040528092919081815260200182805461181f90612577565b801561186c5780601f106118415761010080835404028352916020019161186c565b820191906000526020600020905b81548152906001019060200180831161184f57829003601f168201915b50505091835250506005820154602082015260069091015460ff16151560409091015292915050565b60606005826040516118a791906125b1565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020016000905b82821015611b6657838290600052602060002090600502016040518060a001604052908160008201805461190890612577565b80601f016020809104026020016040519081016040528092919081815260200182805461193490612577565b80156119815780601f1061195657610100808354040283529160200191611981565b820191906000526020600020905b81548152906001019060200180831161196457829003601f168201915b505050918352505060018201546001600160a01b031660208201526002820180546040909201916119b190612577565b80601f01602080910402602001604051908101604052809291908181526020018280546119dd90612577565b8015611a2a5780601f106119ff57610100808354040283529160200191611a2a565b820191906000526020600020905b815481529060010190602001808311611a0d57829003601f168201915b50505050508152602001600382018054611a4390612577565b80601f0160208091040260200160405190810160405280929190818152602001828054611a6f90612577565b8015611abc5780601f10611a9157610100808354040283529160200191611abc565b820191906000526020600020905b815481529060010190602001808311611a9f57829003601f168201915b50505050508152602001600482018054611ad590612577565b80601f0160208091040260200160405190810160405280929190818152602001828054611b0190612577565b8015611b4e5780601f10611b2357610100808354040283529160200191611b4e565b820191906000526020600020905b815481529060010190602001808311611b3157829003601f168201915b505050505081525050815260200190600101906118d5565b505050509050919050565b6000546060906001600160a01b03163303611ba6575060408051808201909152600581526430b236b4b760d91b602082015290565b33600090815260026020908152604080832081516080810190925280546001600160a01b031682526001810180549293919291840191611be590612577565b80601f0160208091040260200160405190810160405280929190818152602001828054611c1190612577565b8015611c5e5780601f10611c3357610100808354040283529160200191611c5e565b820191906000526020600020905b815481529060010190602001808311611c4157829003601f168201915b50505050508152602001600282018054611c7790612577565b80601f0160208091040260200160405190810160405280929190818152602001828054611ca390612577565b8015611cf05780601f10611cc557610100808354040283529160200191611cf0565b820191906000526020600020905b815481529060010190602001808311611cd357829003601f168201915b50505091835250506003919091015460ff16151560209091015280519091506001600160a01b0316611d4457505060408051808201909152600c81526b1d5b9c9959da5cdd195c995960a21b602082015290565b60608101511515600103611d76575050604080518082019091526008815267185c1c1c9bdd995960c21b602082015290565b505060408051808201909152600a8152691d5b985c1c1c9bdd995960b21b602082015290565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611dc357600080fd5b81356001600160401b0380821115611ddd57611ddd611d9c565b604051601f8301601f19908116603f01168101908282118183101715611e0557611e05611d9c565b81604052838152866020858801011115611e1e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215611e5457600080fd5b84356001600160401b0380821115611e6b57600080fd5b611e7788838901611db2565b95506020870135915080821115611e8d57600080fd5b611e9988838901611db2565b94506040870135915080821115611eaf57600080fd5b611ebb88838901611db2565b93506060870135915080821115611ed157600080fd5b50611ede87828801611db2565b91505092959194509250565b60008060408385031215611efd57600080fd5b50508035926020909101359150565b60005b83811015611f27578181015183820152602001611f0f565b50506000910152565b60008151808452611f48816020860160208601611f0c565b601f01601f19169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015611fa757601f19868403018952611f95838351611f30565b98840198925090830190600101611f79565b5090979650505050505050565b600081518084526020808501945080840160005b83811015611fe457815187529582019590820190600101611fc8565b509495945050505050565b600081518084526020808501945080840160005b83811015611fe4578151151587529582019590820190600101612003565b60006101008a835280602084015261203b8184018b611f5c565b9050828103604084015261204f818a611f5c565b905082810360608401526120638189611fb4565b905082810360808401526120778188611fb4565b905082810360a084015261208b8187611f5c565b905082810360c084015261209f8186611fb4565b905082810360e08401526120b38185611fef565b9b9a5050505050505050505050565b80356001600160a01b03811681146120d957600080fd5b919050565b6000602082840312156120f057600080fd5b6120f9826120c2565b9392505050565b602080825282516001600160a01b0316828201528201516080604083015260009061212e60a0840182611f30565b90506040840151601f1984830301606085015261214b8282611f30565b9150506060840151151560808401528091505092915050565b6000806040838503121561217757600080fd5b82356001600160401b038082111561218e57600080fd5b61219a86838701611db2565b935060208501359150808211156121b057600080fd5b506121bd85828601611db2565b9150509250929050565b803580151581146120d957600080fd5b600080604083850312156121ea57600080fd5b6121f3836120c2565b9150612201602084016121c7565b90509250929050565b600080600080600080600060e0888a03121561222557600080fd5b87356001600160401b038082111561223c57600080fd5b6122488b838c01611db2565b985060208a013591508082111561225e57600080fd5b61226a8b838c01611db2565b975060408a0135965060608a0135955060808a013591508082111561228e57600080fd5b5061229b8a828b01611db2565b93505060a088013591506122b160c089016121c7565b905092959891949750929550565b600060a08201878352602060a08185015281885180845260c086019150828a01935060005b818110156123095784516001600160a01b0316835293830193918301916001016122e4565b5050848103604086015261231d8189611f5c565b9250505082810360608401526123338186611f5c565b905082810360808401526123478185611fef565b98975050505050505050565b60008060006060848603121561236857600080fd5b612371846120c2565b925060208401356001600160401b038082111561238d57600080fd5b61239987838801611db2565b935060408601359150808211156123af57600080fd5b506123bc86828701611db2565b9150509250925092565b6000602082840312156123d857600080fd5b81356001600160401b038111156123ee57600080fd5b6123fa84828501611db2565b949350505050565b602081526000825160e0602084015261241f610100840182611f30565b90506020840151601f198085840301604086015261243d8383611f30565b9250604086015160608601526060860151608086015260808601519150808584030160a08601525061246f8282611f30565b91505060a084015160c084015260c0840151151560e08401528091505092915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561255657603f19898403018552815160a081518186526124df82870182611f30565b838b01516001600160a01b0316878c0152898401518782038b890152909250905061250a8282611f30565b915050606080830151868303828801526125248382611f30565b92505050608080830151925085820381870152506125428183611f30565b9689019694505050908601906001016124b9565b509098975050505050505050565b6020815260006120f96020830184611f30565b600181811c9082168061258b57607f821691505b6020821081036125ab57634e487b7160e01b600052602260045260246000fd5b50919050565b600082516125c3818460208701611f0c565b9190910192915050565b601f82111561261757600081815260208120601f850160051c810160208610156125f45750805b601f850160051c820191505b8181101561261357828155600101612600565b5050505b505050565b81516001600160401b0381111561263557612635611d9c565b612649816126438454612577565b846125cd565b602080601f83116001811461267e57600084156126665750858301515b600019600386901b1c1916600185901b178555612613565b600085815260208120601f198616915b828110156126ad5788860151825594840194600190910190840161268e565b50858210156126cb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b81810381811115612704576127046126db565b92915050565b80820180821115612704576127046126db565b634e487b7160e01b600052603260045260246000fd5b600060018201612745576127456126db565b506001019056fea26469706673582212204a4c8b991ef69804a257a18517df57c9d48e4c1d5470adeff085c2c8d22d2c4164736f6c63430008150033";

type ExampleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Example__factory extends ContractFactory {
  constructor(...args: ExampleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Example & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Example__factory {
    return super.connect(runner) as Example__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleInterface {
    return new Interface(_abi) as ExampleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Example {
    return new Contract(address, _abi, runner) as unknown as Example;
  }
}
