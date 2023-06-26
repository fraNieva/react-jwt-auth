import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<header>
				<p>this is the layout header</p>
			</header>
			<main className="App">
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
