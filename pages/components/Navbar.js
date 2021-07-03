function Navbar() {
	return (
		<div>
			<header className="text-gray-600 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
						<span className="text-4xl text-indigo-600">scalis</span>
					</a>
					<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
						<a className="nav-link">Ana Sayfa</a>
						<a className="nav-link">Referanslar</a>
						<a className="nav-link">İletişim</a>
					</nav>
					<button className="inline-flex items-center btn bg-indigo-800 text-gray-200 border-indigo-400 hover:bg-indigo-700 transition-all border-0 py-3 px-8 focus:outline-none rounded text-base mt-4 md:mt-0">
						Teklif Al
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
					</button>
				</div>
			</header>
		</div>
	);
}

export default Navbar;
