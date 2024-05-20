import { useMemo, useState } from "react";
import BlogCard from "./../../../components/cards/blog3";

const News2 = () => {
  const [filter, setFilter] = useState(null);

  const blogs = useMemo(() => {
    return [
      

      {
        title: "A Developer’s Primer to TON Ecosystem",
        description:
        "TON is rapidly gaining popularity: Notcoin now boasts 20 million users, TON Society has just launched crypto’s biggest-ever user onboarding campaign called . already published a guide to TON. However, this post is designed as a primer for developers who may have heard about Web3, blockchain, TON, and Telegram, and want to get involved but aren’t sure where to begin.",
        date: "2021-08-12",
        category: "news",
        image: "src/assets/images/NewsDetail.png",
        estimated_time: "12 min read",
        companylogo:"src/assets/images/CompanyLogo.svg",
        company:"TON Innovators",
      },
      
    ];
  }, []);

  return (
    <section className="space-y-8">
      
      <div className="flex lg:flex-nowrap flex-wrap my-5 justify-center">
        <BlogCard {...blogs[0]} />
        
        </div>

    </section>
  );
};

export default News2;
