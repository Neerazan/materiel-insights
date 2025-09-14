import logo from "@/assets/images/logo.png";
import assets from "@/assets/icons/assets.png";
import parts from "@/assets/icons/cogs.png";
import structure from "@/assets/icons/structure.png";
import drawings from "@/assets/icons/compass.png";

export const drawingData = [
  {
    "id": "1e7f3a2e-8c4b-5d6f-9a1b-2c3d4e5f6a7b",
    "number": "Drawing-1",
    "name": "Hydraulic Pump Assembly",
    "description": "This is a drawing of the hydraulic pump assembly",
  },
  {
    "id": "2b8f4c3d-9d5e-6f7a-0b1c-3d4e5f6a7b8c",
    "number": "Drawing-2",
    "name": "Fuel Control Valve",
    "description": "This is a drawing of the fuel control valve",
  },
  {
    "id": "3c9f5d4e-0e6f-7a8b-1c2d-4e5f6a7b8c9d",
    "number": "Drawing-3",
    "name": "Landing Gear Strut",
    "description": "This is a drawing of the landing gear strut",
  },
  {
    "id": "4d0f6e5f-1f7a-8b9c-2d3e-5f6a7b8c9d0e",
    "number": "Drawing-4",
    "name": "Avionics Control Panel",
    "description": "This is a drawing of the avionics control panel",
  },
  {
    "id": "5e1f7g6h-2g8b-9c0d-3e4f-6a7b8c9d0e1f",
    "number": "Drawing-5",
    "name": "Engine Turbine Blade",
    "description": "This is a drawing of the engine turbine blade",
  },
  {
    "id": "6f2g8h7i-3h9c-0d1e-4f5g-7b8c9d0e1f2g",
    "number": "Drawing-6",
    "name": "Oxygen Supply Regulator",
    "description": "This is a drawing of the oxygen supply regulator",
  },
  {
    "id": "7g3h9i8j-4i0d-1e2f-5g6h-8c9d0e1f2g3h",
    "number": "Drawing-7",
    "name": "Cockpit Display Unit",
    "description": "This is a drawing of the cockpit display unit",
  },
  {
    "id": "8h4i0j9k-5j1e-2f3g-6h7i-9d0e1f2g3h4i",
    "number": "Drawing-8",
    "name": "Electronic Power Module",
    "description": "This is a drawing of the electronic power module",
  },
  {
    "id": "9i5j1k0l-6k2f-3g4h-7i8j-0e1f2g3h4i5j",
    "number": "Drawing-9",
    "name": "Aircraft Wing Panel",
    "description": "This is a drawing of the aircraft wing panel",
  }
]

