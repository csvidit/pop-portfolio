const PageContent = (props: { children: React.ReactNode }) => {
	return <main className="flex flex-col gap-4">{props.children}</main>;
};

export default PageContent;
