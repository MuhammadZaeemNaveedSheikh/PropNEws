import { useMemo, useState } from "react";
import BlogCard from "./../../../components/cards/blog2a";

const Posts = () => {
  const [filter, setFilter] = useState(null);

  const blogs = useMemo(() => {
    return [
      {
        title:
          "A Short Introduction to Tokens on The Open Network",
        description:
          "Learn about tokens and NFTs on TON and discover where to buy and store them in this…",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
        company: "TON Memelandia ",
        companylogo: "src/assets/images/CompanyLogo.svg",
      },
      {
        title: "The Architecture Behind The Open Network",
        description:
          "Learn about tokens and NFTs on TON and discover where to buy and store them in this…",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
        company: "TON Memelandia ",
        companylogo: "src/assets/images/CompanyLogo.svg",
      },

    ];
  }, []);

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 content-center justify-center">
        <BlogCard {...blogs[0]} />
        <BlogCard {...blogs[1]} />
      </div>
    </section>

  );
};

export default Posts;