export const partsData = [
  {
    "id": "1e7f3a2e-8c4b-5d6f-9a1b-2c3d4e5f6a7b",
    "r_num": 1,
    "partNumber": "PN-10001",
    "cageCode": "1A23B",
    "name": "Hydraulic Pump Assembly",
    "distributionStatement": "Approved for public release",
    "nsn": "1234-01-567-8901",
    "uoc": "UOC-01",
    "quantity": "50",
    "status": "Available",
    "supplierName": "AeroTech Inc.",
    "leadTime": "14 days",
    "cost": "$1500",
    "source": "UserCreated"
  },
  {
    "id": "2b8f4c3d-9d5e-6f7a-0b1c-3d4e5f6a7b8c",
    "r_num": 2,
    "partNumber": "PN-10002",
    "cageCode": "2C45D",
    "name": "Fuel Control Valve",
    "distributionStatement": "Restricted to DoD use only",
    "nsn": "2345-01-678-9012",
    "uoc": "UOC-02",
    "quantity": "20",
    "status": "On Order",
    "supplierName": "DefenseParts Co.",
    "leadTime": "30 days",
    "cost": "$850",
    "source": "ExcelOrCSVImport"
  },
  {
    "id": "3c9f5d4e-0e6f-7a8b-1c2d-4e5f6a7b8c9d",
    "r_num": 3,
    "partNumber": "PN-10003",
    "cageCode": "3E56F",
    "name": "Landing Gear Strut",
    "distributionStatement": "Controlled Distribution",
    "nsn": "3456-01-789-0123",
    "uoc": "UOC-03",
    "quantity": "5",
    "status": "Critical Shortage",
    "supplierName": "SkyWorks Ltd.",
    "leadTime": "45 days",
    "cost": "$7500",
    "source": "UserCreated"
  },
  {
    "id": "4d0f6e5f-1f7a-8b9c-2d3e-5f6a7b8c9d0e",
    "r_num": 4,
    "partNumber": "PN-10004",
    "cageCode": "4G67H",
    "name": "Avionics Control Panel",
    "distributionStatement": "Approved for public release",
    "nsn": "4567-01-890-1234",
    "uoc": "UOC-04",
    "quantity": "12",
    "status": "Available",
    "supplierName": "AeroSystems Corp.",
    "leadTime": "20 days",
    "cost": "$4200",
    "source": "UserCreated"
  },
  {
    "id": "5e1f7g6h-2g8b-9c0d-3e4f-6a7b8c9d0e1f",
    "r_num": 5,
    "partNumber": "PN-10005",
    "cageCode": "5I78J",
    "name": "Engine Turbine Blade",
    "distributionStatement": "Export Controlled",
    "nsn": "5678-01-901-2345",
    "uoc": "UOC-05",
    "quantity": "100",
    "status": "In Production",
    "supplierName": "Global Aero Parts",
    "leadTime": "90 days",
    "cost": "$2500",
    "source": "ExcelOrCSVImport"
  },
  {
    "id": "6f2g8h7i-3h9c-0d1e-4f5g-7b8c9d0e1f2g",
    "r_num": 6,
    "partNumber": "PN-10006",
    "cageCode": "6K89L",
    "name": "Oxygen Supply Regulator",
    "distributionStatement": "Restricted to DoD use only",
    "nsn": "6789-01-012-3456",
    "uoc": "UOC-06",
    "quantity": "35",
    "status": "Available",
    "supplierName": "SafeAir Systems",
    "leadTime": "25 days",
    "cost": "$1100",
    "source": "UserCreated"
  },
  {
    "id": "7g3h9i8j-4i0d-1e2f-5g6h-8c9d0e1f2g3h",
    "r_num": 7,
    "partNumber": "PN-10007",
    "cageCode": "7M90N",
    "name": "Cockpit Display Unit",
    "distributionStatement": "Controlled Distribution",
    "nsn": "7890-01-123-4567",
    "uoc": "UOC-07",
    "quantity": "8",
    "status": "On Order",
    "supplierName": "VisionTech Ltd.",
    "leadTime": "60 days",
    "cost": "$9800",
    "source": "ExcelOrCSVImport"
  },
  {
    "id": "8h4i0j9k-5j1e-2f3g-6h7i-9d0e1f2g3h4i",
    "r_num": 8,
    "partNumber": "PN-10008",
    "cageCode": "8O12P",
    "name": "Electronic Power Module",
    "distributionStatement": "Approved for public release",
    "nsn": "8901-01-234-5678",
    "uoc": "UOC-08",
    "quantity": "18",
    "status": "Available",
    "supplierName": "PowerAero Systems",
    "leadTime": "40 days",
    "cost": "$3100",
    "source": "UserCreated"
  },
  {
    "id": "9i5j1k0l-6k2f-3g4h-7i8j-0e1f2g3h4i5j",
    "r_num": 9,
    "partNumber": "PN-10009",
    "cageCode": "9Q23R",
    "name": "Aircraft Wing Panel",
    "distributionStatement": "Export Controlled",
    "nsn": "9012-01-345-6789",
    "uoc": "UOC-09",
    "quantity": "3",
    "status": "Critical Shortage",
    "supplierName": "AeroStructures Inc.",
    "leadTime": "120 days",
    "cost": "$25000",
    "source": "ExcelOrCSVImport"
  },
  {
    "id": "0j6k2l1m-7l3g-4h5i-8j9k-1f2g3h4i5j6k",
    "r_num": 10,
    "partNumber": "PN-10010",
    "cageCode": "0S34T",
    "name": "Flight Data Recorder",
    "distributionStatement": "Restricted to DoD use only",
    "nsn": "0123-01-456-7890",
    "uoc": "UOC-10",
    "quantity": "6",
    "status": "Available",
    "supplierName": "SecureFlight Systems",
    "leadTime": "70 days",
    "cost": "$15000",
    "source": "UserCreated"
  }
]

export const icons = {
  assets,
  parts,
  structure,
  drawings,
}

export const images = {
  logo,
}