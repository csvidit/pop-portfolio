import Nav from "./Nav";

const Header = () => {
	return (
		<header className="flex flex-row gap-4 lg:flex-col w-screen lg:w-1/6 h-full lg:h-screen sticky">
			<Nav />
		</header>
	);
};

export default Header;
