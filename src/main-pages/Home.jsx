import { useState } from "react";
import { NEWSSERVICEAPI } from "../services/newsapiservice";
import { Link } from "react-router-dom";

const Home = () => {
    const [newsInfo, setNewsInfo] = useState([]);
    const [error, setError] = useState("");

    //TODO: Logic to get API data for News -
    const handleNewsResponse = async () => {
        try {
            const newsData = await NEWSSERVICEAPI(
                `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${import.meta.env.VITE_NEWS_API_KEY}`,
            );

            if (newsData.articles) {
                setNewsInfo(newsData.articles);
            }
        } catch (error) {
            setError("Your Network connection is poor or disconnected.");
            console.log("Something went wrong.", error);
        }
    };

    return (
        <main className="py-20 min-h-screen">
            <section className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {newsInfo.map((news, idx) => (
                        <article
                            key={idx}
                            className="flex flex-col bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image Section */}
                            {news.image && (
                                <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt="News"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="flex flex-col gap-2 p-4 grow">
                                <h1 className="text-base md:text-lg font-semibold text-red-500 line-clamp-2">
                                    {news.title}
                                </h1>

                                <p className="text-sm text-gray-600 line-clamp-3">
                                    {news.description}
                                </p>

                                {/* CTA spacer for future scalability */}
                                <div className="mt-auto pt-2 flex flex-row justify-between items-center">
                                    <Link className="text-base text-black" to={news.url} target="_blank">
                                        Read more →
                                    </Link>

                                    <span className="text-black text-xs">{news.publishedAt}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {error && (
                <span className="text-red-500 font-mono font-bolder">{error}</span>
            )}

            <button
                className="bg-yellow-500 text-black px-3 py-2 cursor-pointer rounded-xl mt-20 top-3 left-3 fixed"
                onClick={handleNewsResponse}>
                Get News
            </button>
        </main>
    );
};

export default Home;

// {newsList.map((news, index) => (
//     <article
//       key={index}
//       className="w-full p-4 rounded-xl border flex flex-col gap-2"
//     >
//       <h2 className="text-lg font-semibold text-red-500">
//         {news.title}
//       </h2>

//       {news.image && (
//         <img
//           src={news.image}
//           alt="News"
//           className="w-full h-48 object-cover rounded-lg"
//         />
//       )}

//       <p className="text-sm text-gray-700">
//         {news.description}
//       </p>
//     </article>
//   ))}
