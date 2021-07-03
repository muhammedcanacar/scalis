function Feature() {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto flex flex-wrap">
				<h3 className="mb-4 text-4xl border-b-2 py-4 text-gray-700 border-gray-300">
					Nasıl Çalışıyoruz?
				</h3>
				<div className="flex flex-wrap -m-4">
					<div className="p-4 lg:w-1/3 md:w-full">
						<div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
							<div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-50 text-gray-600 flex-shrink-0">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-8 h-8"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									İstediğiniz tasarımı yüklüyorsunuz.
								</h2>
								<p className="leading-relaxed text-base">
									Sizler için 2 alan hazırladık. İlki tasarımlarınızı
									yükleyebileceğiniz bir alan. İkinicisi ise tasarım
									yapamazsanız isteklerinizi detaylıca yazabileceğiniz bir alan.
								</p>
							</div>
						</div>
					</div>
					<div className="p-4 lg:w-1/3 md:w-full">
						<div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
							<div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-50 text-gray-600 flex-shrink-0">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-10 h-10"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
									<path
										fillRule="evenodd"
										d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									İncelemeleri yapıyoruz.
								</h2>
								<p className="leading-relaxed text-base">
									Tasarım örneğini ve açıklamalarını inceleyerek uygun ölçüde fiyat çıkarıyoruz. Formu gönderdiğiniz
                                    mail adresinize yeni bir mail gönderiyoruz , geri dönüş aşaması 1-3 arasında sürebilir. Spam klasörünü kontrol etmeyi unutmayın.
								</p>
							</div>
						</div>
					</div>
					<div className="p-4 lg:w-1/3 md:w-full">
						<div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
							<div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-50 text-gray-600 flex-shrink-0">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-9 w-9"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									Geri dönüş ve projeye başlıyoruz.
								</h2>
								<p className="leading-relaxed text-base">
									Geri dönüş mailinden sonra her iki taraf için anlaşma sağlandığında proje yapım aşamasına geçiliyor.
                                    Bu süreç müşterinin isteğine göre değişebilir.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Feature;
