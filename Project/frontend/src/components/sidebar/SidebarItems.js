import { MdContentPasteSearch, MdInsights } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { TbUserPlus } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { FaPaw } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { BsPalette2 } from "react-icons/bs";
import { CiMedicalCross } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaSyringe } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { MdOutlineInsights } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";

import { BsPeopleFill } from "react-icons/bs";
import { MdHolidayVillage } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
// main function icons
import { AiFillApi } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { BiPlusMedical } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

//staff
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";


const SidebarItems = [
	{
		id: 1000,
		icon: <BsPalette2 />,
		text: "Inventory Management",
		nestedFunctions: [
			{
				id: 100,
				link: "/inventory/overview",
				nestedItemicon: <MdContentPasteSearch />,
				nestedItemtext: "Overview",
			},

			{
				id: 101,
				link: "/inventory/add-item",
				nestedItemicon: <MdLibraryAdd />,
				nestedItemtext: "Add new item",
			},

			{
				id: 102,
				link: "/component-3",
				nestedItemicon: <ImSearch />,
				nestedItemtext: "Search inventory",
			},

			{
				id: 103,
				link: "/inventory/manage-inventory",
				nestedItemicon: <MdOutlineInventory2 />,
				nestedItemtext: "Manage inventory",
			},

			{
				id: 104,
				link: "/component-5",
				nestedItemicon: <BiCategoryAlt />,
				nestedItemtext: "Release items",
			},

			{
				id: 105,
				link: "/component-6",
				nestedItemicon: <TbUserPlus />,
				nestedItemtext: "Add supplier",
			},

			{
				id: 106,
				link: "/component-7",
				nestedItemicon: <TbUser />,
				nestedItemtext: "Manage suppliers",
			},
		],
	},

	{
		id: 2000,
		icon: <BiStoreAlt />,
		text: "Product Management",
		nestedFunctions: [
			{
				id: 200,
				link: "/products/manageProducts",
				nestedItemicon: <BsFillBoxSeamFill />,
				nestedItemtext: "Manage products",
			},
			{
				id: 201,
				link: "/products/addProduct",
				nestedItemicon: <MdLibraryAdd />,
				nestedItemtext: "Add new item",
			},
			{
				id: 202,
				link: "/orders",
				nestedItemicon: <BsFillCartFill />,
				nestedItemtext: "Orders",
			},

			{
				id: 203,
				link: "/insights",
				nestedItemicon: <MdInsights />,
				nestedItemtext: "Insights",
			},
		],
	},

	{
		id: 3000,
		icon: <IoIosPeople />,
		text: "Staff Management",
		nestedFunctions: [
			{
				id: 300,
				link: "/admin/staff/AddStaff",
				nestedItemicon: <AiOutlineUserAdd />,
				nestedItemtext: "Add Staff",
			},

			{
				id: 301,
				link: "/admin/leave/AddLeave",
				nestedItemicon: <FaWpforms />,
				nestedItemtext: "Add Leaves",
			},

			{
				id: 302,
				link: "/admin/payroll/AddPayroll",
				nestedItemicon: <GiTakeMyMoney />,
				nestedItemtext: "Add Payrolls",
			},

			{
				id: 303,
				link: "/admin/staff/ManageStaff",
				nestedItemicon: <BsPeopleFill />,
				nestedItemtext: "Manage Staff",
			},

			{
				id: 304,
				link: "/admin/leave/ManageLeave",
				nestedItemicon: <MdHolidayVillage />,
				nestedItemtext: "Manage Leaves",
			},

			{
				id: 305,
				link: "/admin/payroll/ManagePayroll",
				nestedItemicon: <GiReceiveMoney />,
				nestedItemtext: "Manage Payrolls",
			},
		],
	},

	{
		id: 4000,
		icon: <FaPaw />,
		text: "Pet Management",
		nestedFunctions: [
			{
				id: 400,
				link: "/products/compo-1",
				nestedItemicon: <GiArchiveRegister />,
				nestedItemtext: "Register",
			},

			{
				id: 401,
				link: "/products/compo-1",
				nestedItemicon: <FaSyringe />,
				nestedItemtext: "Treatments",
			},
		],
	},

	{
		id: 5000,
		icon: <MdOutlineHomeRepairService />,
		text: "Service Management",
		nestedFunctions: [
			{
				id: 500,
				link: "/products/compo-1",
				nestedItemicon: <MdMedicalServices />,
				nestedItemtext: "Service Information",
			},

			{
				id: 501,
				link: "/products/compo-1",
				nestedItemicon: <MdDesignServices />,
				nestedItemtext: "Service Records",
			},
		],
	},

	{
		id: 6000,
		icon: <BiPlusMedical />,
		text: "Vet. Management",
		nestedFunctions: [
			{
				id: 600,
				link: "/products/compo-1",
				nestedItemicon: <BsFillBoxSeamFill />,
				nestedItemtext: "Products",
			},

			{
				id: 601,
				link: "/products/compo-1",
				nestedItemicon: <BsFillCartFill />,
				nestedItemtext: "Orders",
			},

			{
				id: 602,
				link: "/products/compo-1",
				nestedItemicon: <MdInsights />,
				nestedItemtext: "Insights",
			},
		],
	},

	{
		id: 7000,
		icon: <IoMdPerson />,
		text: "CustomerManagement",
		nestedFunctions: [
			{
				id: 700,
				link: "",
				nestedItemicon: <BsFillBoxSeamFill />,
				nestedItemtext: "Products",
			},

			{
				id: 701,
				link: "",
				nestedItemicon: <BsFillCartFill />,
				nestedItemtext: "Orders",
			},

			{
				id: 702,
				link: "",
				nestedItemicon: <MdInsights />,
				nestedItemtext: "Insights",
			},
		],
	},

	{
		id: 800,
		icon: <TbTruckDelivery />,
		text: "Delivery Management",
		nestedFunctions: [
			{
				id: 800,
				link: "",
				nestedItemicon: <MdSell />,
				nestedItemtext: "Order Management",
			},

			{
				id: 801,
				link: "",
				nestedItemicon: <MdDeliveryDining />,
				nestedItemtext: "Driver Management",
			},

			{
				id: 802,
				link: "",
				nestedItemicon: <SiGoogleanalytics />,
				nestedItemtext: "Analytics",
			},
		],
	},
];

export default SidebarItems;