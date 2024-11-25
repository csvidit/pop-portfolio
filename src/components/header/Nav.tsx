import { nav_data } from "@/data/nav";
import NavItem from "./NavItem";

const Nav = () => {
	return (
		<nav className="w-screen lg:w-full">
			<ul className="flex flex-row lg:flex-col gap-4 w-full">
				{nav_data.map((item) => (
					<NavItem key={item.id} {...item} />
				))}
			</ul>
		</nav>
	);
};

export default Nav;
