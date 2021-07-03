import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

function Hero() {
	return (
		<div>
			<Grid className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
					<Grid item md={7} className="lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="text-6xl leading-tight mb-4 font-semibold text-gray-700">
							Hayallerini gerçeğe yansıtalım.
						</h1>
						<p className="paragraph-hero mb-8">
							Özgün bir içerik oluşturmak mı istiyorsun? Veya haber yazıları yazıp kendini akışını kurmak mı?
							Biz hayalini gerçekleştirmek için buradayız. Hemen bizimle iletişime geç ve dilediğin websiteyi sana özgün bir biçimde sunalım.
						</p>
						<div className="flex justify-start">
							<button className="inline-flex text-gray-200 bg-indigo-800 hover:bg-indigo-900 border-0 py-2 px-8 focus:outline-none rounded text-lg">
								Hemen Teklif Al
							</button>
							<button className="inline-flex ml-4 hero-buttons text-gray-500 py-2 px-8 focus:outline-none rounded text-lg">
								Neden Scalis?
							</button>
						</div>
					</Grid>
					<Grid item md={5} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img className="hero-image object-cover object-center" src="/hero-image.svg" alt="hero img" />
					</Grid>
				</div>
			</Grid>
		</div>
	);
}

export default Hero;
