import { Link } from "react-router-dom";
import Menu from "../../../../components/menu";
import { useMemo, useState } from "react";
import PrimaryBlogCard from "../../../../components/cards/primary_blog";
import BlogCard from "../../../../components/cards/blog";
import menu_items from "./config";

const News = () => {
  const [filter, setFilter] = useState(null);

  const blogs = useMemo(() => {
    return [
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
      },
      {
        title: "How to become a developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
      },
      {
        title: "How to become a developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
      },
    ];
  }, []);

  return (
    <section className="space-y-6">
      <Menu items={menu_items} setSelectedItem={setFilter} />
      <div className="flex justify-between items-center !mt-10">
        <h1 className="text-3xl sm:text-5xl font-bold">News</h1>
        <Link
          to={"/news"}
          className="text-primary font-semibold hover:underline"
        >
          See all {">"}
        </Link>
      </div>
      <div className="flex lg:flex-nowrap flex-wrap">
        <PrimaryBlogCard {...blogs[0]} />
        <div>
          {blogs.map((blog, index) => {
            if (index !== 0) return <BlogCard key={index} {...blog} />;
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
