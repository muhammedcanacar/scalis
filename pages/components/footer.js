function Footer() {
	return (
		<div>
			<footer class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
					<div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
						<a className="flex text-5xl font-bold items-center text-indigo-600 mb-4 md:mb-0">
							scalis
						</a>
					</div>
					<div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
						<div class="ml-4 lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 class="text-xl font-medium text-gray-900 tracking-widest mb-3">
								Sayfalar
							</h2>
							<nav class="list-none mb-10">
								<li className="mb-1">
									<a class="text-indigo-500 font-medium cursor-pointer hover:text-indigo-700">
										Anasayfa
									</a>
								</li>
								<li className="mb-1">
									<a class="text-gray-500 font-medium cursor-pointer hover:text-indigo-700">
										Referanslar
									</a>
								</li>
								<li className="mb-1">
									<a class="text-gray-500 font-medium cursor-pointer hover:text-indigo-700">
										İletişim
									</a>
								</li>
							</nav>
						</div>
						<div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200" />
					</div>
					<div class="ml-4 lg:w-1/4 md:w-1/2 w-full px-4">
							<h2 class="font-medium text-gray-900 text-lg mb-3">
                            Yeniliklerden haberdar mı olmak istiyorsun?
							</h2>
                            <p className="leading-relaxed text-sm py-4">Yeni özelliklerimizden ve uygulamalarımızdan haberdar olmak için abone olun.</p>
							<div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
								<div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
									<label
										for="footer-field"
										class="leading-7 text-sm text-gray-700"
									>
										E-mail
									</label>
									<input
										type="email"
										id="email"
										name="emali"
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
								<button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-gray-200 bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded">
									Abone Ol
								</button>
							</div>
						</div>
					</div>
				<div class="bg-gray-100">
					<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p class="text-gray-500 text-sm text-center sm:text-left">
							Copyright © 2021 Scalis
						</p>
						<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
							<a href="mailto:scalis.co@outlook.com" target="_blank"  class="text-gray-500 cursor-pointer hover:text-red-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</a>
							<a href="https://twitter.com/Scalis_co" target="_blank"  class="ml-3 text-gray-500 hover:text-blue-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a href="https://www.instagram.com/scalis.co/" target="_blank" class="ml-3 text-gray-500 hover:text-blue-700">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
                            </a>
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
