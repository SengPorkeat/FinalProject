import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../assets/newsPage/HeroSectionNews.jpg";
import NewsComponent1 from "../../components/newsComponent/NewsComponent1";
import NewsComponent2 from "../../components/newsComponent/NewsComponent2";
import Carousel from "react-multi-carousel";
import { responsive } from "../../redux/newsData";
import "react-multi-carousel/lib/styles.css";
import "../../index.css";
import {
  fetchContents,
  selectAllNews,
} from "../../redux/feature/content/contentSlice";
import { useNavigate } from "react-router-dom";

export default function News() {
  const news = useSelector(selectAllNews);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContents());
  }, [dispatch]);

  // Make a shallow copy of the news array before sorting it
  const sortedRecentNews = [...news].sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  );

  // handle news page detail
  const handleNewsDetail = (news) => {
    navigate("/news-detail", { state: news });
  };

  // map data for Component_2
  const recentNews = sortedRecentNews.slice(0, 6).map((item, index) => (
    <NewsComponent2
      key={index}
      image={item.thumbnail}
      title={item.title}
      released_date={item.updated_at}
      view={item.view_count}
      handleNewsDetail={() => handleNewsDetail(item)} // pass the handler
    />
  ));
  //   console.log("Recent News: ", recentNews);

  // map data for Component_1
  const topNews = sortedRecentNews.slice(6).map((item, index) => (
    <NewsComponent1
      key={index}
      image={item.thumbnail}
      title={item.title}
      released_date={item.updated_at}
      handleNewsDetail={() => handleNewsDetail(item)} // pass the handler
      className={index === 0 ? "xl:col-span-2 xl:row-span-2" : ""}
    />
  ));
  //   console.log("Top News: ", topNews);

  return (
    <>
      <header className="relative">
        <img
          className="object-cover h-[585px] w-full top-0 -z-30"
          src={Hero}
          alt="Background image description"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <div className="w-10/12 mx-auto">
          <div className="absolute top-[430px] text-white font-extrabold">
            <div className="inline-block">
              <h1 className="text-[56px]">ព័ត៌មានកីឡាថ្មីៗ</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="News flex justify-center w-11/12 items-center flex-col gap-5 mx-auto p-5 pb-20">
        {/* section 1: Top News */}
        <section className="w-full h-auto">
          <h2 className="text-center text-4xl text-[#172554] font-bold mt-20 mb-7 ">
            ព័ត៌មានល្បីៗ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full h-auto mx-auto">
            {topNews}
          </div>
        </section>

        {/* section 2: Recent News */}
        <section className="w-full h-auto">
          <h2 className="text-center text-4xl text-[#172554] font-bold m-7 ">
            ព័ត៌មានថ្មីៗ
          </h2>
          <div
            style={{
              paddingBottom: "30px",
              position: "relative",
            }}
          >
            <Carousel
              responsive={responsive}
              showDots={true}
              renderDotsOutside={true}
              swipeable={true}
            >
              {recentNews}
            </Carousel>
          </div>
        </section>
      </div>
    </>
  );
}
